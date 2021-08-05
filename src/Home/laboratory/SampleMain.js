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

class SampleMain extends React.Component{
    render() {
        return (
            <div className="office-wrap">
                <div className="office-width">
                    <SideBarContainer/>
                    <ContentContainer/>
                </div>
            </div>
        );
    }
}

export default SampleMain;