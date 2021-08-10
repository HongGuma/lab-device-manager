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
import RentalListContainer from "./rental/RentalListContainer";

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            list:[],
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
            currentID: 0,
            currentTit: '사무용품',
        };
    }

    /**
     * 메인화면 탭 기능
     * @param id 비품현황 탭의 id
     * @param txt 비품현황 탭의 text
     */
    onClickTab(id,txt) {
        this.setState({
            currentID: id,
            currentTit: txt,
        });
    }

    UNSAFE_componentWillMount() {
        fetch('/api/item')
            .then((res)=> res.json())
            .then((list)=>{
                this.setState({list})
            })
    }

    render() {
        return (
            <div className="main-wrap">
                <section className="main-current">
                    <span>비품현황</span>
                    <ul className="cont-ul">
                        {this.state.tabNum.map(idx=>(
                            <li onClick={() => this.onClickTab(idx,this.state.tabTitle[idx])}><img src={this.state.tabImg[idx]}/><p>{this.state.tabTitle[idx]}</p></li>
                        ))}
                    </ul>
                    <div className="main current-cont">
                        <div className="current-inner">
                            <div className="tit-txt">
                                <p>{this.state.currentTit}</p>
                            </div>
                            <div className="item">
                                <ul>
                                    <li><p>항목항목항목항목항목항목항목</p><p>n개</p></li>
                                    <li><p>항목항목항목항목항목항목항목항목항목항목항목</p><p>n개</p></li>
                                    <li><p>항목</p><p>n개</p></li>
                                    <li><p>항목</p><p>n개</p></li>
                                    <li><p>항목</p><p>n개</p></li>
                                    <li><p>항목</p><p>n개</p></li>
                                    {this.state.list.map(item=>(
                                        <li key={item.id}>
                                            <p>{item.name}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
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