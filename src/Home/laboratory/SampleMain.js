/**
*@title 샘플 관리 페이지
*@date 2021-09-27
*@author 홍수희
*@desc 샘플관리 메인 페이지
*@etc(change) 임상팀 요청으로 생성함
*/

import React from 'react';
import SideBar from "../container/SideBar";
import LabContent from "./LabContent";
import RentalContent from "../rental/RentalContent";
import SampleContent from "./SampleContent";

class SampleMain extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            entryId:0,
            entryName:'',
            labEntry:[],
            url:'http://210.218.217.110:3103/api/getLabData.php?',
            tableName:'lab',
        }
        this.onClickEntry = this.onClickEntry.bind(this);
    }
    onClickEntry(name){
        this.setState({
            entryName:name,
        })
    }
    render() {
        return (
            <div className="sample page-wrap">
                <div className="sample page-tit">
                    <p>샘플 관리</p>
                </div>
                <div className="sample page-width">
                    <section className="sidebar">
                        <div className="inner">
                            <ul className="sidebar-ul">
                                <li onClick={()=>this.onClickEntry('프로젝트1')}>
                                    <p>프로젝트1</p>
                                    <ul className="sample hide-ul">
                                        <li>하위 항목1</li>
                                        <li>하위 항목2</li>
                                        <li>하위 항목3</li>
                                        <li>하위 항목4</li>
                                    </ul>
                                </li>
                                <li onClick={()=>this.onClickEntry('감염병DB')}><p>감염병DB</p></li>
                                <li onClick={()=>this.onClickEntry('프로젝트3')}><p>프로젝트3</p></li>
                                <li onClick={()=>this.onClickEntry('프로젝트4')}><p>프로젝트4</p></li>
                            </ul>
                        </div>
                    </section>
                    <SampleContent entryName={this.state.entryName}/>
                </div>
            </div>
        );
    }
}

export default SampleMain;