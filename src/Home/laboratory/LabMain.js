

import React from 'react';
import LabContent from "./LabContent";
import axios from "axios";
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

    // UNSAFE_componentWillMount() {
    //     axios.get("http://210.218.217.110:3103/api/getLabData.php?parm=entry")
    //         .then(r => {
    //             this.setState({labEntry: r.data});
    //         })
    //     // axios.get('http://210.218.217.110:3103/api/getDiskData.php?parm=count&entry_id='+this.state.entryId)
    //     //     .then(res => {
    //     //         console.log(res.data);
    //     //     })
    // }

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
                    {/*<section className="sidebar">*/}
                    {/*    <div className="inner">*/}
                    {/*        <ul className="lab-ul">*/}
                    {/*            {this.state.labEntry.map((item)=>(*/}
                    {/*                <li onClick={()=>this.onClickEntry(item)} key={item.id}><p>{item.name}</p></li>*/}
                    {/*            ))}*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*    <div className="add-btn">*/}
                    {/*        <p>+항목추가</p>*/}
                    {/*        <p>-항목삭제</p>*/}
                    {/*    </div>*/}
                    {/*</section>*/}
                    <LabContent entryID={this.state.entryId} entryName={this.state.entryName}/>
                </div>
            </div>
        );
    }
}

export default LabMain;