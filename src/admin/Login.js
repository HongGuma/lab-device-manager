/**
*@title 로그인 페이지
*@date 21-08-10
*@author 홍수희
*@desc 로그인 기능
*@etc(change)
*/

import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from "axios";
import admin from "./Admin";

const Login = () => {
    const [adminID,setID] = useState(null);
    const [adminPW,setPW] = useState(null);
    const loginURL = 'http://210.218.217.110:3103/api/login.php';
    const adminURL = 'http://210.218.217.110:3103/api/getAdmin.php';
    const [result,setResult] = useState(null);
    const [loginToggle,setLogin] = useState(true);
    const [adminToggle,setAdmin] = useState(false);
    const history = useHistory();

    const inputID = (e) => {
        setID(e.target.value);
    }
    const inputPW = (e) => {
        setPW(e.target.value);
    }
    async function getAdminInfo(num){
        setResult(null);
        if(num === 0){
            const res= await axios.get(adminURL+'?id='+adminID);
            setResult(res.data);
            console.log(res.data);
            console.log(result[0].id);
            sessionStorage.setItem('id',result[0].id);
            sessionStorage.setItem('name',result[0].name);
            if(sessionStorage.getItem('id')!==null){
                setLogin(!loginToggle);
                setAdmin(!adminToggle);
                alert("로그인 성공");
                history.push('/admin');
            }

        }
    }

    async function loginFunc(){
        if(adminID == null || adminPW == null){
            alert('아이디 또는 비밀번호를 입력해주세요.');
        }else{
            await axios({
                method:'POST',
                url:loginURL,
                data:{
                    id:adminID,
                    pw:adminPW
                },
                header:{
                    'Content-Type' : 'aplication/json'
                }
            }).then((res)=>{
                switch (res.data){
                    case 0:
                        getAdminInfo(res.data); break;
                    case 1:
                        alert("아이디 또는 비밀번호가 일치하지 않습니다."); break;
                    case -1:
                        alert("(db connect error) 관리자에게 문의하세요."); break;
                    default:
                        alert("(error) 관리자에게 문의하세요."); break;
                }
            })
        }
    }

    return (
        <div className="login-wrap">
            <div className="login-width">
                <div className="login-inner">
                    <form onSubmit={loginFunc}/>
                        <div className="login-input">
                            <p>아이디</p>
                            <input type="text" name="adminID" onChange={(e)=>inputID(e)}/>
                        </div>
                        <div className="login-input">
                            <p>비밀번호</p>
                            <input type="password" name="adminPW" onChange={(e)=>inputPW(e)}/>
                        </div>
                        <div className="login-btn">
                            <button onClick={loginFunc}>로그인</button>
                        </div>
                    <form/>
                    <div className="login-etc-btn">
                        <p>계정생성</p>
                        <p>아이디 찾기</p>
                        <p>비밀번호 변경</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login