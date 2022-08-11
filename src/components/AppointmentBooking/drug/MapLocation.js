import React, { useRef, useState, useMemo, useCallback } from "react";
import { Outlet } from "react-router-dom";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import useGeoLocation from "./useGeoLocation";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import binoculars from "../../../images/binoculars.png";
const MapLocation = ({ position, setPosition }) => {
  const location = useGeoLocation();
  const markerIcon = new L.Icon({
    iconUrl: require("../../../images/marker.png"),
    iconSize: [40, 40],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
  });
  const mapRef = useRef();
  const ZOOM_LEVEL = 8;
  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      mapRef.current.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        ZOOM_LEVEL,
        { animate: true }
      );
    } else {
      alert("من فضلك اسمح لنا باستخدام نظام تحديد موقعك");
    }
  };

  function DraggableMarker() {
    const [draggable, setDraggable] = useState(false);
    const markerRef = useRef(null);
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current;
          if (marker != null) {
            setPosition(marker.getLatLng());
          }
        },
      }),
      []
    );
    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d);
    }, []);

    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
        icon={markerIcon}
      >
        <Popup minWidth={90}>
          <strong onClick={toggleDraggable}>
            {draggable
              ? " لقد ضغط علي النص ابدأ بتحديد موقعك عن طريق تحريك العلامه"
              : "اضغط علي النص لتحريك العلامه لتحديد موقعك"}
          </strong>
        </Popup>
      </Marker>
    );
  }
  return (
    <>
      <div className="collapsible">
        <input type="checkbox" id="collapsible-head15" />
        <label htmlFor="collapsible-head15" className="collapsibleLabel">
          تحديد موقع عقارك
        </label>
        <div className="collapsible-text">
          <MapContainer
            center={[50.44, 30.045]}
            zoom={ZOOM_LEVEL}
            scrollWheelZoom={false}
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* {location.loaded && !location.error && (
              <>
                <DraggableMarker />
              </>
            )} */}
            <DraggableMarker />
          </MapContainer>

          <img
            src={binoculars}
            className="binoculars"
            onClick={showMyLocation}
          />
          <br />
          <strong style={{ fontSize: "14px" }}>
            الرجاء الضغط علي علامه تحديد موقع عقارك هيظهر تعليمات اضغط عليها ثم
            ابدأفي تحديد موقع عقارك
          </strong>
        </div>
      </div>
    </>
  );
};

export default MapLocation;
