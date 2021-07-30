import React from 'react';
import './main.css';

class Main extends React.Component{
    render() {
        return (
            <div className={"wrap"}>
                <div className="title">비품 현황</div>
                <div className="content">
                    <div id={"item"}>
                        <div>모니터</div>
                        <div>n대</div>
                    </div>
                    <div id={"item"}>
                        <div>의자</div>
                        <div>n개</div>
                    </div>
                    <div id={"item"}>
                        <div>책상</div>
                        <div>n개</div>
                    </div>
                    <div id={"item"}>
                        <div>마우스</div>
                        <div>n개</div>
                    </div>
                    <div id={"item"}>
                        <div>키보드</div>
                        <div>n개</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;