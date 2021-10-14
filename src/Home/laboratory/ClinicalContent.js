/**
*@title
*@date 2021-10-05
*@author
*@desc
*@etc(change)
*/

import React, {useEffect, useState} from "react";
import axios from "axios";

const Pagination = ({totalPosts,postsPerPage,paginate})=>{
    const numberPages = Math.ceil(totalPosts/postsPerPage); //하단 페이지네이션의 페이지 개수
    const numbers = []; //하단 페이지네이션의 숫자 리스트
    for (let i = 1; i<=Math.ceil(totalPosts/postsPerPage);i++){
        numbers.push(i);
    }

    const perNum = 10; // 하단 페이지네이션 나눌 수 (10개씩 끊음)
    const [currentNumPage, setCurrentNumPage] = useState(1); //페이지네이션의 페이지
    const [clickNum, setClickNum] = useState(1); //클릭한 숫자
    const indexOfLastNum = currentNumPage * perNum; //페이지네이션의 마지막 인덱스
    const indexOfFirstNum = indexOfLastNum - perNum; //페이지네이션의 첫번째 인덱스
    const currentNum = numbers.slice(indexOfFirstNum,indexOfLastNum); //하단에 출력할 숫자들

    function onClickMoveNext(){ setCurrentNumPage(currentNumPage+1); }
    function onClickMovePre(){ setCurrentNumPage(currentNumPage-1); }
    // function onClickMoveBeginning(){ setCurrentNumPage(1); }
    // function onClickMoveEnd(){ setCurrentNumPage(numberPages/perNum - 1); }
    function onClickPaginate(num){
        paginate(num);
        setClickNum(num);
    }

    return(
        <ul className="pagination">
            {/*{currentNumPage > 1 && <li onClick={onClickMoveBeginning}><p> ◁ </p></li>}*/}
            {currentNumPage > 1 && <li onClick={onClickMovePre}> <p> ◀ </p> </li>}
            {currentNum.map((pageNum)=>(
                <li className={clickNum === pageNum? 'active':''} key={pageNum} onClick={()=>onClickPaginate(pageNum)}>
                    <p>{pageNum}</p>
                </li>
            ))}
            {currentNumPage < (numberPages/perNum) && <li onClick={onClickMoveNext}> <p> ▶ </p> </li>}
            {/*{currentNumPage < (numberPages/perNum) && <li onClick={onClickMoveEnd}><p> ▷ </p></li>}*/}
        </ul>
    )
}
const Tab = ({posts, tabNum, itemList}) => {
    const postsPerPage = 13;
    const [currentPage,setCurrentPage] = useState(1);

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = posts.slice(indexOfFirst,indexOfLast);

    function paginate(pageNumber){
        setCurrentPage(pageNumber);
    }
    return(
        <div className="sample tab-wrap">
            <div className="tab-table">
                {tabNum === 1 && <ConsentPosts consentPosts={currentPosts}/>}
                {tabNum === 2 && <Survey posts={posts}/>}
                {tabNum === 3 && <Survey posts={posts}/>}
                {tabNum === 4 && <MedicalCheckupPosts medicalPosts={currentPosts} itemList={itemList}/>}
            </div>
            <div className="tab-pagination">
                <Pagination totalPosts={posts.length} postsPerPage={postsPerPage} paginate={paginate}/>
            </div>

        </div>
    )
}
const ConsentPosts = ({consentPosts}) => {
    const titleList = ['고유번호', '가명', '참여일', '성별', '나이', '참여취소일', '구분','검체 2차적 사용','비고','종류 및 수량','보존기간','2차적 제공','2차 식별 정보','리포트','리포트ID','업데이트 신청자','질병명','질병코드','질병코드','임신주수','가족ID','가족관계','질환구분','비고'];
    const [clickedItem,setClickedItem] = useState(null);
    const [changeToggle,setChangeToggle] = useState(false);
    function onClickItem(id){ setClickedItem(id) }
    function onDubleClickToggle(id){
        setClickedItem(id)
        setChangeToggle(!changeToggle);
    }
    return(
        <section className="consent-section">
            <div className="cont-head">
                <ul className="head-ul">
                    <li>
                        <label>
                            <p>전체</p>
                            <label htmlFor="total">
                                <input type="checkbox"/>
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
                                <li><input type="checkbox"/></li>
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
        </section>
    )
}
const Survey = ({posts}) => {
    return(
        <div>준비중</div>
    )
}
const MedicalCheckupPosts = ({medicalPosts,itemList}) => {
    const [clickedItem,setClickedItem] = useState(null);
    function onClickItem(id){
        setClickedItem(id)
    }
    return(
        <section className="medical-section">
            <div className="cont-head">
                <ul className="head-ul">
                    <li>
                        <label>
                            <p>전체</p>
                            <label htmlFor="total">
                                <input type="checkbox"/>
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
                            <li><input type="checkbox"/></li>
                            <li>{item.r_1}</li><li>{item.r_2}</li><li>{item.r_3}</li><li>{item.r_4}</li><li>{item.r_5}</li>
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

const Tab2 = () => {
    return(
        <section>
            <div>준비중</div>
        </section>
    )
}
const Tab3 = () => {
    return(
        <section>
            <div>준비중</div>
        </section>
    )
}


/**
 *
 * @param clickEvent :탭 클릭 이벤트 함수
 * @param num :탭 클릭시 출력되는 리스트 수
 * @returns {JSX.Element}
 * @constructor :제목 옆 탭 출력 컴포넌트
 */
const HiddenTab = ({clickEvent,count}) => {
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
                <p className={currentNum===2?'active':''} onClick={()=>clickTab(2)}>설문지(1~2143)</p>
                <p className={currentNum===3?'active':''} onClick={()=>clickTab(3)}>설문지(2144~3095)</p>
                <p className={currentNum===4?'active':''} onClick={()=>clickTab(4)}>건강검진</p>
            </div>
            <div className="cont-cnt">
                <p>총</p>
                <p>{num}</p>
                <p>개</p>
            </div>
            <div className="add-btn">
                <p>+추가</p>
                <p>-삭제</p>
            </div>
        </div>
    )
}

const ClinicalContent = ({entryName}) => {
    const [currentTab,setCurrentTab] = useState(null);
    const [clinical,setClinical] = useState(false);
    const [isTabOpen,setTabOpen] = useState(false);
    const [consentPosts,setConsentPosts] = useState(null); //동의서, 참여자 정보 리스트
    const [medicalItem, setMedicalItem] = useState(null); //건강검진 항목 리스트
    const [medicalResPosts,setMedicalResPosts] = useState(null); // 건강검진 결과 리스트
    const [num,setNum] = useState(null); //hidden tab 에 보낼 숫자
    const [error,setError] = useState(null); //에러 여부
    const [loading,setLoading] = useState(null); //로딩 여부
    let session = sessionStorage.getItem('id');


    const [adminBtnToggle,setAdminBtnToggle] = useState(false); //관리자에게 보이는 버튼
    const [defaultToggle,setDefaultToggle] = useState(true); //기본으로 출력할 컴포넌트 여부
    const [allToggle,setAllToggle] = useState(false); //모든 리스트 출력할 컴포넌트 여부
    const [checkedItems,setCheckedItems] = useState(new Set());//체크박스 체크한 아이템
    const [isAllChecked, setAllChecked] = useState(false);//전체 클릭 여부
    const [deleteDone,setDeleteDone] = useState(false);

    const URL = 'http://210.218.217.110:3103/api/postSampleData.php';

    useEffect(()=>{
        const fetchList = async () => {
            try{
                setError(null);
                setConsentPosts(null);
                setLoading(null);
                const res1 = await axios.post(URL,{parm:'consent'});
                const res2 = await axios.post(URL,{parm:'medicalResult'});
                const res3 = await axios.post(URL,{parm:'checkupItem'});
                setConsentPosts(res1.data);
                setMedicalResPosts(res2.data);
                setMedicalItem(res3.data);
            }catch (e){
                setError(e);
            }
            setLoading(false);
        };
        fetchList().then(r=>{});
    },[]);
    useEffect(()=>{
        if (sessionStorage.getItem('auth')>5){setClinical(true);}
        else{ setClinical(false) }
        if(clinical){
            if(entryName===''){
                setTabOpen(false)
            }else{
                setTabOpen(true)
            }
        }else { setTabOpen(false)}
    },[clinical, entryName, session])



    function onClickCurrentTab(num){
        setCurrentTab(num);
        switch(num){
            case 1:
                setNum(consentPosts.length);
                break
            case 2:
            case 3:
                break
            case 4:
                setNum(medicalResPosts.length);
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
                    {isTabOpen ? <HiddenTab clickEvent = {onClickCurrentTab} count={num}/> : <div>: 열람 권한이 없습니다.</div>}
                </div>
            </div>
            <div className="sample container-cont">
                {currentTab===1 && <Tab posts={consentPosts} tabNum={currentTab} itemList={medicalItem}/>}
                {currentTab===2 && <Tab2/>}
                {currentTab===3 && <Tab3/>}
                {currentTab===4 && <Tab posts={medicalResPosts} tabNum={currentTab} itemList={medicalItem}/>}
            </div>
        </section>
    )
}

export default ClinicalContent