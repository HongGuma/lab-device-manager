import React, {useEffect, useState} from "react";
import axios from "axios";

// const InsertMedicalCheckup = ({}) => {
//
//     const [insertItem,setInsertItem] = useState({
//         unique_num:'-',
//         false_nm:'-',
//         parti_date:'-',
//         sex:'-',
//         age:'-',
//         cancel_date:'-',
//         sortation:'-',
//         secondary_use:'-',
//         etc:'-',
//         type_quantity:'-',
//         shelf_live:'-',
//         secondary_offer:'-',
//         secondary_id_info:'-',
//         report:'-',
//         report_id:'-',
//         request_update:'-',
//         disease_name:'-',
//         disease_code_KR:'-',
//         disease_code_EN:'-',
//         pregnancy_week:'-',
//         family_id:'-',
//         family_code:'-',
//         disease_classification:'-',
//         etc2:'-',
//     })
//
//     const { unique_num, false_nm, parti_date, sex, age, cancel_date, sortation, secondary_use, etc,
//         type_quantity, shelf_live, secondary_offer, secondary_id_info, report, report_id, request_update,
//         disease_name, disease_code_KR, disease_code_EN, pregnancy_week, family_id, family_code,
//         disease_classification, etc2} = insertItem;
//
//     function insertHandler(e){
//         const {name,value} = e.target;
//         setInsertItem({...insertItem, [name]:value});
//
//     }
//
//     async function onClickInsertBtn(){
//         await axios({
//             method:'POST',
//             url:URL,
//             data:{
//                 parm:'consentInsert',
//                 unique_num:unique_num,
//                 false_nm:false_nm,
//                 parti_date:parti_date,
//                 sex:sex,
//                 age:age,
//                 cancel_date:cancel_date,
//                 sortation:sortation,
//                 secondary_use:secondary_use,
//                 etc:etc,
//                 type_quantity:type_quantity,
//                 shelf_live:shelf_live,
//                 secondary_offer:secondary_offer,
//                 secondary_id_info:secondary_id_info,
//                 report:report,
//                 report_id:report_id,
//                 request_update:request_update,
//                 disease_name:disease_name,
//                 disease_code_KR:disease_code_KR,
//                 disease_code_EN:disease_code_EN,
//                 pregnancy_week:pregnancy_week,
//                 family_id:family_id,
//                 family_code:family_code,
//                 disease_classification:disease_classification,
//                 etc2:etc2
//             },
//             header:{'Content-Type': 'aplication/json'}
//         }).then((res)=>{
//             if(res.data){
//                 onClickConsentInsertDone();
//             }else{
//                 alert("에러 발생. 관리자에게 문의하세요.")
//             }
//
//         })
//     }
//
//     return(
//         <div>
//             <ul className="insert-ul">
//                 <li><input name="unique_num" type="textbox" onChange={insertHandler}/></li>
//                 <li><input name="false_nm" type="textbox" onChange={insertHandler}/></li>
//                 <li><input name="parti_date" type="textbox" onChange={insertHandler}/></li>
//                 <li><input name="sex" type="textbox" onChange={insertHandler}/></li>
//                 <li><input name="age" type="textbox" onChange={insertHandler}/></li>
//                 <li><input name="cancel_date" type="textbox" onChange={insertHandler}/></li>
//                 <li><input name="sortation" type="textbox" onChange={insertHandler}/></li>
//                 <li><input name="secondary_use" type="textbox" onChange={insertHandler}/></li>
//                 <li><input name="etc" type="textbox" onChange={insertHandler}/></li>
//                 <li><input name="type_quantity" type="textbox" onChange={insertHandler}/></li>
//                 <li><input name="shelf_live" type="textbox" onChange={insertHandler}/></li>
//                 <li><input name="secondary_offer" type="textbox" onChange={insertHandler}/></li>
//                 <li><input name="secondary_id_info" type="textbox" onChange={insertHandler}/></li>
//                 <li><input name="report" type="textbox" onChange={insertHandler}/></li>
//                 <li><input name="report_id" type="textbox" onChange={insertHandler}/></li>
//                 <li><input name="request_update" type="textbox" onChange={insertHandler}/></li>
//                 <li><input name="disease_name" type="textbox" onChange={insertHandler}/></li>
//                 <li><input name="disease_code_KR" type="textbox" onChange={insertHandler}/></li>
//                 <li><input name="disease_code_EN" type="textbox" onChange={insertHandler}/></li>
//                 <li><input name="pregnancy_week" type="textbox" onChange={insertHandler}/></li>
//                 <li><input name="family_id" type="textbox" onChange={insertHandler}/></li>
//                 <li><input name="family_code" type="textbox" onChange={insertHandler}/></li>
//                 <li><input name="disease_classification" type="textbox" onChange={insertHandler}/></li>
//                 <li><input name="etc2" type="textbox" onChange={insertHandler}/></li>
//             </ul>
//             <ul className="insert-btn"><li onClick={onClickInsertBtn}>저장</li></ul>
//         </div>
//
//     )
//
// }
/**
 * 건강검진 탭 클릭시 출력하는 리스트
 * @param medicalPosts :건강검진 리스트
 * @param itemList :건강검진 항목 리스트
 * @param onCheckSingle :체크박스 개별 클릭시
 * @param onCheckAll :체크박스 '전체' 클릭
 * @param checkedItems :체크박스 체크된 아이템 set
 * @param checkedAll :'전체'체크 여부
 * @returns {JSX.Element}
 * @constructor
 */
const MedicalCheckupContent = ({medicalPosts,itemList,onCheckSingle,onCheckAll,checkedItems,checkedAll,isDeleteToggle}) => {
    const [clickedItem,setClickedItem] = useState(null);
    const [changeToggle,setChangeToggle] = useState(false);
    const [bChecked,setChecked] = useState(false);
    const allCheckHandler = () => setChecked(!checkedAll);
    const singleCheckHandler = (e,uniqueNum) => {
        setChecked(!bChecked);
        onCheckSingle(e,uniqueNum);
    }

    useEffect(()=>allCheckHandler,[checkedAll]);
    function onClickItem(id){
        setClickedItem(id)
    }
    function onDubleClickToggle(id){
        setClickedItem(id)
        setChangeToggle(!changeToggle);
    }
    return(
        <section className="medical-section">
            <div className="cont-head">
                <ul className="head-ul">
                    <li className={isDeleteToggle ? '' : 'none'}>
                        <label>
                            <p>전체</p>
                            <label htmlFor="total">
                                <input type="checkbox"
                                       onChange={(e)=>onCheckAll(medicalPosts,e.target.checked)}/>
                            </label>
                        </label>
                    </li>
                    {itemList.map((item) => (
                        <li key={item.id}>
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="cont-body">
                {
                    medicalPosts.map((item)=>(
                        <ul className={clickedItem === item.id ? "active body-ul":"body-ul"}
                            onClick={()=>onClickItem(item.id)}
                            key={item.id}>
                            <li className={isDeleteToggle ? '' : 'none'}><input type="checkbox"
                                       onChange={(e)=>singleCheckHandler(e.target.checked,item.r_2)}
                                       checked={checkedItems.has(item.r_2)}/></li>
                            {(changeToggle && clickedItem === item.id) ?
                                <li onClick={()=>onDubleClickToggle(item.r_1)}><input type="textbox" value={item.r_1}/></li>
                                :
                                <li onDoubleClick={()=>onDubleClickToggle(item.r_1)}>{item.r_1}</li>
                                }
                            <li>{item.r_2}</li><li>{item.r_3}</li><li>{item.r_4}</li><li>{item.r_5}</li>
                            <li>{item.r_6}</li><li>{item.r_7}</li><li>{item.r_8}</li><li>{item.r_9}</li><li>{item.r_10}</li>
                            <li>{item.r_11}</li><li>{item.r_12}</li><li>{item.r_13}</li><li>{item.r_14}</li><li>{item.r_15}</li>
                            <li>{item.r_16}</li><li>{item.r_17}</li><li>{item.r_18}</li><li>{item.r_19}</li><li>{item.r_20}</li>
                            <li>{item.r_21}</li><li>{item.r_22}</li><li>{item.r_23}</li><li>{item.r_24}</li><li>{item.r_25}</li>
                            <li>{item.r_26}</li><li>{item.r_27}</li><li>{item.r_28}</li><li>{item.r_29}</li><li>{item.r_30}</li>
                            <li>{item.r_31}</li><li>{item.r_32}</li><li>{item.r_33}</li><li>{item.r_34}</li><li>{item.r_35}</li>
                            <li>{item.r_36}</li><li>{item.r_37}</li><li>{item.r_38}</li><li>{item.r_39}</li><li>{item.r_40}</li>
                            <li>{item.r_41}</li><li>{item.r_42}</li><li>{item.r_43}</li><li>{item.r_44}</li><li>{item.r_45}</li>
                            <li>{item.r_46}</li><li>{item.r_47}</li><li>{item.r_48}</li><li>{item.r_49}</li><li>{item.r_50}</li>
                            <li>{item.r_51}</li><li>{item.r_52}</li><li>{item.r_53}</li><li>{item.r_54}</li><li>{item.r_55}</li>
                            <li>{item.r_56}</li><li>{item.r_57}</li><li>{item.r_58}</li><li>{item.r_59}</li><li>{item.r_60}</li>
                            <li>{item.r_61}</li><li>{item.r_62}</li><li>{item.r_63}</li><li>{item.r_64}</li><li>{item.r_65}</li>
                            <li>{item.r_66}</li><li>{item.r_67}</li><li>{item.r_68}</li><li>{item.r_69}</li><li>{item.r_70}</li>
                            <li>{item.r_71}</li><li>{item.r_72}</li><li>{item.r_73}</li><li>{item.r_74}</li><li>{item.r_75}</li>
                            <li>{item.r_76}</li><li>{item.r_77}</li><li>{item.r_78}</li><li>{item.r_79}</li><li>{item.r_80}</li>
                            <li>{item.r_81}</li><li>{item.r_82}</li><li>{item.r_83}</li><li>{item.r_84}</li><li>{item.r_85}</li>
                            <li>{item.r_86}</li><li>{item.r_87}</li><li>{item.r_88}</li><li>{item.r_89}</li><li>{item.r_90}</li>
                            <li>{item.r_91}</li><li>{item.r_92}</li><li>{item.r_93}</li><li>{item.r_94}</li><li>{item.r_95}</li>
                            <li>{item.r_96}</li><li>{item.r_97}</li><li>{item.r_98}</li><li>{item.r_99}</li><li>{item.r_100}</li>
                            <li>{item.r_101}</li><li>{item.r_102}</li><li>{item.r_103}</li><li>{item.r_104}</li><li>{item.r_105}</li>
                            <li>{item.r_106}</li><li>{item.r_107}</li><li>{item.r_108}</li><li>{item.r_109}</li><li>{item.r_110}</li>
                            <li>{item.r_111}</li><li>{item.r_112}</li><li>{item.r_113}</li><li>{item.r_114}</li><li>{item.r_115}</li>
                        </ul>
                    ))
                }
            </div>
        </section>
    )
}

export default MedicalCheckupContent;