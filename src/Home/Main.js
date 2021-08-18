/**
*@title main page
*@date 21-08-11
*@author 홍수희
*@desc 홈페이지 첫 화면
*@etc(change) 메인화면에서 tab 기능 분리
*/
import React from 'react'

import deskImg from '../images/desk_color.png';
import deviceImg from '../images/device_color.png';
import microImg from '../images/microscope_color.png';
import bloodtubeImg from '../images/bloodtube_color.png';
import RentalListContainer from "./rental/RentalListContainer";
import PrintMainData from "./PrintMainData";


class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            isOpen: false,
            tabNum: [0, 1, 2, 3],
            tabTitle: {
                0: '사무용품',
                1: '전자기기',
                2: '실험실비품',
                3: '샘플관리'
            },
            tabImg: {
                0: deskImg,
                1: deviceImg,
                2: microImg,
                3: bloodtubeImg,
            },
            url:{
                0:'http://localhost:3103/api/getOfficeEntry.php',
                1:'http://localhost:3103/api/getDiskEntry.php',
                2:'http://localhost:3103/api/getLabEntry.php',
                3:'http://localhost:3103/api/getSampleEntry.php',
            },
            currentID: 0,
            currentTit: '사무용품',
            currentURL: '',
        };
    }

    /**
     * 메인화면 탭 기능
     * @param idx 비품현황 탭의 index, id와 일치함
     * @param txt 비품현황 탭의 text
     */
    onClickTab(idx,txt) {
        this.setState({
            currentID: idx,
            currentTit: txt,
            currentURL: this.state.url[idx],
        });

    }

    render() {
        return (
            <div className="main-wrap">
                <section className="main-current">
                    <span>비품현황</span>
                    <ul className="cont-ul">
                        {this.state.tabNum.map(idx=>(
                            <li key={idx} onClick={() => this.onClickTab(idx,this.state.tabTitle[idx])}><img src={this.state.tabImg[idx]}/><p>{this.state.tabTitle[idx]}</p></li>
                        ))}
                    </ul>
                    <div className="main current-cont">
                        <div className="current-inner">
                            <div className="tit-txt">
                                <p>{this.state.currentTit}</p>
                            </div>
                            <PrintMainData url ={this.state.currentURL}/>
                        </div>
                    </div>
                </section>
                <section className="main-rental">
                    <RentalListContainer/>
                </section>
                <section>
                </section>
            </div>
        );
    }
}

export default Main;