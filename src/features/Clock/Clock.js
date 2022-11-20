import { useEffect, useState } from "react";
import "./Clock.css";

const numbers = [12, 3, 6, 9];
const positionX = [180, 360, 200, 20];
const positionY = [20, 200, 340, 200];

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    const hr = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();

    const hourHand = document.getElementById("hourHand");
    const minuteHand = document.getElementById("minuteHand");
    const secondHand = document.getElementById("secondHand");

    hourHand.style.transform = `rotate(${hr * 30 + min * 0.5 - 180}deg)`;
    minuteHand.style.transform = `rotate(${min * 6 - 180}deg)`;
    secondHand.style.transform = `rotate(${sec * 6 - 180}deg)`;

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div className="mainContainer">
      <div className="clock">
        <div>
          {numbers.map((item, index) => {
            return (
              <div
                key={index}
                className="clockNums"
                style={{
                  top: `${positionY[index]}px`,
                  left: `${positionX[index]}px`,
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className="face">
          <div id="secondHand" className="hand second"></div>
          <div id="minuteHand" className="hand minute"></div>
          <div id="hourHand" className="hand hour"></div>
          <div className="hand center"></div>
        </div>
      </div>
    </div>
  );
}

export default Clock;
