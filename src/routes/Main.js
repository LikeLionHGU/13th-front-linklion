import { useEffect, useState } from "react";
import Appbar from "../assets/Appbar.png";


function Main() {
  return (
    <div>
      <header className="header">
        <div className="headerImg">
          <img src={Appbar} alt="header"></img>
        </div>
        <img className="headerLogo"></img>
        <img className="headerLogin"></img>
      </header>
    </div>
  );
}

export default Main;
