/**
*@title 연구실 메인 화면
*@date 21-08-18
*@author 홍수희
*@desc 연구실 관련 컴포넌트 모아서 출력하는 화면
*@etc(change)
*/

import React from 'react';
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
            entryName:'',
            entryID:0,
        }
    }

    UNSAFE_componentWillMount() {
        axios.get("http://210.218.217.110:3103/api/getOfficeData.php?parm=entry")
            .then(r => {
                this.setState({
                    officeList: r.data,
                    entryName:r.data[0].name,
                    entryID:r.data[0].id,
                });
            })
    }

    onClickEntry(item){
        this.setState({
            entryName: item.name,
            entryID: item.id,
        })
    }

    addEntry(){
        console.log("항목추가!");
    }
    removeEntry(){
        console.log("항목삭제!");
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
                            <ul className="office-ul">
                                {this.state.officeList.map((item)=>(
                                    <li onClick={()=>this.onClickEntry(item)} key={item.id}><p>{item.name}</p></li>
                                ))}
                            </ul>
                        </div>
                        <div className="add-btn">
                            <p onClick={this.addEntry}>+항목추가</p>
                            <p onClick={this.removeEntry}>-항목삭제</p>
                        </div>
                    </section>
                    <OfficeContent entryID={this.state.entryID} entryName={this.state.entryName}/>
                </div>
            </div>
        );
    }
}

export default OfficeMain;