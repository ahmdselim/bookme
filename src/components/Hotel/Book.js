import React from "react";
import BookTable from "./BookTable";
import InfoDrug from "./InfoDrug";

const Book = ({
  data,
  setBook,
  book,
  days,
  setDays,
  gusts,
  setTo,
  setFrom,
  setGusts,
  to,
  from,
}) => {
  const list = [];
  for (let i = 0; i < 20; i++) {
    list.push({ i });
  }

  return (
    <div className="drugBook">
      <h2>التوافر</h2>
      <h5>متى ترغب بالإقامة في {data.data.nameDrug}</h5>
      {/* <div className="row">
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
      </div> */}
      <BookTable
        data={data}
        setBook={setBook}
        book={book}
        days={days}
        setDays={setDays}
        gusts={gusts}
        setGusts={setGusts}
        setFrom={setFrom}
        setTo={setTo}
        to={to}
        from={from}
      />
      <InfoDrug data={data} />
    </div>
  );
};

export default Book;
