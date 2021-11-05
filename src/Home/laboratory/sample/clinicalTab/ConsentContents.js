import React, {useEffect, useState} from "react";
import axios from "axios";
import down_arrow from "../../../../images/down_arrow_white.png";
import up_arrow from "../../../../images/up_arrow.png";

/**
 * 동의서,참여자 정보에서 +추가 버튼 클릭시 출력되는 input 컴포넌트
 * @param URL
 * @param onClickConsentInsertDone :'저장'버튼 클릭시 작동하는 함수
 * @returns {JSX.Element}
 * @constructor
 */
const InsertConsent = ({URL,onClickConsentInsertDone}) => {
    const [insertItem,setInsertItem] = useState({
        unique_num:'-',
        false_nm:'-',
        parti_date:'-',
        sex:'-',
        age:'-',
        cancel_date:'-',
        sortation:'-',
        secondary_use:'-',
        etc:'-',
        type_quantity:'-',
        shelf_live:'-',
        secondary_offer:'-',
        secondary_id_info:'-',
        report:'-',
        report_id:'-',
        request_update:'-',
        disease_name:'-',
        disease_code_KR:'-',
        disease_code_EN:'-',
        pregnancy_week:'-',
        family_id:'-',
        family_code:'-',
        disease_classification:'-',
        etc2:'-',
    })

    const { unique_num, false_nm, parti_date, sex, age, cancel_date, sortation, secondary_use, etc,
        type_quantity, shelf_live, secondary_offer, secondary_id_info, report, report_id, request_update,
        disease_name, disease_code_KR, disease_code_EN, pregnancy_week, family_id, family_code,
        disease_classification, etc2} = insertItem;

    function insertHandler(e){
        const {name,value} = e.target;
        setInsertItem({...insertItem, [name]:value});
    }

    async function onClickInsertBtn(){
        await axios({
            method:'POST',
            url:URL,
            data:{
                parm:'consentInsert',
                unique_num:unique_num,
                false_nm:false_nm,
                parti_date:parti_date,
                sex:sex,
                age:age,
                cancel_date:cancel_date,
                sortation:sortation,
                secondary_use:secondary_use,
                etc:etc,
                type_quantity:type_quantity,
                shelf_live:shelf_live,
                secondary_offer:secondary_offer,
                secondary_id_info:secondary_id_info,
                report:report,
                report_id:report_id,
                request_update:request_update,
                disease_name:disease_name,
                disease_code_KR:disease_code_KR,
                disease_code_EN:disease_code_EN,
                pregnancy_week:pregnancy_week,
                family_id:family_id,
                family_code:family_code,
                disease_classification:disease_classification,
                etc2:etc2
            },
            header:{'Content-Type': 'aplication/json'}
        }).then((res)=>{
            if(res.data){
                onClickConsentInsertDone();
            }else{
                alert("에러 발생. 관리자에게 문의하세요.")
            }

        })
    }

    return(
        <div>
            <ul className="insert-ul">
                <li><input name="unique_num" type="textbox" onChange={insertHandler}/></li>
                <li><input name="false_nm" type="textbox" onChange={insertHandler}/></li>
                <li><input name="parti_date" type="textbox" onChange={insertHandler}/></li>
                <li><input name="sex" type="textbox" onChange={insertHandler}/></li>
                <li><input name="age" type="textbox" onChange={insertHandler}/></li>
                <li><input name="cancel_date" type="textbox" onChange={insertHandler}/></li>
                <li><input name="sortation" type="textbox" onChange={insertHandler}/></li>
                <li><input name="secondary_use" type="textbox" onChange={insertHandler}/></li>
                <li><input name="etc" type="textbox" onChange={insertHandler}/></li>
                <li><input name="type_quantity" type="textbox" onChange={insertHandler}/></li>
                <li><input name="shelf_live" type="textbox" onChange={insertHandler}/></li>
                <li><input name="secondary_offer" type="textbox" onChange={insertHandler}/></li>
                <li><input name="secondary_id_info" type="textbox" onChange={insertHandler}/></li>
                <li><input name="report" type="textbox" onChange={insertHandler}/></li>
                <li><input name="report_id" type="textbox" onChange={insertHandler}/></li>
                <li><input name="request_update" type="textbox" onChange={insertHandler}/></li>
                <li><input name="disease_name" type="textbox" onChange={insertHandler}/></li>
                <li><input name="disease_code_KR" type="textbox" onChange={insertHandler}/></li>
                <li><input name="disease_code_EN" type="textbox" onChange={insertHandler}/></li>
                <li><input name="pregnancy_week" type="textbox" onChange={insertHandler}/></li>
                <li><input name="family_id" type="textbox" onChange={insertHandler}/></li>
                <li><input name="family_code" type="textbox" onChange={insertHandler}/></li>
                <li><input name="disease_classification" type="textbox" onChange={insertHandler}/></li>
                <li><input name="etc2" type="textbox" onChange={insertHandler}/></li>
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
                            consentPosts,
                            onCheckSingle, onCheckAll,
                            checkedAll, checkedItems,
                            isInsertToggle, onClickConsentInsertDone,
                            isDeleteToggle,
                            onClickSort, refrashToggle,
}) => {
    const titleList = ['고유번호', '가명', '참여일', '성별', '나이', '참여취소일', '구분','검체 2차적 사용','비고','종류 및 수량','보존기간','2차적 제공','2차 식별 정보','리포트','리포트ID','업데이트 신청자','질병명','질병코드(KR)','질병코드(EN)','임신주수','가족ID','가족관계','질환구분','비고2'];
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

    const ContentsItem = ({id,column,item}) => {
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
                                       onChange={(e)=>onCheckAll(consentPosts,e.target.checked)}/>
                            </label>
                        </label>
                    </li>
                    {titleList.map((name,idx) => (
                        <li className={clickedHead===idx?'active':''}
                            key={idx}
                            onClick={()=>onClickHead(idx,name)}>
                            <p>{name}</p>
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
                                       onChange={(e)=>singleCheckHandler(e.target.checked,item.unique_num)}
                                       checked={checkedItems.has(item.unique_num)}/></li>
                            {<ContentsItem id={item.id} column={'unique_num'} item={item.unique_num}/> }
                            {<ContentsItem id={item.id} column={'false_nm'} item={item.false_nm}/> }
                            {<ContentsItem id={item.id} column={'parti_date'} item={item.parti_date}/> }
                            {<ContentsItem id={item.id} column={'sex'} item={item.sex}/> }
                            {<ContentsItem id={item.id} column={'age'} item={item.age}/> }
                            {<ContentsItem id={item.id} column={'cancel_date'} item={item.cancel_date}/> }
                            {<ContentsItem id={item.id} column={'sortation'} item={item.sortation}/> }
                            {<ContentsItem id={item.id} column={'secondary_use'} item={item.secondary_use}/> }
                            {<ContentsItem id={item.id} column={'etc'} item={item.etc}/> }
                            {<ContentsItem id={item.id} column={'type_quantity'} item={item.etc}/> }
                            {<ContentsItem id={item.id} column={'shelf_live'} item={item.etc}/> }
                            {<ContentsItem id={item.id} column={'secondary_offer'} item={item.etc}/> }
                            {<ContentsItem id={item.id} column={'secondary_id_info'} item={item.etc}/> }
                            {<ContentsItem id={item.id} column={'report'} item={item.etc}/> }
                            {<ContentsItem id={item.id} column={'report_id'} item={item.etc}/> }
                            {<ContentsItem id={item.id} column={'request_update'} item={item.etc}/> }
                            {<ContentsItem id={item.id} column={'disease_name'} item={item.etc}/> }
                            {<ContentsItem id={item.id} column={'disease_code_KR'} item={item.etc}/> }
                            {<ContentsItem id={item.id} column={'disease_code_EN'} item={item.etc}/> }
                            {<ContentsItem id={item.id} column={'pregnancy_week'} item={item.etc}/> }
                            {<ContentsItem id={item.id} column={'family_id'} item={item.etc}/> }
                            {<ContentsItem id={item.id} column={'family_code'} item={item.etc}/> }
                            {<ContentsItem id={item.id} column={'disease_classification'} item={item.etc}/> }
                            {<ContentsItem id={item.id} column={'etc2'} item={item.etc}/> }
                        </ul>
                    ))
                }
            </div>
            {isInsertToggle && <InsertConsent URL={URL} onClickConsentInsertDone={onClickConsentInsertDone}/>}
        </section>
    )
}


export default ConsentContents;