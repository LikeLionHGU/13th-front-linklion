import { useEffect, useState } from "react";
import list_appbar from "../assets/list/list_appbar.svg";
import Card from "../components/Card";
import "../styles/List.css";

function List() {
//   const [cards, setCards] = useState([]);
//   const getCards = async () => {
//     const response = await fetch(`http://localhost:3001/`);
//     const json = await response.json();
//     setCards(json.data.cards);
//   };
//   useEffect(() => {
//     getCards();
//   }, []);

  return (
    <div id="main">
      <div id="detail-appbar-box">
        <img id="detail-appbar" src={list_appbar} alt="detail-appbar"></img>
      </div>
      <div id="create-button-box">
        {/* <img id="create-button" src={create_button} alt="create-button"></img> */}
      </div>
      <div id="card-grid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

        {/* {cards.map((card) => (
          <div id="card-list">
            <Card
              img={card.img}
              title={card.title}
              name={card.name}
              category1={card.category1}
              category2={card.category2}
              category3={card.category3}
              description={card.description}
            />
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default List;
