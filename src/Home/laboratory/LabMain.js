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

class LabMain extends React.Component{
    render() {
        return (
            <div className="Lab-wrap">
                <div className="Lab-tit">
                    <p>실험실 비품 관리</p>
                </div>
                <div className="Lab-width">
                    <SideBarContainer/>
                    <ContentContainer/>
                </div>
            </div>
        );
    }
}

export default LabMain;