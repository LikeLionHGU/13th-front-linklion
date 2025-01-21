import "./styles/Card.css";
import badminton from "../assets/card/badminton.png";
import soccer from "../assets/card/soccer.png"

const card_lists = [
  {
    id: 1,
    img: {badminton},
    title: "배드민턴 칠 사람~",
    category1: "운동",
    category2: "즐겜",
    category3: "친목",
    name: "김원진",
    description: "우리 모두 함께 건강을 증진시키며 친목을 도모해봐요~",
  },
  {
    id: 2,
    img: {soccer},
    title: "축구 한 판 합시다",
    category1: "운동",
    category2: "빡겜",
    category3: "친목 X",
    name: "정몽규",
    description: "대한민국 월드컵 우승을 향하여",
  },
];

function Card() {
  return (
    <div id="card">
      <div id="image-box">
        <img id="category-img" src={badminton} alt="badminton" />
      </div>
      <div id="info-box">
        <div id="title-box">배드민턴 칠 사람~~</div>
        <div id="name-box">김원진</div>
        <div id="category-box">
          <div className="category">운동</div>
          <div className="category">즐겜</div>
          <div className="category">친목</div>
        </div>
        <div id="description-box">
          우리 모두 함께 건강을 증진시키며 친목을 도모해봐요~
        </div>
        <div id="apply-button-box">
          <button id="apply-button">참가하기</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
