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

class RentalMain extends React.Component{
    render() {
        return (
            <div className="rental-wrap">
                <div className="rental-tit">
                    <p>비품 대여 관리</p>
                </div>
                <div className="rental-width">
                    <SideBarContainer/>
                    <ContentContainer/>
                </div>
            </div>
        );
    }

}

export default RentalMain;