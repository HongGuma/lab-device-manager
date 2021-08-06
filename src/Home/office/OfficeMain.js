/**
*@title 연구실 메인 화면
*@date 21-08-04
*@author 홍수희
*@desc 연구실 관련 컴포넌트 모아서 출력하는 화면
*@etc(change)
*/

import React from 'react';
import SideBarContainer from "../container/SideBarContainer";
import ContentContainer from "../container/ContentContainer";

class OfficeMain extends React.Component{
    render() {
        return (
            <div className="office-wrap">
                <div className="office-tit">
                    <p>연구실 비품 관리</p>
                </div>
                <div className="office-width">
                    <SideBarContainer/>
                    <ContentContainer/>
                </div>
            </div>
        );
    }
}

export default OfficeMain;