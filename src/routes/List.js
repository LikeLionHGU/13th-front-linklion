// import { useEffect, useState } from "react";
import list_appbar from "../assets/list/list_appbar.svg";
import list_logo from "../assets/list/logo.svg";
import list_profile from "../assets/list/profile.svg";
import previous_arrow from "../assets/list/previous_arrow.svg";
import next_arrow from "../assets/list/next_arrow.svg";
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
      <div id="list-appbar-box">
        <img id="list-appbar" src={list_appbar} alt="list-appbar" />
        <img id="list-logo" src={list_logo} alt="logo" />
        <img id="list-profile" src={list_profile} alt="profile" />
        <div id="list-username">
          <span style={{ textDecoration: "underline" }}>김원진</span>님,
          반가워요!
        </div>
      </div>
      <div id="list-previous-arrow-box">
        <img id="previous-arrow" src={previous_arrow} alt="previous-arrow" />
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
      <div id="list-next-arrow-box">
        <img id="next-arrow" src={next_arrow} alt="next-arrow" />
      </div>
    </div>
  );
}

export default List;
