/**
*@title header bar
*@date 21-08-02
*@author 홍수희
*@desc 항상 상단에 보이는 헤더
*@etc(change)
*/
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import newlogoIMG from '../images/new_logo.png';

const Header = () => {
    const [linkText,setText] = useState(null);
    const [linkPath,setPath] = useState(null);
    let session = sessionStorage.getItem('id');

    useEffect(()=>{
        if(sessionStorage.getItem('id')==null){
            setText('로그인');
            setPath('/login');
        }else{
            setText('관리자');
            setPath('/admin');
        }
    },[session])

    return(
        <div className='header-wrap'>
            <div className="header-top">
                <ul>
                    <li><Link to="/">홈으로</Link></li>
                    <li><a href="http://in.genomelab.org/Main_Page">Lab wiki</a></li>
                    <li><Link to={linkPath}>{linkText}</Link></li>
                    <li style={{borderRight:"none"}}>비어있음</li>
                </ul>
            </div>
            <div className='header-menu'>
                <div className="header-logo">
                    <Link to="/"><img className="logo-img" src = {newlogoIMG}  alt="kogic logo"/></Link>
                </div>
                <ul>
                    <li>
                        <Link to="/office">연구실</Link>
                    </li>
                    <li>
                        <Link to="/server">서버</Link>
                    </li>
                    <li>
                        <Link to="/laboratory">실험실</Link>
                    </li>
                    <li style={{borderRight:"none"}}>
                        <Link to="/rental">비품대여</Link>
                    </li>
                </ul>
            </div>
        </div>
    );

}

export default Header;