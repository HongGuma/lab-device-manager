/**
*@title
*@date 2021-10-05
*@author 홍수희
*@desc
*@etc(change)
*/

import React, {useEffect, useState} from "react";
import axios from "axios";
import TabContainer from "./TabContainer";

// /**
//  * 하단에 숫자 출력하는 컴포넌트
//  * @param totalPosts :총 post 개수 (리스트 전체 길이)
//  * @param postsPerPage :자를 page 개수 (13개씩 자르고 싶다면 postperpage=13
//  * @param paginate :페이지네이션 함수 (숫자를 누르면 tabcontent에 있는 currentPage가 변경
//  * @param isInsertToggle :+추가 버튼 클릭 여부
//  * @returns {JSX.Element}
//  * @constructor
//  */
// const Pagination = ({totalPosts,postsPerPage,paginate,isInsertToggle})=>{
//     const numberPages = Math.ceil(totalPosts/postsPerPage); //하단 페이지네이션의 페이지 개수
//     const numbers = []; //하단 페이지네이션의 숫자 리스트
//     for (let i = 1; i<=Math.ceil(totalPosts/postsPerPage);i++){
//         numbers.push(i);
//     }
//
//     const perNum = 10; // 하단 페이지네이션 나눌 수 (10개씩 끊음)
//     const [currentNumPage, setCurrentNumPage] = useState(1); //페이지네이션의 페이지
//     const [clickNum, setClickNum] = useState(1); //클릭한 숫자
//     const indexOfLastNum = currentNumPage * perNum; //페이지네이션의 마지막 인덱스
//     const indexOfFirstNum = indexOfLastNum - perNum; //페이지네이션의 첫번째 인덱스
//     const currentNum = numbers.slice(indexOfFirstNum,indexOfLastNum); //하단에 출력할 숫자들
//     const endNum = Math.ceil(totalPosts/postsPerPage) //하단 넘버링의 마지막 숫자 ex) 124번
//     const endPage = Math.ceil(numberPages/perNum) //하단 넘버링의 마지막 페이지
//
//     useEffect(()=>{
//         if(isInsertToggle){ //추가 버튼 누르면 제일 마지막 페이지로 이동
//             setCurrentNumPage(endPage);
//         }else{ //한번더 누르면 제일 첫 페이지로 이동
//             setCurrentNumPage(1);
//         }
//
//     },[isInsertToggle])
//
//     function onClickMoveNext(){ setCurrentNumPage(currentNumPage+1); } //하단 넘버링 화살표 누르면 다음 숫자 리스트 출력하는 함수
//     function onClickMovePre(){ setCurrentNumPage(currentNumPage-1); } //하단 넘버링 화살표 누르면 이전 숫자 리스트 출력하는 함수
//     function onClickMoveEnd() { //마지막 페이지로 이동
//         setCurrentNumPage(endPage);
//         paginate(endNum);
//         setClickNum(endNum);
//     }
//     function onClickMoveBeginning(){ //1번 숫자로 돌아감
//         setCurrentNumPage(1);
//         paginate(1);
//         setClickNum(1);
//     }
//     function onClickPaginate(num){ //넘버링에 숫자 클릭시 숫자에 해당하는 post 출력
//         paginate(num); //TabContent에 있는 함수
//         setClickNum(num); //클릭한 숫자 밑에 밑줄 그으려고
//     }
//
//     return(
//         <ul className="pagination">
//             {currentNumPage > 1 && <li onClick={onClickMoveBeginning}><p> ◁ </p></li>}
//             {currentNumPage > 1 && <li onClick={onClickMovePre}> <p> ◀ </p> </li>}
//             {currentNum.map((pageNum)=>(
//                 <li className={clickNum === pageNum? 'active':''} key={pageNum} onClick={()=>onClickPaginate(pageNum)}>
//                     <p>{pageNum}</p>
//                 </li>
//             ))}
//             {currentNumPage < (numberPages/perNum) && <li onClick={onClickMoveNext}> <p> ▶ </p> </li>}
//             {currentNumPage < (numberPages/perNum) && <li onClick={onClickMoveEnd}><p> ▷ </p></li>}
//         </ul>
//     )
// }
// /**
//  * 상단 탭 클릭시 공통으로 사용되는 변수, 함수 담은 컴포넌트
//  * @param URL :axios 통신시 필요한 url
//  * @param posts :출력할 리스트
//  * @param tabNum :탭 넘버
//  * @param itemList :건강검진 탭에서 사용할 항목 리스트
//  * @param isInsert :+추가 버튼 클릭 여부
//  * @param onClickConsentInsertDone :함수. '저장'버튼 클릭시 clinicalConent의 consentInsertDone가 변경됨
//  * @returns {JSX.Element}
//  * @constructor
//  */
// const TabContent = ({URL,posts, tabNum, itemList, isInsert,isDeleteToggle, onClickConsentInsertDone, }) => {
//     const postsPerPage = 15; //페이지 분할할 숫자
//     const [currentPage,setCurrentPage] = useState(1); //현재 페이지
//     const indexOfLast = currentPage * postsPerPage; //마지막 인덱스
//     const indexOfFirst = indexOfLast - postsPerPage; //첫번째 인덱스
//     const currentPosts = posts.slice(indexOfFirst,indexOfLast); //현재 출력할 리스트
//     const [checkedItems,setCheckedItems] = useState(new Set());
//     const [checkedAll,setCheckAll] = useState(false);
//     useEffect(()=>{
//         if(isInsert){ //+추가 버튼 누르면 제일 마지막 페이지로 이동
//             setCurrentPage(Math.ceil(posts.length/postsPerPage));
//         }else{//한번더 누르면 첫 페이지로 이동
//             setCurrentPage(1);
//         }
//     },[isInsert])
//     //하단 넘버링에서 숫자 클릭시 실행하는 함수, currentPage 변경함
//     function paginate(pageNumber){
//         setCurrentPage(pageNumber);
//     }
//
//     /**
//      * 체크박스 개별 선택
//      * @param isChecked :체크 박스 클릭 여부
//      * @param uniqueNum :체크된 아이템 unique number
//      */
//     function onCheckSingle(isChecked,uniqueNum){
//         if(isChecked){
//             checkedItems.add(uniqueNum);
//             setCheckedItems(checkedItems);
//         }else if(!isChecked && checkedItems.has(uniqueNum)){
//             checkedItems.delete(uniqueNum);
//             setCheckedItems(checkedItems);
//         }
//         // console.log(isChecked,uniqueNum);
//     }
//     /**
//      * 체크박스 전체 클릭
//      * @param posts :해당 페이지만 전체 선택하려고 출력된 리스트 받음
//      * @param isChecked :'전체' 체크 여부
//      */
//     function onCheckAll(posts,isChecked){
//         if(isChecked){
//             posts.map((item)=>{
//                 if(item.unique_num != null){
//                     checkedItems.add(item.unique_num);
//                 }else{
//                     checkedItems.add(item.r_2);
//                 }
//             });
//             setCheckedItems(checkedItems);
//             setCheckAll(true);
//         }else{
//             checkedItems.clear();
//             setCheckedItems(checkedItems);
//             setCheckAll(false);
//         }
//         // console.log(isChecked,checkedItems);
//     }
//     async function onClickDelete(){
//         if(isDeleteToggle){
//             alert("%d개의 데이터를 삭제합니다." %checkedItems.size)
//         }
//
//         // if(checkedItems.size>0){
//         //     alert()
//         //     for(let item of checkedItems){
//         //         await axios.post(URL,{parm:'consentDelete',unique_num:item}).then(r=>console.log(r))
//         //     }
//         //
//         // }
//     }
//
//     return(
//         <div className="sample tab-wrap">
//             <div className="tab-table">
//                 {tabNum === 1 && <ConsentPosts URL={URL} consentPosts={currentPosts}
//                                                onCheckSingle={onCheckSingle} checkedItems={checkedItems}
//                                                onCheckAll={onCheckAll} checkedAll={checkedAll}
//                                                isInsertToggle={isInsert}  onClickConsentInsertDone={onClickConsentInsertDone}/>}
//                 {tabNum === 2 && <Survey posts={posts}/>}
//                 {tabNum === 3 && <MedicalCheckupPosts medicalPosts={currentPosts} itemList={itemList}
//                                                       onCheckSingle={onCheckSingle} checkedItems={checkedItems}
//                                                       onCheckAll={onCheckAll} checkedAll={checkedAll} />}
//             </div>
//             <div className="tab-pagination">
//                 <Pagination totalPosts={posts.length} postsPerPage={postsPerPage} paginate={paginate} isInsertToggle={isInsert}/>
//             </div>
//         </div>
//     )
// }
// /**
//  * 동의서, 참여자 정보 탭 클릭시 출력되는 리스트
//  * @param consentPosts :동의서, 참여자 정보 리스트
//  * @param onCheckSingle :(함수)체크박스 개별 클릭시
//  * @param onCheckAll :(함수) '전체' 체크박스 클릭시
//  * @param checkedAll :전체 클릭 여부
//  * @param checkedItems :체크박스 체크된 아이템 담는 Set
//  * @param isInsertToggle :+추가 버튼 클릭 여부
//  * @param onClickConsentInsertDone :'저장'버튼 클릭시 작동하는 함수. InsertConsent에 전달
//  * @returns {JSX.Element}
//  * @constructor
//  */
// const ConsentPosts = ({URL,consentPosts,onCheckSingle, onCheckAll, checkedAll, checkedItems, isInsertToggle,  onClickConsentInsertDone}) => {
//     const titleList = ['고유번호', '가명', '참여일', '성별', '나이', '참여취소일', '구분','검체 2차적 사용','비고','종류 및 수량','보존기간','2차적 제공','2차 식별 정보','리포트','리포트ID','업데이트 신청자','질병명','질병코드','질병코드','임신주수','가족ID','가족관계','질환구분','비고'];
//     const [clickedItem,setClickedItem] = useState(null);
//     const [changeToggle,setChangeToggle] = useState(false);
//     const [bChecked,setChecked] = useState(false);
//     const allCheckHandler = () => setChecked(!checkedAll);
//     const singleCheckHandler = (e,uniqueNum) => {
//         setChecked(!bChecked);
//         onCheckSingle(e,uniqueNum);
//     }
//     useEffect(()=>allCheckHandler,[checkedAll]);
//     function onClickItem(id){ setClickedItem(id) }
//     function onDubleClickToggle(id){
//         setClickedItem(id)
//         setChangeToggle(!changeToggle);
//     }
//
//
//     return(
//         <section className="consent-section">
//             <div className="cont-head">
//                 <ul className="head-ul">
//                     <li>
//                         <label>
//                             <p>전체</p>
//                             <label htmlFor="total">
//                                 <input type="checkbox"
//                                        onChange={(e)=>onCheckAll(consentPosts,e.target.checked)}/>
//                             </label>
//                         </label>
//                     </li>
//                     {titleList.map((name,idx) => (
//                         <li key ={idx}>
//                             <p>{name}</p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             <div className="cont-body">
//                 {
//                     consentPosts.map((item)=>(
//                         <ul className={clickedItem === item.id ? "active body-ul":"body-ul"}
//                             key={item.id}
//                             onClick={()=>onClickItem(item.id)} >
//                                 <li><input type="checkbox"
//                                            onChange={(e)=>singleCheckHandler(e.target.checked,item.unique_num)}
//                                            checked={checkedItems.has(item.unique_num)}/></li>
//                                 <li>{item.unique_num}</li>
//                                 <li>{item.false_nm}</li>
//                                 <li>{item.parti_date}</li>
//                                 <li>{item.sex}</li>
//                                 <li>{item.age}</li>
//                                 <li>{item.cancel_date}</li>
//                                 <li>{item.sortation}</li>
//                                 <li>{item.secondary_use}</li>
//                                 <li>{item.etc}</li>
//                                 <li>{item.type_quantity}</li>
//                                 <li>{item.shelf_live}</li>
//                                 <li>{item.secondary_offer}</li>
//                                 <li>{item.secondary_id_info}</li>
//                                 <li>{item.report}</li>
//                                 <li>{item.report_id}</li>
//                                 <li>{item.request_update}</li>
//                                 <li>{item.disease_name}</li>
//                                 <li>{item.disease_code_KR}</li>
//                                 <li>{item.disease_code_EN}</li>
//                                 <li>{item.pregnancy_week}</li>
//                                 <li>{item.family_id}</li>
//                                 <li>{item.family_code}</li>
//                                 <li>{item.disease_classification}</li>
//                                 <li>{item.etc2}</li>
//                         </ul>
//                     ))
//                 }
//             </div>
//             {isInsertToggle && <InsertConsent URL={URL} onClickConsentInsertDone={onClickConsentInsertDone}/>}
//         </section>
//     )
// }
// /**
//  * 동의서,참여자 정보에서 +추가 버튼 클릭시 출력되는 input 컴포넌트
//  * @param onClickConsentInsertDone :'저장'버튼 클릭시 작동하는 함수
//  * @returns {JSX.Element}
//  * @constructor
//  */
// const InsertConsent = ({URL,onClickConsentInsertDone}) => {
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
//                 <li><input type="checkbox"/></li>
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
// }
// const Survey = ({posts}) => {
//     return(
//         <div>준비중</div>
//     )
// }
// /**
//  * 건강검진 탭 클릭시 출력하는 리스트
//  * @param medicalPosts :건강검진 리스트
//  * @param itemList :건강검진 항목 리스트
//  * @param onCheckSingle :체크박스 개별 클릭시
//  * @param onCheckAll :체크박스 '전체' 클릭
//  * @param checkedItems :체크박스 체크된 아이템 set
//  * @param checkedAll :'전체'체크 여부
//  * @returns {JSX.Element}
//  * @constructor
//  */
// const MedicalCheckupPosts = ({medicalPosts,itemList,onCheckSingle,onCheckAll,checkedItems,checkedAll}) => {
//     const [clickedItem,setClickedItem] = useState(null);
//     const [bChecked,setChecked] = useState(false);
//     const allCheckHandler = () => setChecked(!checkedAll);
//     const singleCheckHandler = (e,uniqueNum) => {
//         setChecked(!bChecked);
//         onCheckSingle(e,uniqueNum);
//     }
//     useEffect(()=>allCheckHandler,[checkedAll]);
//     function onClickItem(id){
//         setClickedItem(id)
//     }
//     return(
//         <section className="medical-section">
//             <div className="cont-head">
//                 <ul className="head-ul">
//                     <li>
//                         <label>
//                             <p>전체</p>
//                             <label htmlFor="total">
//                                 <input type="checkbox"
//                                        onChange={(e)=>onCheckAll(medicalPosts,e.target.checked)}/>
//                             </label>
//                         </label>
//                     </li>
//                     {itemList.map((item) => (
//                         <li key={item.id}>
//                             <p>{item.name}</p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             <div className="cont-body">
//                 {
//                     medicalPosts.map((item)=>(
//                         <ul className={clickedItem === item.id ? "active body-ul":"body-ul"}
//                             onClick={()=>onClickItem(item.id)}
//                             key={item.id}>
//                             <li><input type="checkbox"
//                                        onChange={(e)=>singleCheckHandler(e.target.checked,item.r_2)}
//                                        checked={checkedItems.has(item.r_2)}/></li>
//                             <li>{item.r_1}</li><li>{item.r_2}</li><li>{item.r_3}</li><li>{item.r_4}</li><li>{item.r_5}</li>
//                             <li>{item.r_6}</li><li>{item.r_7}</li><li>{item.r_8}</li><li>{item.r_9}</li><li>{item.r_10}</li>
//                             <li>{item.r_11}</li><li>{item.r_12}</li><li>{item.r_13}</li><li>{item.r_14}</li><li>{item.r_15}</li>
//                             <li>{item.r_16}</li><li>{item.r_17}</li><li>{item.r_18}</li><li>{item.r_19}</li><li>{item.r_20}</li>
//                             <li>{item.r_21}</li><li>{item.r_22}</li><li>{item.r_23}</li><li>{item.r_24}</li><li>{item.r_25}</li>
//                             <li>{item.r_26}</li><li>{item.r_27}</li><li>{item.r_28}</li><li>{item.r_29}</li><li>{item.r_30}</li>
//                             <li>{item.r_31}</li><li>{item.r_32}</li><li>{item.r_33}</li><li>{item.r_34}</li><li>{item.r_35}</li>
//                             <li>{item.r_36}</li><li>{item.r_37}</li><li>{item.r_38}</li><li>{item.r_39}</li><li>{item.r_40}</li>
//                             <li>{item.r_41}</li><li>{item.r_42}</li><li>{item.r_43}</li><li>{item.r_44}</li><li>{item.r_45}</li>
//                             <li>{item.r_46}</li><li>{item.r_47}</li><li>{item.r_48}</li><li>{item.r_49}</li><li>{item.r_50}</li>
//                             <li>{item.r_51}</li><li>{item.r_52}</li><li>{item.r_53}</li><li>{item.r_54}</li><li>{item.r_55}</li>
//                             <li>{item.r_56}</li><li>{item.r_57}</li><li>{item.r_58}</li><li>{item.r_59}</li><li>{item.r_60}</li>
//                             <li>{item.r_61}</li><li>{item.r_62}</li><li>{item.r_63}</li><li>{item.r_64}</li><li>{item.r_65}</li>
//                             <li>{item.r_66}</li><li>{item.r_67}</li><li>{item.r_68}</li><li>{item.r_69}</li><li>{item.r_70}</li>
//                             <li>{item.r_71}</li><li>{item.r_72}</li><li>{item.r_73}</li><li>{item.r_74}</li><li>{item.r_75}</li>
//                             <li>{item.r_76}</li><li>{item.r_77}</li><li>{item.r_78}</li><li>{item.r_79}</li><li>{item.r_80}</li>
//                             <li>{item.r_81}</li><li>{item.r_82}</li><li>{item.r_83}</li><li>{item.r_84}</li><li>{item.r_85}</li>
//                             <li>{item.r_86}</li><li>{item.r_87}</li><li>{item.r_88}</li><li>{item.r_89}</li><li>{item.r_90}</li>
//                             <li>{item.r_91}</li><li>{item.r_92}</li><li>{item.r_93}</li><li>{item.r_94}</li><li>{item.r_95}</li>
//                             <li>{item.r_96}</li><li>{item.r_97}</li><li>{item.r_98}</li><li>{item.r_99}</li><li>{item.r_100}</li>
//                             <li>{item.r_101}</li><li>{item.r_102}</li><li>{item.r_103}</li><li>{item.r_104}</li><li>{item.r_105}</li>
//                             <li>{item.r_106}</li><li>{item.r_107}</li><li>{item.r_108}</li><li>{item.r_109}</li><li>{item.r_110}</li>
//                             <li>{item.r_111}</li><li>{item.r_112}</li><li>{item.r_113}</li><li>{item.r_114}</li><li>{item.r_115}</li>
//                         </ul>
//                     ))
//                 }
//             </div>
//         </section>
//     )
// }
const Tab2 = () => {
    return(
        <section>
            <div>준비중</div>
        </section>
    )
}

/**
 * 상단 탭, 사이드바에서 아이템을 클릭해야 출력
 * @param clickEvent :탭 클릭 이벤트 함수
 * @param num :탭 클릭시 출력되는 리스트 수
 * @returns {JSX.Element}
 * @constructor :제목 옆 탭 출력 컴포넌트
 */
const HiddenTab = ({clickEvent,count, onClickInsertToggle, onClickDeleteToggle}) => {
    const [currentNum,setCurrentNum] = useState(null);
    const [num,setNum] = useState(null);
    function clickTab(num){ setCurrentNum(num);}
    useEffect(()=>{
        clickEvent(currentNum)
        setNum(count)
    },[clickEvent, currentNum])

    return(
        <div className="hidden-tab">
            <div className="tabs">
                <p className={currentNum===1?'active':''} onClick={()=>clickTab(1)}>동의서, 참여자 정보</p>
                <p className={currentNum===2?'active':''} onClick={()=>clickTab(2)}>설문지</p>
                <p className={currentNum===3?'active':''} onClick={()=>clickTab(3)}>건강검진</p>
            </div>
            <div className="cont-cnt">
                <p>총</p>
                <p>{num}</p>
                <p>개</p>
            </div>
            <div className="add-btn">
                <p onClick={onClickInsertToggle}>+추가</p>
                <p onClick={onClickDeleteToggle}>-삭제</p>
            </div>
        </div>
    )
}
/**
 * 메인 컴포넌트 위에 모든 컴포넌트의 부모
 * @param entryName
 * @returns {JSX.Element|null}
 * @constructor
 */
const ClinicalContents = ({entryName}) => {
    const [currentTab,setCurrentTab] = useState(null);
    const [clinical,setClinical] = useState(false);
    const [isTabOpen,setTabOpen] = useState(false);
    const [consentPosts,setConsentPosts] = useState(null); //동의서, 참여자 정보 리스트
    const [medicalItem, setMedicalItem] = useState(null); //건강검진 항목 리스트
    const [medicalResPosts,setMedicalResPosts] = useState(null); // 건강검진 결과 리스트
    const [num,setNum] = useState(null); //hidden tab 에 보낼 숫자
    const [error,setError] = useState(null); //에러 여부
    const [loading,setLoading] = useState(null); //로딩 여부
    const [isInsertToggle,setInsertToggle] = useState(false); //추가 버튼 클릭 여부
    const [isDeleteToggle,setDeleteToggle] = useState(false); //삭제 버튼 클릭 여부
    const [consentInsertDone, setConsentInsertDone] = useState(false); //동의서 데이터 삽입 후 저장 버튼 클릭 여부
    const [deleteDone, setDeleteDone] = useState(false); //데이터 삭제후 완료 여부 (공통)
    const [currentPost,setCurrentPost] = useState(null); //탭 클릭시 tabcontainer로 보낼 리스트
    const URL = 'http://210.218.217.110:3103/api/postSampleData.php';
    let session = sessionStorage.getItem('id');

    useEffect(()=>{
        const fetchList = async () => {
            try{
                setError(null);
                setConsentPosts(null);
                setLoading(null);
                const res1 = await axios.post(URL,{parm:'consent'});
                const res2 = await axios.post(URL,{parm:'medicalResult'});
                const res3 = await axios.post(URL,{parm:'medicalItem'});
                setConsentPosts(res1.data);
                setMedicalResPosts(res2.data);
                setMedicalItem(res3.data);
            }catch (e){
                setError(e);
            }
            setLoading(false);
            setConsentInsertDone(false);
            setDeleteDone(false);
        };
        fetchList().then(r=>{});
    },[consentInsertDone,deleteDone]);
    useEffect(()=>{
        if (sessionStorage.getItem('auth')>7){setClinical(true);}
        else{ setClinical(false) }
        if(clinical){
            if(entryName===''){
                setTabOpen(false);
            }else{
                setTabOpen(true);
            }
        }else { setTabOpen(false);}
    },[clinical, entryName, session])

    if(loading) return <div>로딩중...</div>
    if(error) return <div>error! 관리자에게 문의하세요</div>
    if(!consentPosts) return null;
    if(!medicalItem) return null;


    /**
     * +추가 버튼 클릭시 isInsertToggle 변경하는 함수
     */
    function onClickInsertToggle(){
        setInsertToggle(!isInsertToggle);
    }
    /**
     * 삭제버튼 클릭시 isDeleteToggle 변경하는 함수
     */
    function onClickDeleteToggle(){
        setDeleteToggle(!isDeleteToggle)
    }
    /**
     * 데이터 삽입, '저장' 버튼 클릭시 consentInsertDone 변경하는 함수
     */
    function onClickConsentInsertDone(){
        setConsentInsertDone(true);
    }
    function onClickDeleteDone(){
        setDeleteDone(true);
    }
    /**
     * 탭 클릭시 '총 0개' 에서 숫자 변경하는 함수 (리스트 길이)
     * @param num :tab number
     */
    function onClickCurrentTab(num){
        setCurrentTab(num);
        switch(num){
            case 1:
                setNum(consentPosts.length);
                setCurrentPost(consentPosts);
                break
            case 2:
                break;
            case 3:
                setNum(medicalResPosts.length);
                setCurrentPost(medicalResPosts);
                break
            default:
                setNum(0)
        }
    }

    return(
        <section className="sample container">
            <div className="container-tit">
                <div className="tit-txt">
                    <a>{entryName}</a>
                    {isTabOpen ?
                        <HiddenTab clickEvent = {onClickCurrentTab} count={num} onClickInsertToggle={onClickInsertToggle} onClickDeleteToggle={onClickDeleteToggle}/>
                        :
                        <div>: 열람 권한이 없습니다.</div>}
                </div>
            </div>
            <div className="sample container-cont">
                {(currentTab===1 || currentTab===3) && <TabContainer URL={URL} posts={currentPost} tabNum={currentTab} itemList={medicalItem}
                                                                     isInsert={isInsertToggle} onClickConsentInsertDone={onClickConsentInsertDone}
                                                                     isDeleteToggle={isDeleteToggle} setDeleteToggle={setDeleteToggle} onClickDeleteDone={onClickDeleteDone} />}
                {currentTab===2 && <Tab2/>}
            </div>
        </section>
    )
}

export default ClinicalContents