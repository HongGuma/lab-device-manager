import React from "react";
import { useHistory } from "react-router-dom";
import "../App.css";

const admin = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useHistory();

  function logout() {
    sessionStorage.clear();
    history.push("/login");
    window.location.reload();
  }

  return (
    <div className="admin-wrap">
      <div className="admin-width">
        <p>로그인 완료</p>
        <p className="logout" onClick={logout}>
          로그아웃
        </p>
        <p>{sessionStorage.getItem("name")}</p>
      </div>
    </div>
  );
};

export default admin;
