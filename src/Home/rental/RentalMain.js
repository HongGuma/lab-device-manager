/**
*@title
*@date 21-08-04
*@author
*@desc
*@etc(change)
*/

import React from 'react';
import SideBarContainer from "../container/SideBarContainer";
import ContentContainer from "../container/ContentContainer";
import axios from "axios";
import LabContent from "../laboratory/LabContent";
import RentalContent from "./RentalContent";

class RentalMain extends React.Component{
    constructor(props) {
        super(props);
        // this.state={
        //     labEntryId:1,
        //     labEntryName:'냉장고',
        //     labEntry:[],
        // }
    }

    // UNSAFE_componentWillMount() {
    //     axios.get("http://210.218.217.110:3103/api/getLabData.php?parm=entry")
    //         .then(r => {
    //             this.setState({labEntry: r.data});
    //         })
    // }

    // onClickEntry(selectItem){
    //     this.setState({
    //         labEntryId:selectItem.id,
    //         labEntryName:selectItem.name,
    //     })
    // }
    render() {
        return (
            <div className="rental-wrap">
                <div className="rental-tit">
                    <p>비품 대여 관리</p>
                </div>
                <div className="rental-width">
                    <section className="sidebar">
                        <div className="inner">
                            <ul className="rental-ul">
                                {/*{this.state.labEntry.map((item)=>(*/}
                                {/*    <li onClick={()=>this.onClickEntry(item)} key={item.id}><p>{item.name}</p></li>*/}
                                {/*))}*/}
                                <li><p>대여신청</p></li>
                                <li><p>비품반납</p></li>
                            </ul>
                        </div>
                        <div className="add-btn">
                            <p>+항목추가</p>
                            <p>-항목삭제</p>
                        </div>
                    </section>
                    <RentalContent />
                </div>
            </div>
        );
    }

}

export default RentalMain;