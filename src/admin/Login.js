/**
 *@title 로그인 페이지
 *@date 21-09-03
 *@author 홍수희
 *@desc 로그인 기능
 *@etc(change)
 */

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

/**
 *
 * @returns {JSX.Element}
 * @constructor 로그인 화면
 */
const Login = () => {
  const [adminID, setID] = useState(null);
  const [adminPW, setPW] = useState(null);
  const loginURL = "http://localhost:3103/api/postLogin.php";
  const adminURL = "http://localhost:3103/api/getAdmin.php";
  const [loginToggle, setLogin] = useState(true);
  const [adminToggle, setAdmin] = useState(false);
  const history = useHistory();

  /**
   * 아이디 입력시 text 받아옴
   * @param e :input에서 받아온 값
   */
  const inputID = (e) => {
    setID(e.target.value);
  };
  /**
   * 비밀번호 입력시 text 받아옴
   * @param e :input에서 받아온 값
   */
  const inputPW = (e) => {
    setPW(e.target.value);
  };
  /**
   * 관리자 인증후 관리자 이름,아이디,소속,권한 불러옴
   * 관리자 이름, 아이디만 세션에 저장
   */
  function getAdminInfo() {
    axios.get(adminURL + "?id=" + adminID).then((res) => {
      // console.log(res.data)
      sessionStorage.setItem("id", res.data[0].id);
      sessionStorage.setItem("name", res.data[0].name);
      sessionStorage.setItem("auth", res.data[0].authority);
      setLogin(!loginToggle);
      setAdmin(!adminToggle);
      alert("로그인 성공");
      history.push("/admin");
      window.location.reload();
    });
  }
  /**
   * 로그인 버튼 클릭시 작동하는 함수
   * axios.post 로 id,pw 전달
   * @returns {Promise<void>}
   */
  async function loginFunc() {
    if (adminID == null || adminPW == null) {
      alert("아이디 또는 비밀번호를 입력해주세요.");
    } else {
      await axios({
        method: "POST",
        url: loginURL,
        data: {
          id: adminID,
          pw: adminPW,
        },
        header: {
          "Content-Type": "aplication/json",
        },
      }).then((res) => {
        // console.log(res);
        switch (res.data) {
          case 0:
            getAdminInfo();
            break;
          case 1:
            alert("아이디 또는 비밀번호가 일치하지 않습니다.");
            break;
          case -1:
            alert("(db connect error) 관리자에게 문의하세요.");
            break;
          default:
            alert("(error) 관리자에게 문의하세요.");
            break;
        }
      });
    }
  }

  function onKeyPress(e) {
    if (e.key === "Enter") {
      loginFunc();
    }
  }

  return (
    <div className="login-wrap">
      <div className="login-width">
        <div className="login-inner">
          <form onSubmit={loginFunc} />
          <div className="login-input">
            <p>아이디</p>
            <input type="text" name="adminID" onChange={(e) => inputID(e)} />
          </div>
          <div className="login-input">
            <p>비밀번호</p>
            <input
              type="password"
              name="adminPW"
              onChange={(e) => inputPW(e)}
              onKeyPress={onKeyPress}
            />
          </div>
          <div className="login-btn">
            <button onClick={loginFunc}>로그인</button>
          </div>
          <form />
        </div>
      </div>
    </div>
  );
};

export default Login;
