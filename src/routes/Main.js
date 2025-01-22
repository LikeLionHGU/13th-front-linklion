import { useEffect, useState } from "react";
import appbar from "../assets/Appbar.png";
import background from "../assets/Main_BackGround.png";
import logo from "../assets/Logo(Icon).png";
import "../css/Main.css";
import Appbar from "../assets/Appbar.png";


function Main() {
  return (
    <div>
      <div className="body">
        <div className="background">
          <img src={background} alt="background" className="background"></img>

          <header className="header">
            <div className="headerImg">
              <img src={appbar} alt="header" className="headerImg"></img>
            </div>
            <div className="headerLogo">
              <button className="headerLogo"></button>
              <img src={logo} className="headerLogo"></img>
              <div className="headerLogoText">LINKLION</div>
            </div>
            <button className="headerLogin">로그인</button>
          </header>

        <div className="ButtonGroup">
          <button className="MakeGroup">그룹 만들기<span className="flowbite--arrow-up-outline"></span></button>
          <button className="SearchGroup">그룹 둘러보기</button>
        </div> 

        <div className="Introduce">
          <h1>LINKLION</h1>
          <p>LINKLION은 멋쟁이 사자처럼의 모든 멤버들이 아이디어와 열정을 연결하여 더 큰 가능성을 만들어가는 소모임 플랫폼입니다.</p>
          <p>LionLink는 단순한 소모임 플랫폼을 넘어, 멋쟁이 사자처럼의 혁신과 연대를 상징합니다.이곳에서 시작된 소모임이 미래의 스타트업이 될 수도 있고, 평생의 인연이 될 수도 있습니다.</p>
        </div> {/* 소개글 */}
        
        </div> {/* background */}
      </div> {/* body */}
    </div>
  );
}

export default Main;
