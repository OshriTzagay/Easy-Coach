import "./Intro.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const Intro = () => {
  // const [Prediction, setPrediction] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="intro-bg"></div>

        <div className="go-to-mission">
          <div className="wrap-div">
            <h1 style={{ fontSize: "60px" }}>Happy Champions-League Final</h1>
            {/* <p style={{ color: "white", fontSize: "20px" }}>{Prediction}</p> */}
            {/* <button
              onClick={() => setPrediction("Liverpool 2-1")}
              style={{ fontSize: "15px" }}
            >
              Tzagay's Prediction
            </button> */}
            <button
              className="missionBtn"
              onClick={() => navigate("/mission1")}
            >
              Go To EasyCoach Mission
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
