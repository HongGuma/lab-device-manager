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

class ServerMain extends React.Component{
    render() {
        return (
            <div className="server-wrap">
                <div className="server-tit">
                    <p>서버 비품 관리</p>
                </div>
                <div className="server-width">
                    <SideBarContainer/>
                    <ContentContainer/>
                </div>
            </div>
        );
    }
}

export default ServerMain;