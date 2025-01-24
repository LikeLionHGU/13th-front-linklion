import logo from "../assets/signUp/Logo.svg";
import Appbar from "../assets/Home/앱바.svg";
import background from "../assets/Home/Intersect.png";
import "../styles/Main.css";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  const signPageEnter = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="HomeBody">
        {/* 배경 이미지 */}
        <img className="background" src={background} alt="Background" />

        {/* 헤더 */}
        <header className="homeHeader">
          <img className="headerImg" src={Appbar} alt="header" />
          <div className="Logo">
            <img src={logo} alt="logo" />
            <span>LINKLION</span>
          </div>
        </header>

        {/* 텍스트 상단 박스 */}
        <div className="ContentBox">
          <h1 className="ServiceName">LINKLION</h1>
        </div>

        {/* 하단 설명 박스 */}
        <div className="TextBox">
          <h2 className="DescriptionTitle">
            멋쟁이사자처럼 대학교의
            <br />
            혁신과 연대를 상징하는
            <br />
            소모임 플랫폼
          </h2>
        </div>

        {/* 입장하기 버튼 */}
        <button className="Enter" onClick={signPageEnter}>
          입장하기
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M10 17l5-5-5-5v10z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Home;
