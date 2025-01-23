import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo(Icon).png";
import Appbar from "../assets/join/detail-appbar.svg";
import RadioGroup from "../components/RadioGroup";
import Radio from "../components/Radio";

function SignUp() {
  const [name, setMemName] = useState("");
  const [track, setTrack] = useState("PLANNER");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    const payload = {
      name: name,
      track: track,
      password: password,
    };

    console.log("payload" + payload);

    try {
      const response = await fetch(
        "https://one3th-front-api.onrender.com/grouping/signUp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (response.status === 200) {
        console.log("성공!");
        navigate("/login");
      } else if (response.status === 409) {
        alert("회원가입 실패: 이미 가입한 회원입니다.");
      } else if (response.status === 400) {
        alert("회원가입 실패: 빈칸이 있습니다.");
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  return (
    <div>
      <div className="body">
        <div className="detailAppbar">
          <img className="detailAppbar" src={Appbar} alt="Appbar" />
          <div className="appbarLogo"></div>
          <div className="headerLogo">
            <button className="headerLogo"></button>
            <img src={logo} className="headerLogo" alt="Logo" />
          </div>
        </div>
        <div className="joinCard">
          <div className="join">
            <h1 className="join">회원가입</h1>
            <hr />
            <div className="joinName">
              <h3 className="joinTitle">이름</h3>
              <input
                className="joinComponent"
                value={name}
                onChange={(e) => setMemName(e.target.value)}
              />
            </div>
            <div className="joinTrack">
              <RadioGroup label="트랙" value={track} onChange={setTrack}>
                <Radio name="track" value="PLANNER" defaultChecked>
                  기획
                </Radio>
                <Radio name="track" value="FRONT-END">
                  프론트엔드
                </Radio>
                <Radio name="track" value="BACK-END">
                  백엔드
                </Radio>
                <Radio name="track" value="DESIGNER">
                  디자이너
                </Radio>
              </RadioGroup>
            </div>
            <div className="joinPassword">
              <h3 className="joinTitle">비밀번호</h3>
              <input
                type="password"
                className="joinComponent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
              />
            </div>
          </div>
          <button className="signUpBtn" onClick={handleSignUp}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
