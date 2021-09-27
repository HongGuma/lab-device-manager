/**
 *@title
 *@date 21-08-04
 *@author
 *@desc
 *@etc(change)
 */

import React from 'react';
import SideBar from "../container/SideBar";
import LabContent from "./LabContent";
import RentalContent from "../rental/RentalContent";

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
                    <p>샘플 관리</p>
                </div>
                <div className="rental-width">
                    <section className="sidebar">
                        <div className="inner">
                            <ul className="rental-ul">
                                <li><p>프로젝트1</p></li>
                                <li><p>프로젝트2</p></li>
                                <li><p>프로젝트3</p></li>
                                <li><p>프로젝트4</p></li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default SampleMain;