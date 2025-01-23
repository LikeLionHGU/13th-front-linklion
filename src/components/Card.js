import "../styles/Card.css";
import badminton from "../assets/list/card/badminton.png";
import soccer from "../assets/list/card/soccer.png";

function Card({ img, title, category }) {
  return (
    <div id="list-card">
      <div id="list-image-box">
        {/* <img id="category-img" src={img} alt="category_image" /> */}
        <img id="list-category-img" src={badminton} alt="category_image" />
      </div>
      <div id="list-info-box">
        {/* <div id="title-box">{title}</div> */}
        <div id="list-title-box">배드민턴 칠 사람 붙어라 </div>

        <div id="list-content-box">
          {/* <div id="category">{category}</div> */}
          <div id="list-category">스포츠</div>
          <div id="list-content">
            <div id="list-location">
              <span className="list-content-key">위치</span>
              <span className="list-content-value">장량동재난구호소</span>
            </div>
            <div id="list-organizer">
              <span className="list-content-key">주선자</span>
              <span className="list-content-value">김원진</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
