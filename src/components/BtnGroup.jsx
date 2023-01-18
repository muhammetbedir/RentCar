import { useState } from "react";

function BtnGroup({ btn, setBtn }) {
  // const [btn, setBtn] = useState(1);
  return (
    <>
      <button
        className={btn === 1 ? "active" : undefined}
        onClick={() => setBtn(1)}
      >
        Araçlar
      </button>
      <button
        className={btn === 2 ? "active" : undefined}
        onClick={() => setBtn(2)}
      >
        Kiralanan Araçlar
      </button>
      <button
        className={btn === 3 ? "active" : undefined}
        onClick={() => setBtn(3)}
      >
        Tüm Yorumlar
      </button>
    </>
  );
}

export default BtnGroup;
