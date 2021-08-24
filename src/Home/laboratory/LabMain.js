

import React from 'react';
import LabContent from "./LabContent";
import axios from "axios";

class LabMain extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            labEntryId:1,
            labEntryName:'냉장고',
            labEntry:[],
        }
    }

    UNSAFE_componentWillMount() {
        axios.get("http://210.218.217.110:3103/api/getLabData.php?parm=entry")
            .then(r => {
                this.setState({labEntry: r.data});
            })
        // axios.get('http://210.218.217.110:3103/api/getDiskData.php?parm=count&entry_id='+this.state.entryId)
        //     .then(res => {
        //         console.log(res.data);
        //     })
    }

    onClickEntry(selectItem){
        this.setState({
            labEntryId:selectItem.id,
            labEntryName:selectItem.name,
        })
    }
    render() {
        return (
            <div className="lab-wrap">
                <div className="lab-tit">
                    <p>실험실 비품 관리</p>
                </div>
                <div className="lab-width">
                    <section className="sidebar">
                        <div className="inner">
                            <ul className="lab-ul">
                                {this.state.labEntry.map((item)=>(
                                    <li onClick={()=>this.onClickEntry(item)} key={item.id}><p>{item.name}</p></li>
                                ))}
                            </ul>
                        </div>
                        <div className="add-btn">
                            <p>+항목추가</p>
                            <p>-항목삭제</p>
                        </div>
                    </section>
                    <LabContent entryID={this.state.labEntryId} entryName={this.state.labEntryName}/>
                </div>
            </div>
        );
    }
}

export default LabMain;