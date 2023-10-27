import React from "react";
import "../home/main.css";
import imge from "./img/IshiharaPlate1.png.png";

function Main() {
  return (
    <div>
      <div className="container">
        <div class="row">
          <div class="column">
            <div className="imge">
              <img src={imge} alt="About_Photo" className="about-img" />
            </div>
          </div>
          <div class="column">
            <br></br>
            <div className="btnset">
              <button className="btn">1</button>
              <button className="btn">2</button>
              <button className="btn">3</button>
              <button className="btn">4</button>
              <button className="btn">5</button> <br></br>
              <button className="btn">6</button>
              <button className="btn">7</button>
              <button className="btn">8</button>
              <button className="btn">9</button>
              <button className="btn">0</button>
            </div>
            <div className="btnsetful">
              <button className="detailsbtn">SKIP/UNSURE</button>
              <button className="detailsbtn">EXIT</button>
              <button className="detailsbtn">RESTART</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
