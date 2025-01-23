import "../styles/Card.css";
import badminton from "../assets/list/card/badminton.png";
import soccer from "../assets/list/card/soccer.png";

function Card({
  img,
  title,
  category1,
  category2,
  category3,
  name,
  description,
}) {
  return (
    <div id="card">
      <div id="image-box">
        {/* <img id="category-img" src={img} alt="category_image" /> */}
        <img id="category-img" src={badminton} alt="category_image" />
      </div>
      <div id="info-box">
        <div id="title-box">배드민턴 한 판 칩시다</div>
        {/* <div id="title-box">{title}</div> */}

        {/* <div id="name-box">{name}</div> */}

        <div id="category-box">
          <div className="category">스포츠</div>
          <div className="category">양체공</div>
          <div className="category">2시간</div>
        </div>
        {/* 
        <div id="apply-button-box">
          <div id="description-box">{description} </div>
        </div> */}
      </div>
    </div>
  );
}

export default Card;
