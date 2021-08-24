/**
*@title 실험실 페이지
*@date 2021-08-24
*@author 홍수희
*@desc 실험실 페이지 main
*@etc(change)
*/
import React from 'react';
import LabContent from "./LabContent";
import SideBar from "../container/SideBar";

class LabMain extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            entryId:1,
            entryName:'냉장고',
            labEntry:[],
            url:'http://210.218.217.110:3103/api/getLabData.php?parm=entry',
        }
        this.onClickEntry = this.onClickEntry.bind(this);
    }

    onClickEntry(selectItem){
        this.setState({
            entryId:selectItem.id,
            entryName:selectItem.name,
        })
    }
    render() {
        return (
            <div className="lab-wrap">
                <div className="lab-tit">
                    <p>실험실 비품 관리</p>
                </div>
                <div className="lab-width">
                    <SideBar currentURL={this.state.url} clickEvent={this.onClickEntry}/>
                    <LabContent entryID={this.state.entryId} entryName={this.state.entryName}/>
                </div>
            </div>
        );
    }
}

export default LabMain;