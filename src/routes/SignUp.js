import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import signLogo from "../assets/signUp/Logo.svg";
import signUpAppbar from "../assets/signUp/detail-appbar.svg";
import RadioGroup from "../components/RadioGroup";
import Radio from "../components/Radio";

import "../components/styles/SignUp.css";

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
        navigate("/");
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
        <div className="signUpAppbar">
          <img className="signUpAppbar" src={signUpAppbar} alt="sign-appbar" />
          <div className="logoDiv">
            <Link to="/">
              <img id="signUp-logo" src={signLogo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="wrapper">
          <div className="signUp-FBox">
            <div className="signUp-top"></div>
            <div className="signUp-box">
              <div className="signUp">
                <h1 id="signUp">회원가입</h1>
                <hr />
                <div className="signUpName, signUpDiv">
                  <h3 id="signUpName">이름</h3>
                  <input
                    className="signUpComponent"
                    value={name}
                    onChange={(e) => setMemName(e.target.value)}
                  />
                </div>
                <div className="signUpTrack, signUpDiv">
                  <div className="track-box">
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
                </div>
                <div className="signUpPassword, signUpDiv">
                  <h3 className="signUpTitle">비밀번호</h3>
                  <input
                    type="password"
                    className="signUpComponent"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="Btn">
                  <button className="signUpBtn" onClick={handleSignUp}>
                    회원가입
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
