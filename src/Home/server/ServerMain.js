/**
 *@title
 *@date 21-08-04
 *@author
 *@desc
 *@etc(change)
 */

import React from 'react';
import ServerContent from "./ServerContent";
import SideBar from "../container/SideBar";


class ServerMain extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            diskList:[],
            diskEntry:[],
            entryId:null,
            entryName:'',
            url: 'http://210.218.217.110:3103/api/getServerData.php?',
            tableName:'server',
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
            <div className="server-wrap">
                <div className="server-tit">
                    <p>서버 비품 관리</p>
                </div>
                <div className="server-width">
                    <SideBar currentURL = {this.state.url} clickEvent={this.onClickEntry} tableName={this.state.tableName}/>
                    <ServerContent entryId={this.state.entryId} entryName={this.state.entryName}/>
                </div>
            </div>
        );
    }
}

export default ServerMain;