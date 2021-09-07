/**
*@title
*@date 21-08-04
*@author
*@desc
*@etc(change)
*/

import React from 'react';
import axios from "axios";
import RentalContent from "./RentalContent";

const Popup = () => {
    const tit = ['품명','대여자 이름','소속','위치','비밀번호'];
    return(
        <div className='popup-wrap'>
            <div className="popup">
                <div>
                    <a>닫기</a>
                </div>
                <div className="table-head">
                    {tit.map((item)=>
                        <p>{item}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

class RentalMain extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            open:false,
        }
        this.popupEvent = this.popupEvent.bind(this);
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

    popupEvent(){
        this.setState({
            open:!this.state.open
        })
    }

    render() {
        return (
            <div className="rental-wrap">
                <div className="rental-tit">
                    <p>비품 대여 관리</p>
                </div>
                {this.state.open &&<Popup/>}
                <div className="rental-width">
                    <section className="sidebar">
                        <div className="inner">
                            <ul className="rental-ul">
                                {/*{this.state.labEntry.map((item)=>(*/}
                                {/*    <li onClick={()=>this.onClickEntry(item)} key={item.id}><p>{item.name}</p></li>*/}
                                {/*))}*/}
                                <li onClick={this.popupEvent}><p>대여신청</p></li>
                                <li><p>비품반납</p></li>
                            </ul>
                        </div>
                    </section>
                    <RentalContent />
                </div>
            </div>
        );
    }

}

export default RentalMain;