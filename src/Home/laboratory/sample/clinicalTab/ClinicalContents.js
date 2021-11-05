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
    },[/*consentInsertDone,deleteDone*/]);
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
        setInsertToggle(!isInsertToggle);
    }
    function onClickDeleteDone(){
        setDeleteDone(true);
    }
    /**
     * 탭 클릭시 currentPost 변경하는 함수
     * @param num :tab number
     */
    function onClickCurrentTab(num){
        setCurrentTab(num);
        switch(num){
            case 1:
                setCurrentPost(consentPosts);
                break
            case 2:
                break;
            case 3:
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
                        <HiddenTab clickEvent = {onClickCurrentTab} onClickInsertToggle={onClickInsertToggle} onClickDeleteToggle={onClickDeleteToggle}/>
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