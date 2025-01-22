import { useEffect, useState } from "react";
import background from "../assets/Main_BackGround.png";
import logo from "../assets/Logo(Icon).png";
import "../components/styles/Main.css";
import Appbar from "../assets/Appbar.png";

function Main() {
  return (
    <div>
      <div className="body">
        <div className="background">
          <img src={background} alt="background" className="background"></img>
          <header className="header">
            <div className="headerImg">
              <img src={Appbar} alt="header" className="headerImg"></img>
            </div>
            <div className="headerLogo">
              <button className="headerLogo"> </button>
              <img src={logo} className="headerLogo"></img>
            </div>

            <button className="headerLogin">로그인</button>
          </header>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
