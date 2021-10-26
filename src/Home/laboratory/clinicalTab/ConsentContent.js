import React, {useEffect, useState} from "react";
import axios from "axios";


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
 * @returns {JSX.Element}
 * @constructor
 */
const ConsentContent = ({URL,consentPosts,onCheckSingle, onCheckAll, checkedAll, checkedItems, isInsertToggle,  onClickConsentInsertDone, isDeleteToggle}) => {
    const titleList = ['고유번호', '가명', '참여일', '성별', '나이', '참여취소일', '구분','검체 2차적 사용','비고','종류 및 수량','보존기간','2차적 제공','2차 식별 정보','리포트','리포트ID','업데이트 신청자','질병명','질병코드','질병코드','임신주수','가족ID','가족관계','질환구분','비고'];
    const [clickedItem,setClickedItem] = useState(null);
    const [changeToggle,setChangeToggle] = useState(false);
    const [bChecked,setChecked] = useState(false);
    const allCheckHandler = () => setChecked(!checkedAll);
    const singleCheckHandler = (e,uniqueNum) => {
        setChecked(!bChecked);
        onCheckSingle(e,uniqueNum);
    }
    useEffect(()=>allCheckHandler,[checkedAll]);
    function onClickItem(id){ setClickedItem(id) }
    function onDubleClickToggle(id){
        setClickedItem(id)
        setChangeToggle(!changeToggle);
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
                        <li key ={idx}>
                            <p>{name}</p>
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
                            <li className={isDeleteToggle ? '':'none'}><input type="checkbox"
                                       onChange={(e)=>singleCheckHandler(e.target.checked,item.unique_num)}
                                       checked={checkedItems.has(item.unique_num)}/></li>
                            <li>{item.unique_num}</li>
                            <li>{item.false_nm}</li>
                            <li>{item.parti_date}</li>
                            <li>{item.sex}</li>
                            <li>{item.age}</li>
                            <li>{item.cancel_date}</li>
                            <li>{item.sortation}</li>
                            <li>{item.secondary_use}</li>
                            <li>{item.etc}</li>
                            <li>{item.type_quantity}</li>
                            <li>{item.shelf_live}</li>
                            <li>{item.secondary_offer}</li>
                            <li>{item.secondary_id_info}</li>
                            <li>{item.report}</li>
                            <li>{item.report_id}</li>
                            <li>{item.request_update}</li>
                            <li>{item.disease_name}</li>
                            <li>{item.disease_code_KR}</li>
                            <li>{item.disease_code_EN}</li>
                            <li>{item.pregnancy_week}</li>
                            <li>{item.family_id}</li>
                            <li>{item.family_code}</li>
                            <li>{item.disease_classification}</li>
                            <li>{item.etc2}</li>
                        </ul>
                    ))
                }
            </div>
            {isInsertToggle && <InsertConsent URL={URL} onClickConsentInsertDone={onClickConsentInsertDone}/>}
        </section>
    )
}


export default ConsentContent;