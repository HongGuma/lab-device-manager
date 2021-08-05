/**
*@title 페이지 하단
*@date 21-08-05
*@author 홍수희
*@desc 헤더처럼 항상 화면에 나와야함
*@etc(change)
*/
import React from 'react';

import kogicImg from './images/kogic_logo.png';

class Footer extends React.Component{
    render() {
        return (
            <div className="footer-wrap">
                <div className="footer-width">
                    <p>This is the equipment management page of Kogic.</p>
                    <p>This page was last edited on 5 August 2021   (v0.1.0)</p>
                </div>
            </div>
        );
    }
}

export default Footer;