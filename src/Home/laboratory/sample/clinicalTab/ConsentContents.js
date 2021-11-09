import React, {useEffect, useState} from "react";
import axios from "axios";
import {} from "./TabContainer";
import down_arrow from "../../../../images/down_arrow_white.png";
import up_arrow from "../../../../images/up_arrow.png";
import {DuplicateCheck} from './TabContainerFunc';


const InsertConsent = ({URL,consentEntry}) => {
    const entrys = Object.values(consentEntry).length;
    const [insertValue,setInsertValue] = useState({
        r_1:'-',r_2:'-',r_3:'-',r_4:'-',r_5:'-',
        r_6:'-',r_7:'-',r_8:'-',r_9:'-',r_10:'-',
        r_11:'-',r_12:'-',r_13:'-',r_14:'-',r_15:'-',
        r_16:'-',r_17:'-',r_18:'-',r_19:'-',r_20:'-',
        r_21:'-',r_22:'-',r_23:'-',r_24:'-'
    })

    function insertHandler(e){
        const {name,value} = e.target;
        setInsertValue({...insertValue, [name]:value});
    }

    async function onClickInsertBtn(){
        if(insertValue.r_1 == null || insertValue.r_1 === '-'){
            alert("고유 번호는 비울 수 없습니다.");
        }else{
            await axios({
                method:'POST',
                url:URL,
                data:{
                    parm:'insert',
                    table:'10kG_consent',
                    entryLen:entrys,
                    arr:insertValue
                },
                header:{'Content-Type': 'aplication/json'}
            }).then((res)=>{
                if(res.data){
                    alert("완료");
                }else{
                    alert("에러 발생. 관리자에게 문의하세요.")
                }
            })
        }

    }

    return(
        <div>
            <ul className="insert-ul">
                {consentEntry.map(item=>(
                    <li><input type="textbox" name={"r_"+item.id}  onChange={(e)=>insertHandler(e)}/></li>
                ))}
            </ul>
            <ul className="insert-btn"><li onClick={onClickInsertBtn}>저장</li></ul>
        </div>
    )
}
/**
 * 동의서, 참여자 정보 탭 클릭시 출력되는 리스트
 * @param URL
 * @param consentPosts :동의서, 참여자 정보 리스트
 * @param onCheckSingle :(함수)체크박스 개별 클릭시
 * @param onCheckAll :(함수) '전체' 체크박스 클릭시
 * @param checkedAll :전체 클릭 여부
 * @param checkedItems :체크박스 체크된 아이템 담는 Set
 * @param isInsertToggle :+추가 버튼 클릭 여부
 * @param onClickConsentInsertDone :'저장'버튼 클릭시 작동하는 함수. InsertConsent에 전달
 * @param isDeleteToggle
 * @param onClickSort
 * @returns {JSX.Element}
 * @constructor
 */
const ConsentContents = ({
                            URL,
                            consentPosts,currentEntry,
                            onCheckSingle, onCheckAll,
                            checkedAll, checkedItems,
                            isInsertToggle, onClickConsentInsertDone,
                            isDeleteToggle,
                            onClickSort,
                             // refrashToggle,
}) => {
    const [clickedHead,setClickedHead] = useState(null);
    const [clickedItem,setClickedItem] = useState(null);
    const [dubleClickedItem,setDubleClickedItem] = useState(null);
    const [dubleClickedID,setDubleClickedID] = useState(null);
    const [updateItem,setUpdateItem] = useState(null);
    const [bChecked,setChecked] = useState(false);
    const [count,setCount] = useState(0);
    const consentEntry = currentEntry;

    const allCheckHandler = () => setChecked(!checkedAll);
    const singleCheckHandler = (e,uniqueNum) => {
        setChecked(!bChecked);
        onCheckSingle(e,uniqueNum);
    }
    useEffect(()=>allCheckHandler,[checkedAll]);

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

    /**
     * input에서 text 받는 핸들러
     * @param e
     */
    function onDubleClickHandler(e){
        setUpdateItem(e.target.value);
    }

    /**
     * 수정할때 엔터 누르면 저장
     * @param e :키 이벤트
     */
    function onKeyPress(e){
        if(e.key === 'Enter'){
            if(window.confirm('수정 하시겠습니까?')){
                axios.post(URL,{parm:'consentUpdate',col_nm:dubleClickedItem,update_data:updateItem,id:dubleClickedID})
                    .then((res)=>{
                        if(res.data){
                            alert("수정 완료.");
                        }else{
                            alert("error! 수정 실패");
                        }
                    });
            }
            setDubleClickedItem(null);
            setDubleClickedID(null);
        }
    }

    /**
     * 아이템 출력하는 컴포넌트 사용 x input은 컴포넌트로 사용시 자꾸 리랜더링 돼서
     * @param item
     * @returns {*}
     * @constructor
     */
    // const ContentsComponent = ({item}) => {
    //     const consentItem = Object.values(item);
    //     return (
    //         consentEntry.map((entry,idx)=> (
    //             dubleClickedID === item.id && dubleClickedItem === entry.name ?
    //             <li key={entry.id}><input type="textbox" name={"r_"+entry.id} value={updateItem}
    //                                       onChange={(e)=>onDubleClickHandler(e)}
    //                                       // onKeyPress={onKeyPress}
    //             /></li> :
    //             <li key={entry.id} onDoubleClick={() => onDubleClickToggle(item.id, entry.name,consentItem[idx+1])}>{consentItem[idx+1]}</li>
    //         ))
    //     )
    // }


    return(
        <section className="consent-section">
            <div className="cont-head">
                <ul className="head-ul">
                    <li className={isDeleteToggle ? '':'none'}>
                        <label>
                            <p>전체</p>
                            <label htmlFor="total">
                                <input type="checkbox"
                                       onChange={(e)=>onCheckAll(consentPosts,e.target.checked)}/>
                            </label>
                        </label>
                    </li>
                    {consentEntry.map((item) => (
                        <li className={clickedHead===item.id?'active':''}
                            key={item.id}
                            onClick={()=>onClickHead(item.id,item.name)}>
                            <p>{item.name}</p>
                            {count === 1 && <img src={down_arrow} alt="down arrow"/> }
                            {count === 2 && <img src={up_arrow} alt="up arrow"/> }
                        </li>
                    ))}
                </ul>
            </div>
            <div className="cont-body">
                {
                    consentPosts.map((item)=>(
                        <ul className={clickedItem === item.id ? "active body-ul":"body-ul"}
                            key={item.id}
                            onClick={()=>onClickItem(item.id)} >
                            <li className={isDeleteToggle ? '':'none'}>
                                <input type="checkbox"
                                       onChange={(e)=>singleCheckHandler(e.target.checked,item.id)}
                                       checked={checkedItems.has(item.id)}/></li>

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
            {isInsertToggle && <InsertConsent URL={URL} consentEntry={consentEntry}/>}
        </section>
    )
}


export default ConsentContents;