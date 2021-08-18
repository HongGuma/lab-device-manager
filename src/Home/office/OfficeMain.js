/**
*@title 연구실 메인 화면
*@date 21-08-18
*@author 홍수희
*@desc 연구실 관련 컴포넌트 모아서 출력하는 화면
*@etc(change)
*/

import React from 'react';
import SideBarContainer from "../container/SideBarContainer";
import ContentContainer from "../container/ContentContainer";

function onClickInsert(){
    return alert("추가")
}
function onClickEdit(){
    return alert("수정")
}
function onClickRemove(){
    return alert("삭제")
}

class OfficeMain extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            officeEntry:[],
            officeList:[],
        }
    }

    render() {
        return (
            <div className="office-wrap">
                <div className="office-tit">
                    <p>연구실 비품 관리</p>
                </div>
                <div className="office-width">
                    <section className="sidebar">
                        <div className="inner">
                            <SideBarContainer url="http://210.218.217.110:3103/api/getOfficeEntry.php"/>
                        </div>
                        <div className="add-btn">
                            <p>+항목추가</p>
                        </div>
                    </section>
                    <section className="content">
                        <div className="content-tit">
                            <div className="tit-txt">
                                <p>키보드</p>
                            </div>
                            <div className="cont-cnt">
                                <p>총</p>
                                <p>n</p>
                                <p>개</p>
                            </div>
                            <div className="add-btn">
                                <p onClick={onClickInsert}>+추가</p>
                                <p onClick={onClickEdit}>+수정</p>
                                <p onClick={onClickRemove}>-삭제</p>
                            </div>
                        </div>
                        <ContentContainer/>
                    </section>

                </div>
            </div>
        );
    }
}

export default OfficeMain;