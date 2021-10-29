import React, {useEffect, useState} from "react";

/**
 *
 * @param itemList :비품 리스트
 * @param titleList :table head에 해당하는 부분
 * @param onCheckSingle :체크박스 하나만 선택시
 * @param onCheckAll :'전체' 체크박스 클릭시
 * @param checkedList :체크박스에 체크된 아이템들의 아이디 set
 * @param allChecked :전체선택 여부
 * @returns {JSX.Element}
 * @constructor :비품리스트 기본으로 보여지는 section
 */
const DefaultItem = ({itemList,titleList, onCheckSingle, onCheckAll, checkedList, allChecked}) => {
    const [bChecked,setChecked] = useState(false);
    const allCheckHandler = () => setChecked(!allChecked);
    const singleCheckHandler = (e,item) => {
        setChecked(!bChecked);
        onCheckSingle(e.target.checked,item)
    }
    useEffect(()=>allCheckHandler,[allChecked]);

    return(
        <section>
            <div className="cont-head">
                <ul className="head-ul">
                    <li>
                        <label>
                            <p>전체</p>
                            <label htmlFor="total">
                                <input
                                    type="checkbox"
                                    onChange={(e)=>onCheckAll(e.target.checked)}
                                />
                            </label>
                        </label>
                    </li>
                    {titleList.map((name,idx) => (
                        <li key ={idx}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="cont-body">
                {itemList.map((item) => (
                    <ul className="body-ul" key={item.id}>
                        <li><input type="checkbox"
                                   onChange={(e)=>singleCheckHandler(e,item)}
                                   checked={checkedList.has(item.id)}
                        /></li>
                        <li>{item.asset_num}</li>
                        <li>{item.name}</li>
                        <li>{item.state}</li>
                        <li>{item.position}</li>
                        <li>{item.issue_date}</li>
                        <li>{item.manager}</li>
                        <li>{item.timestamp}</li>
                    </ul>
                ))}
            </div>
        </section>
    )
}

export default DefaultItem;