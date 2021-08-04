/**
*@title header bar
*@date 21-08-02
*@author 홍수희
*@desc 항상 상단에 보이는 헤더
*@etc(change)
*/
import React from 'react';
import {Link} from "react-router-dom";

import newlogoIMG from '../images/new_logo.png';

class Header extends React.Component{
    render() {
        return(
            <div className='header-wrap'>
                <div className="header-top">
                    <ul>
                        <li><Link to="/">홈으로</Link></li>
                        <li><a href="http://in.genomelab.org/Main_Page">Lab wiki</a></li>
                        <li>로그인</li>
                        <li style={{borderRight:"none"}}>English</li>
                    </ul>
                </div>
                <div className='header-menu'>
                    <div className="header-logo">
                        <img className="logo-img" src = {newlogoIMG} />
                    </div>
                    <ul>
                        <li>연구실</li>
                        <li>서버</li>
                        <li>실험실</li>
                        <li>샘플</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;