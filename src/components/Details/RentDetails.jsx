import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Payment from "./Payment";

function RentDetails({ setPage, page }) {
  const [cardInfo, setCardInfo] = useState({
    name: "",
    number: "",
    date: "",
    cvv: "",
  });
  const [totalDay, setTotalDay] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    // setTotalDay(end.getDate() - start.getDate());
    // console.log(end.diff(start));
    setTotalDay(
      Math.floor(
        (Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) -
          Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())) /
          (1000 * 60 * 60 * 24)
      )
    );
  };
  return (
    <div className="rentDetails">
      <div className="rentDate">
        <h3>Tarih Aralığı Seçiniz:</h3>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          selectsRange
          // inline
        />
      </div>
      <div className="rentDate">
        <h3>Toplam Tutar:</h3>
        <h2>{totalDay * 500 + " TL"}</h2>
      </div>
      <Payment setCardInfo={setCardInfo} cardInfo={cardInfo} />

      {cardInfo.cvv && cardInfo.date && cardInfo.name && cardInfo.number && (
        <button
          className="detailComponentBtn"
          // style={{ width: "100%" }}
          onClick={() => setPage(page + 1)}
        >
          Kirala
        </button>
      )}
    </div>
  );
}

export default RentDetails;
