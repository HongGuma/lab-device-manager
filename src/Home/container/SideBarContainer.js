/**
*@title
*@date 21-08-05
*@author
*@desc
*@etc(change)
*/

import React from 'react';

class SideBarContainer extends React.Component{
    render() {
        return (
            <section className="sidebar">
                <div className="inner">
                    <ul>
                        <li><p>책상</p></li>
                        <li><p>의자</p></li>
                        <li><p>파티션</p></li>
                        <li><p>멀티탭</p></li>
                        <li><p>모니터</p></li>
                    </ul>
                </div>
                <div className="add-btn">
                    <p>+항목추가</p>
                </div>
            </section>
        );
    }
}

export default SideBarContainer;