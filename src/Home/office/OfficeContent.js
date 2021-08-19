/**
*@title 연구실 페이지 본문 출력 
*@date 21-08-18
*@author 홍수희
*@desc 
*@etc(change)
*/

import React from 'react';
import axios from "axios";


class OfficeContent extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            tit: ['전체','번호','품명','사용자','상태','위치','품질','관리자','마지막 수정시간'],
            option : [
                {value:0, label:'사용안함'},
                {value:1, label:'사용중'}
            ],
        }
    }

    render() {
        return (
            <section className="content">
                <div className="content-tit">
                    <changeTitle/>
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
                        {this.state.tit.map((name,idx) => (
                            <li key ={idx}>
                                <p>{name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        );
    }    
}

export default OfficeContent;