/**
*@title main page
*@date 21-08-02
*@author 홍수희
*@desc 홈페이지 첫 화면
*@etc(change)
*/
import React from 'react'

import deskImg from '../images/desk_color.png';
import deviceImg from '../images/device_color.png';
import microImg from '../images/microscope_color.png';
import bloodtubeImg from '../images/bloodtube_color.png';
import MainListContainer from "./MainListContainer";
import RentalListContainer from "./rental/RentalListContainer";

class Main extends React.Component{
    render() {
        return (
            <div className="main-wrap">
                <section className="main-current">
                    <span>비품현황</span>
                    <ul className="cont-ul">
                        <li><img src={deskImg}/><p>사무용품</p></li>
                        <li><img src={deviceImg}/><p>전자기기</p></li>
                        <li><img src={microImg}/><p>실험실비품</p></li>
                        <li><img src={bloodtubeImg}/><p>샘플관리</p></li>
                    </ul>
                    <MainListContainer/>
                </section>
                <section className="main-rental">
                    <RentalListContainer/>
                </section>
                <section>
                    <p>여백</p>
                </section>
            </div>
        );
    }
}

export default Main;