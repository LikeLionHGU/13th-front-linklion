import { useEffect, useState } from "react";
import detial_appbar from "../assets/grid/detail_appbar.png";
import create_button from "../assets/grid/create_button.png"


function List() {
  return (
    <div>
      <header className="header">
        <div className="headerImg">
          <img src={detial_appbar} alt="detail-appbar"></img>
          <img src={create_button} alt="create-button"></img>
        </div>
        <img className="headerLogo"></img>
        <img className="headerLogin"></img>
      </header>
    </div>
  );
}

export default List;
