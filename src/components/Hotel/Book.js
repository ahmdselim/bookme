import React from "react";
import BookTable from "./BookTable";
import InfoDrug from "./InfoDrug";

const Book = (props) => {
  const { data } = props;
  const list = [];
  for (let i = 0; i < 20; i++) {
    list.push({ i });
  }

  const selected = () => {
    return (
      <select>
        <option>عدد الغرف</option>
      </select>
    );
  };
  return (
    <div className="drugBook">
      <h2>التوافر</h2>
      <h5>متى ترغب بالإقامة في {data.data.nameDrug}</h5>
      <div className="row">
        <form>
          <input type="date" />
          <input type="date" />
          <button>تحقق من التوافر</button>
        </form>
        <div>
          <select>
            <option>عدد الغرف</option>
            {list.map((data, a) => (
              <option key={a}>{data.i}</option>
            ))}
          </select>
          <select>
            <option>عدد الاشخاص</option>
            {list.map((data, a) => (
              <option key={a}>{data.i}</option>
            ))}
          </select>
          <button>تطبيق التغيرات</button>
        </div>
      </div>
      <BookTable data={data} />
      <InfoDrug data={data} />
    </div>
  );
};

export default Book;
