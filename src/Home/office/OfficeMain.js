/**
*@title 연구실 메인 화면
*@date 21-08-18
*@author 홍수희
*@desc 연구실 관련 컴포넌트 모아서 출력하는 화면
*@etc(change)
*/

import React, {useEffect, useState} from 'react';
import axios from "axios";
import OfficeContent from "./OfficeContent";

function onClickInsert(){
    return alert("추가")
}
function onClickEdit(){
    return alert("수정")
}
function onClickRemove(){
    return alert("삭제")
}

class OfficeMain extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            officeEntry:[],
            officeList:[],
            contTit:'',
        }
    }

    UNSAFE_componentWillMount() {
        axios.get("http://210.218.217.110:3103/api/getOfficeData.php?parm=entry")
            .then(r => {
                this.setState({officeList: r.data});
            })
    }

    onClickEntry(item){
        this.setState({contTit: item})
    }

    render() {
        return (
            <div className="office-wrap">
                <div className="office-tit">
                    <p>연구실 비품 관리</p>
                </div>
                <div className="office-width">
                    <section className="sidebar">
                        <div className="inner">
                            <ul>
                                {this.state.officeList.map((item)=>(
                                    <li onClick={()=>this.onClickEntry(item.name)} key={item.id}><p>{item.name}</p></li>
                                ))}
                            </ul>
                        </div>
                        <div className="add-btn">
                            <p>+항목추가</p>
                        </div>
                    </section>
                    <section className="content">
                        <div className="content-tit">
                            <div className="tit-txt">
                                <p>{this.state.contTit}</p>
                            </div>
                            <div className="cont-cnt">
                                <p>총</p>
                                <p>n</p>
                                <p>개</p>
                            </div>
                            <div className="add-btn">
                                <p >+추가</p>
                                <p >+수정</p>
                                <p >-삭제</p>
                            </div>
                        </div>
                        <div className="content-cont">
                            <ul className="tit-ul">
                                {/*{this.state.tit.map((name,idx) => (*/}
                                {/*    <li key ={idx}>*/}
                                {/*        <p>{name}</p>*/}
                                {/*    </li>*/}
                                {/*))}*/}
                            </ul>
                        </div>
                    </section>

                </div>
            </div>
        );
    }
}

export default OfficeMain;