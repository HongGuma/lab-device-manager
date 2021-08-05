/**
*@title 연구실 비품 목록 화면
*@date 21-08-04
*@author 홍수희
*@desc DB에서 가져온 데이터 뿌리는 화면
*@etc(change)
*/

import React from 'react';

class OfficeContent extends React.Component{
    render() {
        return(
            <div>
                <div className="">
                    <ul>항목1
                        <li>세부목록1</li>
                        <li>세부목록2</li>
                        <li>세부목록3</li>
                    </ul>
                    <ul>항목2
                        <li>세부목록1</li>
                    </ul>
                    <ul>항목1
                        <li>세부목록1</li>
                        <li>세부목록2</li>
                        <li>세부목록3</li>
                        <li>세부목록4</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default OfficeContent;