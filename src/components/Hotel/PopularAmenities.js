import React, { useRef, Fragment, useState, useMemo, useCallback } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useGeoLocation from "../AppointmentBooking/drug/useGeoLocation";

import L from "leaflet";
import { AiOutlineWifi } from "react-icons/ai";
import { GiTheater } from "react-icons/gi";
import { MdOutlineAir } from "react-icons/md";
import balcony from "../../images/bacony.ico";
import gear from "../../images/gear.ico";
import garden from "../../images/garden.ico";
import view from "../../images/view.ico";
import heating from "../../images/heating.ico";
import airConditioner from "../../images/airConditioner.ico";
import wifi from "../../images/wifi.ico";
import carCharge from "../../images/charge.ico";
import { BsHeart, BsLightning } from "react-icons/bs";

const PopularAmenities = (props) => {
  const { data } = props;
  const location = useGeoLocation();

  const mapRef = useRef();
  const markerIcon = new L.Icon({
    iconUrl: require("../../images/marker.png"),
    iconSize: [40, 40],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
  });

  return (
    <>
      <div className="drugDesc">
        <h3>
          {`اشعر وكأنك نجم واستمتع بالمعاملة والخدمات الراقية في
                      ${data.data.nameDrug}`}
        </h3>

        <div className="items">
          {data.data.conditioning ? (
            <div>
              <MdOutlineAir />
              <span> تكييف </span>
            </div>
          ) : null}
          {data.data.heating ? (
            <div>
              <GiTheater />
              <span> تدفئة </span>
            </div>
          ) : null}
          {data.data.wifi ? (
            <div>
              <AiOutlineWifi />
              <span> وايفاي </span>
            </div>
          ) : null}
          {data.data.carCharge ? (
            <div>
              <BsLightning />
              <span> محطة شحن السيارات الكهربائية </span>
            </div>
          ) : null}
        </div>

        <p>
          يقع {data.data.nameDrug} في {data.data.countryDrug} ,
          {data.data.cityDrug} ،
          {data.data.head ? <span> يوفر تراس </span> : null}
          {data.data.gardenView ? <span> يوفر شرفة </span> : null}
          {data.data.balcony ? <span> يوفر بلكونة </span> : null}
          {data.data.view ? <span> يوفر اطلالة </span> : null}
          وهو مكان إقامة يضم
          {data.data.smallBar ? <span> بار صغير </span> : null}
          {data.data.pool ? <span> مسبح </span> : null}
          {data.data.sauna ? <span> ساونا </span> : null}
          {data.data.flatTv ? <span> تليفزيون مسطح </span> : null}
        </p>

        <p>
          تتميز جميع أماكن الإقامة في {data.data.nameDrug}
          {data.data.conditioning ? <span> تكييف </span> : null}
          {data.data.heating ? <span> تدفئة </span> : null}
          {data.data.wifi ? <span> وايفاي </span> : null}
          {data.data.carCharge ? (
            <span> محطة شحن السيارات الكهربائية </span>
          ) : null}
        </p>

        <h4>أكثر المرافق رواجًا</h4>
        <div className="items">
          {data.data.conditioning ? (
            <div>
              <img src={airConditioner} />
              <span> تكييف </span>
            </div>
          ) : null}
          {data.data.heating ? (
            <div>
              <img src={heating} />
              <span> تدفئة </span>
            </div>
          ) : null}
          {data.data.wifi ? (
            <div>
              <img src={wifi} />
              <span> وايفاي </span>
            </div>
          ) : null}
          {data.data.carCharge ? (
            <div>
              <img src={carCharge} />
              <span> محطة شحن السيارات الكهربائية </span>
            </div>
          ) : null}
          {data.data.head ? (
            <div>
              <img src={gear} />
              <span> تراس </span>
            </div>
          ) : null}
          {data.data.gardenView ? (
            <div>
              <img src={garden} />
              <span> شرفة </span>
            </div>
          ) : null}
          {data.data.balcony ? (
            <div>
              <img src={balcony} />
              <span> بلكونة </span>
            </div>
          ) : null}
          {data.data.view ? (
            <div>
              <img src={view} />
              <span> اطلالة </span>
            </div>
          ) : null}
        </div>

        <MapContainer
          center={[data.data.lat, data.data.lng]}
          zoom={9}
          scrollWheelZoom={false}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {location.loaded && !location.error && (
            <>
              <Marker
                position={[data.data.lat, data.data.lng]}
                icon={markerIcon}
              >
                <Tooltip sticky>
                  <strong>{data.data.nameDrug}</strong>
                </Tooltip>
              </Marker>
            </>
          )}
        </MapContainer>
      </div>
    </>
  );
};

export default PopularAmenities;
