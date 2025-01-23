import { useEffect, useState } from "react";
// import background from "../assets/Main_BackGround.png";
import logo from "../assets/Home/logo.png";
import Appbar from "../assets/Home/앱바.svg";
import background from "../assets/Home/Intersect.png";
import "../styles/Main.css";
import CreatGroupModal from "../components/CreatGroupModal";


function Home(){

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(true);
    console.log("ismodalOpen" + isModalOpen)
  };

  return(
    <div>
      <div className="HomeBody">
        <img className="background" src={background} alt="Background"/>
        <header className="homeHeader">
          <img className="headerImg" src={Appbar} alt="header"/>
          <div className="Logo">
            <img src={logo}/>
            <span>LINKLION</span>
          </div>
        </header>

        <button className="Enter" onClick={toggleModal}  >입장하기</button>

        <div className="TextBox">
          <h1>LINKLION</h1>
          <span>멋쟁이 사자처럼의 혁신과 연대를 상징하는 소모임 플랫폼</span>
        </div>
      </div>
      <CreatGroupModal setIsModalOpen={isModalOpen} />
    </div>
  )
}

export default Home;
