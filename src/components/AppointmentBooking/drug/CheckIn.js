import React from "react";

const CheckIn = ({
  drug,
  setLoginFrom,
  setLoginTo,
  setLogoutFrom,
  setLogoutTo,
}) => {
  return (
    <>
      <div className="collapsible">
        <input type="checkbox" id="collapsible-head6" />
        <label htmlFor="collapsible-head6" className="collapsibleLabel">
          تسجيل الوصول
        </label>
        <div className="collapsible-text">
          {drug === "apartment" ||
          drug === "house" ||
          drug === "hotel" ||
          drug === "castle" ? (
            <form>
              <p>تسجيل الدخول</p>
              <div className="row">
                <div>
                  <label>من</label>
                  <input
                    type="time"
                    min={new Date().toISOString().slice(0, 10)}
                    onChange={(e) => setLoginFrom(e.target.value)}
                  />
                </div>
                <div>
                  <label>الي</label>
                  <input
                    type="time"
                    min={new Date().toISOString().slice(0, 10)}
                    onChange={(e) => setLoginTo(e.target.value)}
                  />
                </div>
              </div>
              <p>تسجيل الخروج</p>
              <div className="row">
                <div>
                  <label>من</label>
                  <input
                    type="time"
                    min={new Date().toISOString().slice(0, 10)}
                    onChange={(e) => setLogoutFrom(e.target.value)}
                  />
                </div>
                <div>
                  <label>الي</label>
                  <input
                    type="time"
                    min={new Date().toISOString().slice(0, 10)}
                    onChange={(e) => setLogoutTo(e.target.value)}
                  />
                </div>
              </div>
            </form>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CheckIn;
