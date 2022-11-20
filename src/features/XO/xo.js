import { useState, useEffect } from "react";
import "./xo.css";

function Xo() {
  const FIELDS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [x, setX] = useState([]);
  const [o, setO] = useState([]);

  const generateOValue = (data) => {
    return Math.floor(Math.random() * (9 - 1 + 1)) + 1;
  };

  const handleXValues = (data) => {
    let copy = [...x];
    copy.push(data);
    setX(copy);
  };

  const handleOValues = () => {
    let value = generateOValue();
    if (
      x.findIndex((item) => item === value) > -1 &&
      o.findIndex((item) => item === value) > -1
    ) {
      return handleOValues();
    } else {
      let copy = [...o];
      copy.push(value);
      return setO(copy);
    }
  };

  useEffect(() => {
    if (x.length > o.length) {
      handleOValues();
    }
  }, [x.length, o.length]);

  return (
    <div className="mainConteiner">
      <div className="contentContainer">
        {FIELDS.map((item) => {
          if (o.findIndex((it) => it === item) > -1) {
            return <div className="items content">O</div>;
          }
          if (x.findIndex((it) => it === item) > -1) {
            return <div className="items content">X</div>;
          }
          return (
            <div className="items" onClick={() => handleXValues(item)}></div>
          );
        })}
      </div>
    </div>
  );
}

export default Xo;
