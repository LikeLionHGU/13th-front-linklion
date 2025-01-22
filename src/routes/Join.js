import { useEffect, useState } from "react";
import logo from "../assets/Logo(Icon).png";
import "../components/styles/Main.css";
import Appbar from "../assets/join/detail-appbar.svg";

function Join() {
  const [track, setTrack] = useState("기획");
  return (
    <div>
      <div className="body">
        <div className="detailAppbar">
          <img className="detailAppbar" src={Appbar}></img>
          <div className="appbarLogo"></div>
          <div className="headerLogo">
            <button className="headerLogo"> </button>
            <img src={logo} className="headerLogo"></img>
          </div>
        </div>
        <div className="joinCard">
          <div className="join">
            <h1 className="join">회원가입</h1>
            <hr />
            <div className="joinName">
              <h3 className="joinTitle">이름</h3>
              <input type="text" className="joinComponent"></input>
            </div>
            <div className="joinTrack"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
