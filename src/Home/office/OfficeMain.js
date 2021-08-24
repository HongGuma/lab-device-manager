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
const ShowTextbox = () => {
    return <li><input className="add-box" type="textbox"/></li>
}

const DefaultEntry = ({list,event}) => {
    return(
        <ul className="office-ul">
            {list.map((item)=>(
                <li onClick={()=>event(item)} key={item.id}><p>{item.name}</p></li>
            ))}
        </ul>
    )
}

const CheckboxEntry = ({list,event}) => {
    return(
        <ul className="office-ul">
            {list.map((item)=>(
                <li onClick={()=>event(item)} key={item.id}>
                    <input type="checkbox"/>
                    <p>{item.name}</p>
                </li>
            ))}
        </ul>
    )
}

class OfficeMain extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            officeEntry:[],
            officeList:[],
            entryName:'',
            entryID:0,
            showTextbox:false,
            showCheckbox:false,
            showDefault:true,
        }
        this.onClickEntry = this.onClickEntry.bind(this);
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
    onClickEntry(item) {
        this.setState({
            entryName: item.name,
            entryID: item.id,
        })
    }
    onClickAdd(){
        console.log("항목추가!");
        this.setState({
            showCheckbox: !this.state.showCheckbox,
            showDefault: !this.state.showDefault
        })
    }
    onClickRemove(){
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
                            {this.state.showDefault&&<DefaultEntry list={this.state.officeList} event = {this.onClickEntry}/>}
                            {this.state.showCheckbox&&<CheckboxEntry list={this.state.officeList} event = {this.onClickEntry}/>}
                            <ul className="office-ul">
                                {this.state.showTextbox && <ShowTextbox/>}
                            </ul>
                        </div>
                        <div className="add-btn">
                            <p onClick={()=>this.onClickAdd()}>+항목추가</p>
                            <p onClick={this.onClickRemove}>-항목삭제</p>
                        </div>
                    </section>
                    <OfficeContent entryID={this.state.entryID} entryName={this.state.entryName}/>
                </div>
            </div>
        );
    }
}

export default OfficeMain;

