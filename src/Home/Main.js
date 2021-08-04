/**
*@title main page
*@date 21-08-02
*@author 홍수희
*@desc 홈페이지 첫 화면
*@etc(change)
*/
import React from 'react';
import {Link} from 'react-router-dom';

import newlogoIMG from '../images/new_logo.png';
import deskImg from '../images/desk_color.png';
import deviceImg from '../images/device_color.png';
import microImg from '../images/microscope_color.png';
import bloodtubeImg from '../images/bloodtube_color.png';

class Main extends React.Component{
    render() {
        return (
            <div className="main-wrap">
                <div className="main-logo">
                    <img className="main-logo-img" src={newlogoIMG}/>
                </div>
                <div className="main-content">
                    <ul>
                        <li>
                            <Link to="/office"><img src={deskImg}/>사무용품</Link>
                        </li>
                        <li>
                            <Link to="/device"><img src={deviceImg}/>전자기기</Link>
                        </li>
                        <li>
                            <Link to="/laboratory"><img src={microImg}/>실험실비품</Link>
                        </li>
                        <li style={{borderRight:"none"}}>
                            <Link to="/sample"><img src={bloodtubeImg}/>샘플관리</Link>
                        </li>
                    </ul>
                </div>
                <div className="main-bg-color">

                </div>
            </div>
        );
    }
}

export default Main;