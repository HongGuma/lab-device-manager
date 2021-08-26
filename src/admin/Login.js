/**
*@title 로그인 페이지
*@date 21-08-10
*@author 홍수희
*@desc 로그인 기능
*@etc(change)
*/

import React from 'react';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            adminID:'',
            adminPW:'',
        }
    }
    inputID = (e) => {
        this.setState({adminID:e.target.value})
    }
    inputPW = (e) => {
        this.setState({adminPW:e.target.value})
    }
    login = () =>{
        console.log(this.state.adminID+", "+this.state.adminPW);
    }
    render() {
        return (
            <div className="login-wrap">
                <div className="login-width">
                    <div className="login-inner">
                        <div className="login-input">
                            <p>아이디</p>
                            <input type="text" id="adminID" onChange={this.inputID}/>
                        </div>
                        <div className="login-input">
                            <p>비밀번호</p>
                            <input type="password" id="adminPW" onChange={this.inputPW}/>
                        </div>
                    </div>
                    <div className="login-btn">
                        <button onClick={this.login}>로그인</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;