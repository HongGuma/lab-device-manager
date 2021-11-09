import React, {useEffect, useState} from "react";
import axios from "axios";
import {} from "./TabContainer";
import down_arrow from "../../../../images/down_arrow_white.png";
import up_arrow from "../../../../images/up_arrow.png";


/**
 * 동의서, 참여자 정보 탭 클릭시 출력되는 리스트
 * @param URL
 * @param currentPosts :동의서, 참여자 정보 리스트
 * @param currentEntry
 * @param onCheckSingle :(함수)체크박스 개별 클릭시
 * @param onCheckAll :(함수) '전체' 체크박스 클릭시
 * @param checkedAll :전체 클릭 여부
 * @param checkedItems :체크박스 체크된 아이템 담는 Set
 * @param isInsertToggle :+추가 버튼 클릭 여부
 * @param onClickConsentInsertDone :'저장'버튼 클릭시 작동하는 함수. InsertConsent에 전달
 * @param isDeleteToggle
 * @param onClickSort
 * @param refrashToggle
 * @returns {JSX.Element}
 * @constructor
 */
const TabContents = ({
                             URL,
                             currentPosts, currentEntry,
                             onCheckSingle, onCheckAll,
                             checkedAll, checkedItems,
                             isInsertToggle, onClickConsentInsertDone,
                             isDeleteToggle,
                             onClickSort, refrashToggle,
                         }) => {
    const [clickedHead,setClickedHead] = useState(null);
    const [clickedItem,setClickedItem] = useState(null);
    const [dubleClickedItem,setDubleClickedItem] = useState(null);
    const [dubleClickedID,setDubleClickedID] = useState(null);
    const [updateItem,setUpdateItem] = useState(null);
    const [bChecked,setChecked] = useState(false);
    const [count,setCount] = useState(0);

    const allCheckHandler = () => setChecked(!checkedAll);
    const singleCheckHandler = (e,uniqueNum) => {
        setChecked(!bChecked);
        onCheckSingle(e,uniqueNum);
    }
    useEffect(()=>allCheckHandler,[checkedAll]);
    useEffect(()=>{
        if(refrashToggle){
            setCount(0);
            setClickedHead(null);
        }
    },[refrashToggle]);


    function onClickItem(id){ setClickedItem(id);}

    function onClickHead(id,name){
        setCount(count+1);
        if(count === 0){
            setClickedHead(id);
            onClickSort(name,'desc');
        }else if(count === 1){
            setClickedHead(id);
            onClickSort(name,'asc');
        }else{
            setCount(0);
            setClickedHead(null);
            onClickSort('none','none');
        }
    }

    /**
     * 딱 원하는 칸만 input textbox로 바뀌도록 하기 위한 함수
     * @param id
     * @param key
     * @param item
     */
    function onDubleClickToggle(id,key,item){
        setDubleClickedItem(key);
        setDubleClickedID(id);
        setUpdateItem(item);
    }
    function onDubleClickHandler(e){
        setUpdateItem(e.target.value);
    }
    function onKeyPress(e){
        if(e.key === 'Enter'){
            if(window.confirm('수정 하시겠습니까?')){
                axios.post(URL,{parm:'consentUpdate',col_nm:dubleClickedItem,update_data:updateItem,id:dubleClickedID}).then((res)=>{});
            }
            setDubleClickedItem(null);
            setDubleClickedID(null);
        }
    }

    const ContentsComponent = ({id,column,item}) => {
        return (
            dubleClickedID === id && dubleClickedItem === column ?
                <li><input type="textbox" value={updateItem}
                           onChange={(e)=>onDubleClickHandler(e)}
                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                <li onDoubleClick={()=>onDubleClickToggle(id,column,item)}>{item}</li>
        )
    }
    return(
        <section className="consent-section">
            <div className="cont-head">
                <ul className="head-ul">
                    <li className={isDeleteToggle ? '':'none'}>
                        <label>
                            <p>전체</p>
                            <label htmlFor="total">
                                <input type="checkbox"
                                       onChange={(e)=>onCheckAll(currentPosts,e.target.checked)}/>
                            </label>
                        </label>
                    </li>
                    {currentEntry.map((entry) => (
                        <li className={clickedHead===entry.id?'active':''}
                            key={entry.id}
                            onClick={()=>onClickHead(entry.id,entry.name)}>
                            <p>{entry.name}</p>
                            {count === 1 && <img src={down_arrow} alt="down arrow"/> }
                            {count === 2 && <img src={up_arrow} alt="up arrow"/> }
                        </li>
                    ))}
                </ul>
            </div>
            <div className="cont-body">
                {
                    currentPosts.map((item)=>(
                        <ul className={clickedItem === item.id ? "active body-ul":"body-ul"}
                            key={item.id}
                            onClick={()=>onClickItem(item.id)} >
                            <li className={isDeleteToggle ? '':'none'}>
                                <input type="checkbox"
                                       onChange={(e)=>singleCheckHandler(e.target.checked,item.r_1)}
                                       checked={checkedItems.has(item.r_1)}/></li>

                            {dubleClickedID === item.id && dubleClickedItem === 'r_1' ?
                                <li><input type="textbox" value={updateItem}
                                           onChange={(e)=>onDubleClickHandler(e)}
                                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                                <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_1',item.r_1)}>{item.r_1}</li>}

                            {dubleClickedID === item.id && dubleClickedItem === 'r_2' ?
                                <li><input type="textbox" value={updateItem}
                                           onChange={(e)=>onDubleClickHandler(e)}
                                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                                <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_2', item.r_2)}>{item.r_2}</li>}

                            {dubleClickedID === item.id && dubleClickedItem === 'r_3' ?
                                <li><input type="textbox" value={updateItem}
                                           onChange={(e)=>onDubleClickHandler(e)}
                                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                                <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_3', item.r_3)}>{item.r_3}</li>}

                            {dubleClickedID === item.id && dubleClickedItem === 'r_4' ?
                                <li><input type="textbox" value={updateItem}
                                           onChange={(e)=>onDubleClickHandler(e)}
                                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                                <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_4', item.r_4)}>{item.r_4}</li>}

                            {dubleClickedID === item.id && dubleClickedItem === 'r_5' ?
                                <li><input type="textbox" value={updateItem}
                                           onChange={(e)=>onDubleClickHandler(e)}
                                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                                <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_5', item.r_5)}>{item.r_5}</li>}

                            {dubleClickedID === item.id && dubleClickedItem === 'r_6' ?
                                <li><input type="textbox" value={updateItem}
                                           onChange={(e)=>onDubleClickHandler(e)}
                                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                                <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_6', item.r_6)}>{item.r_6}</li>}

                            {dubleClickedID === item.id && dubleClickedItem === 'r_7' ?
                                <li><input type="textbox" value={updateItem}
                                           onChange={(e)=>onDubleClickHandler(e)}
                                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                                <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_7', item.r_7)}>{item.r_7}</li>}

                            {dubleClickedID === item.id && dubleClickedItem === 'r_8' ?
                                <li><input type="textbox" value={updateItem}
                                           onChange={(e)=>onDubleClickHandler(e)}
                                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                                <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_8', item.r_8)}>{item.r_8}</li>}

                            {dubleClickedID === item.id && dubleClickedItem === 'r_9' ?
                                <li><input type="textbox" value={updateItem}
                                           onChange={(e)=>onDubleClickHandler(e)}
                                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                                <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_9', item.r_9)}>{item.r_9}</li>}

                            {dubleClickedID === item.id && dubleClickedItem === 'r_10' ?
                                <li><input type="textbox" value={updateItem}
                                           onChange={(e)=>onDubleClickHandler(e)}
                                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                                <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_10', item.r_10)}>{item.r_10}</li>}

                            {dubleClickedID === item.id && dubleClickedItem === 'r_11' ?
                                <li><input type="textbox" value={updateItem}
                                           onChange={(e)=>onDubleClickHandler(e)}
                                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                                <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_11',item.r_11)}>{item.r_11}</li>}

                            {dubleClickedID === item.id && dubleClickedItem === 'r_12' ?
                                <li><input type="textbox" value={updateItem}
                                           onChange={(e)=>onDubleClickHandler(e)}
                                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                                <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_12',item.r_12)}>{item.r_12}</li>}

                            {dubleClickedID === item.id && dubleClickedItem === 'r_13' ?
                                <li><input type="textbox" value={updateItem}
                                           onChange={(e)=>onDubleClickHandler(e)}
                                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                                <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_13',item.r_13)}>{item.r_13}</li>}

                            {dubleClickedID === item.id && dubleClickedItem === 'r_14' ?
                                <li><input type="textbox" value={updateItem}
                                           onChange={(e)=>onDubleClickHandler(e)}
                                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                                <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_14',item.r_14)}>{item.r_14}</li>}

                            {dubleClickedID === item.id && dubleClickedItem === 'r_15' ?
                                <li><input type="textbox" value={updateItem}
                                           onChange={(e)=>onDubleClickHandler(e)}
                                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                                <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_15',item.r_15)}>{item.r_15}</li>}

                            {dubleClickedID === item.id && dubleClickedItem === 'r_16' ?
                                <li><input type="textbox" value={updateItem}
                                           onChange={(e)=>onDubleClickHandler(e)}
                                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                                <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_16',item.r_16)}>{item.r_16}</li>}

                            {dubleClickedID === item.id && dubleClickedItem === 'r_17' ?
                                <li><input type="textbox" value={updateItem}
                                           onChange={(e)=>onDubleClickHandler(e)}
                                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                                <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_17',item.r_17)}>{item.r_17}</li>}

                            {dubleClickedID === item.id && dubleClickedItem === 'r_18' ?
                                <li><input type="textbox" value={updateItem}
                                           onChange={(e)=>onDubleClickHandler(e)}
                                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                                <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_18',item.r_18)}>{item.r_18}</li>}

                            {dubleClickedID === item.id && dubleClickedItem === 'r_19' ?
                                <li><input type="textbox" value={updateItem}
                                           onChange={(e)=>onDubleClickHandler(e)}
                                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                                <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_19',item.r_19)}>{item.r_19}</li>}

                            {dubleClickedID === item.id && dubleClickedItem === 'r_20' ?
                                <li><input type="textbox" value={updateItem}
                                           onChange={(e)=>onDubleClickHandler(e)}
                                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                                <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_20', item.r_20)}>{item.r_20}</li>}

                            {dubleClickedID === item.id && dubleClickedItem === 'r_21' ?
                                <li><input type="textbox" value={updateItem}
                                           onChange={(e)=>onDubleClickHandler(e)}
                                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                                <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_21', item.r_21)}>{item.r_21}</li>}

                            {dubleClickedID === item.id && dubleClickedItem === 'r_22' ?
                                <li><input type="textbox" value={updateItem}
                                           onChange={(e)=>onDubleClickHandler(e)}
                                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                                <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_22', item.r_22)}>{item.r_22}</li>}

                            {dubleClickedID === item.id && dubleClickedItem === 'r_23' ?
                                <li><input type="textbox" value={updateItem}
                                           onChange={(e)=>onDubleClickHandler(e)}
                                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                                <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_23', item.r_23)}>{item.r_23}</li>}

                            {dubleClickedID === item.id && dubleClickedItem === 'r_24' ?
                                <li><input type="textbox" value={updateItem}
                                           onChange={(e)=>onDubleClickHandler(e)}
                                           onKeyPress={(e)=>onKeyPress(e)}/></li> :
                                <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_24', item.r_24)}>{item.r_24}</li>}

                        </ul>
                    ))
                }
            </div>
        </section>
    )
}


export default TabContents;