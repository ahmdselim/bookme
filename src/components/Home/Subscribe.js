import React from "react";
import { Link } from "react-router-dom";
const Subscribe = () => {
  return (
    <>
      <div className="Subscribe">
        <div className="row">
          <div>
            <h2>وفر وقتك ومالك!</h2>
            <span>اشترك وسنرسل أفضل العروض إليك</span>
          </div>
          <div>
            <form>
              <input
                type="text"
                placeholder="عنوان البريد الإلكتروني الخاص بك"
              />
              <button>اشتراك</button>
            </form>
          </div>
        </div>
      </div>
      <div className="drug">
        <div className="row">
          <Link to="/">اعرض عقارك علي موقعنا</Link>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
