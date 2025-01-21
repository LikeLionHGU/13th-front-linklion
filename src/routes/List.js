import { useEffect, useState } from "react";
import detail_appbar from "../assets/grid/detail_appbar.png";
import create_button from "../assets/grid/create_button.png";
import Card from "../components/Card";
import "../styles/List.css"

function List() {
  return (
    <div id="main">
        <div id="detail-appbar-box">
          <img id="detail-appbar" src={detail_appbar} alt="detail-appbar"></img>
        </div>
        <div id="create-button-box">
          <img id="create-button" src={create_button} alt="create-button"></img>
        </div>
        <div id="card-list">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

        </div>
    </div>
  );
}

export default List;
