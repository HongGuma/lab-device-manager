/**
 *@title
 *@date 21-08-04
 *@author
 *@desc
 *@etc(change)
 */

import React from 'react';
import axios from "axios";
import ServerContent from "./ServerContent";


class ServerMain extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            diskList:[],
            diskEntry:[],
            entryId:1,
            entryName:'디스크',
            entryItem:[],
        }
    }

    UNSAFE_componentWillMount() {
        axios.get("http://210.218.217.110:3103/api/getDiskData.php?parm=entry")
            .then(r => {
                this.setState({diskEntry: r.data});
            })
        // axios.get('http://210.218.217.110:3103/api/getDiskData.php?parm=count&entry_id='+this.state.entryId)
        //     .then(res => {
        //         console.log(res.data);
        //     })
    }

    onClickEntry(selectItem){
        this.setState({
            entryId:selectItem.id,
            entryName:selectItem.name,
        })
    }

    render() {
        return (
            <div className="server-wrap">
                <div className="server-tit">
                    <p>서버 비품 관리</p>
                </div>
                <div className="server-width">
                    <section className="sidebar">
                        <div className="inner">
                            <ul className="server-ul">
                                {this.state.diskEntry.map((item)=>(
                                    <li onClick={()=>this.onClickEntry(item)} key={item.id}><p>{item.name}</p></li>
                                ))}
                            </ul>
                        </div>
                        <div className="add-btn">
                            <p>+항목추가</p>
                            <p>-항목삭제</p>
                        </div>
                    </section>
                    <ServerContent entryId={this.state.entryId} entryName={this.state.entryName}/>
                </div>
            </div>
        );
    }
}

export default ServerMain;