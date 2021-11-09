import React from "react";

/**
 *
 * @param clickEvent :추가하기 버튼 클릭 이벤트
 * @param changeHandler :input 데이터 핸들러
 * @returns {JSX.Element}
 * @constructor +추가 버튼 클릭시 나오는 form
 */
const InsertItem = ({clickEvent, changeHandler}) => {
    return(
        <form onSubmit={clickEvent}>
            <ul className="body-ul">
                <li> </li>
                <li><input name="asset_num" type="textbox" onChange={changeHandler}/></li>
                <li><input name="name" type="textbox" onChange={changeHandler}/></li>
                <li>
                    <select name="state" onChange={changeHandler}>
                        <option value="사용중">사용중</option>
                        <option value="사용안함">사용안함</option>
                    </select>
                </li>
                <li><input name="position" type="textbox" onChange={changeHandler}/></li>
                <li><input name="issue_date" type="textbox" onChange={changeHandler} placeholder="yyyy-mm-dd"/></li>
                <li>{sessionStorage.getItem('name')}</li>
                <li>.</li>
            </ul>
            <ul>
                <li onClick={clickEvent}>
                    <p>추가 하기</p>
                </li>
            </ul>
        </form>
    )
}

export default InsertItem;