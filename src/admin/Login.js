/**
*@title 로그인 페이지
*@date 21-08-10
*@author 홍수희
*@desc 로그인 기능
*@etc(change)
*/

import React from 'react';
import axios from 'axios';

class Login extends React.Component{
    render() {
        return (
            <div className="login-wrap">
                <div className="login-width">
                    <div className="login-inner">
                        <div className="login-input">
                            <p>아이디</p>
                            <input type="text"/>
                        </div>
                        <div className="login-input">
                            <p>비밀번호</p>
                            <input type="password"/>
                        </div>
                    </div>
                    <div className="login-btn">
                        <button>로그인</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;