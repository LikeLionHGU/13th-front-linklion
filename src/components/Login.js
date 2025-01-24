import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Mung from "../assets/Login/mung.svg";
import "../components/styles/Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loginCheck, setLoginCheck] = useState(false); // 로그인 상태 체크

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    // 로그인 처리 로직을 구현합니다.
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));

    const response = await fetch(
      "https://one3th-front-api.onrender.com/grouping/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          password: password,
        }),
      }
    );
    const result = await response.json();

    if (response.status === 200) {
      setLoginCheck(false);
      // Store token in local storage
      sessionStorage.setItem("message", result.message);
      sessionStorage.setItem("memberId", result.memberId); // 여기서 userid를 저장
      navigate("/list"); // 로그인 성공시 list로 이동
    } else {
      setLoginCheck(true);
    }
  };

  return (
    <div className="body">
      <dic className="wrapper">
        <div className="login-container">
          <div className="login-top"></div>
          <div className="login-box">
            <div className="login">
              <img src={Mung}></img>
              <h1>로그인</h1>
            </div>
            <hr></hr>
            <form className="login-form" onSubmit={handleLogin}>
              <div className="login-component">
                <label className="username" htmlFor="username">
                  이름
                </label>
                <input
                  type="text"
                  id="username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="login-component">
                <label className="password" htmlFor="password">
                  비밀번호
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {loginCheck && (
                  <label style={{ color: "red" }}>
                    이름 혹은 비밀번호가 틀렸습니다.
                  </label>
                )}
              </div>
              <button className="loginBtn" onClick={handleLogin}>
                로그인
              </button>

              <p className="signup-link">
                <Link
                  to="/signup"
                  id="linkToSignUp"
                  style={{ textDecoration: "none" }}
                >
                  회원가입
                </Link>
              </p>
            </form>
          </div>
        </div>
      </dic>
    </div>
  );
};

export default Login;
