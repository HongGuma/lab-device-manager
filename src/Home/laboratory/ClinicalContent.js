/**
*@title
*@date 2021-10-05
*@author
*@desc
*@etc(change)
*/

import React, {useEffect, useState} from "react";
import axios from "axios";
import {w} from "react-select/dist/index-4bd03571.esm";

const Tab1 = ({consentList}) => {
    const titleList = ['고유번호', '가명', '참여일', '성별', '나이', '참여취소일', '구분','검체 2차적 사용','비고','종류 및 수량','보존기간','2차적 제공','2차 식별 정보','리포트','리포트ID','업데이트 신청자','질병명','질병코드','질병코드','임신주수','가족ID','가족관계','질환구분','비고']

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
                    consentList.map((item)=>(
                        <ul className="body-ul" key={item.id}>
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
const Tab2 = () => {
    const titleList = [' 순서','설문일','고유번호','8일 이상','초경 나이:__세', '폐경 나이:__세','전혀 없다','두통']
    return(
        <section>
            <div className="cont-head">
                <table>

                </table>
                <ul className="head-ul">
                    <li>전체</li>
                    <li>순서</li>
                    <li>설문일</li>
                    <li>고유번호</li>
                    <li>(월경 주기)8일 이상</li>
                    <li>초경 나이:__세</li>
                    <li>폐경 나이:__세</li>
                    <li>(월경 증상)전혀 없다</li>
                    <li>두통</li>
                    <li>허리 통증</li>
                    <li>복통</li>
                    <li>유방통</li>
                    <li>메스꺼움, 구토 유발</li>
                    <li>불안</li>
                    <li>부종(붓기)</li>
                    <li>기타(___)</li>
                    <li>응답거부</li>
                    <li>구분</li>
                </ul>
            </div>
            <div className="cont-body">
                <ul className="body-ul">
                    <li><input type="checkbox"/></li>
                    <li>1</li>
                    <li>NA</li>
                    <li>U10K-00000</li>
                    <li>NA</li>
                    <li>NA</li>
                    <li>NA</li>
                    <li>NA</li>
                    <li>NA</li>
                    <li>NA</li>
                    <li>NA</li>
                    <li>NA</li>
                    <li>NA</li>
                    <li>NA</li>
                    <li>NA</li>
                    <li>NA</li>
                    <li>NA</li>
                    <li>2016만게놈_VIP_5건</li>

                </ul>
            </div>
        </section>
    )
}
const Tab3 = () => {
    const titleList = ['순번','bCODE','고유번호','신장','체중','표준체중','비만도','신체계측검사','체지방율','BMI','허리둘레','수축기혈압','이완기혈압','맥박수'];
    return(
        <section>
            <div className="cont-head">
                <ul className="head-ul">
                    <li>
                        <label>
                            <p>Tab2</p>
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
                <ul className="body-ul">
                    <li><input type="checkbox"/></li>
                    <li>U10K-00000</li>
                    <li>김00</li>
                    <li>2000-01-01</li>
                    <li>NA</li>
                    <li>NA</li>
                    <li>NA</li>
                    <li>NA</li>
                    <li><select>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select></li>
                    <li>-</li>
                    <li>NA</li>
                    <li><select>
                        <option value={'영구'}>영구</option>
                        <option value={'5년'}>5년</option>
                        <option value={'10년'}>10년</option>
                    </select></li>
                    <li><select>
                        <option value={'유사'}>유사</option>
                        <option value={'포괄'}>포괄</option>
                    </select></li>
                    <li><select>
                        <option value={'포함'}>포함</option>
                        <option value={'불포함'}>불포함</option>
                    </select></li>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                    <li>-</li>
                </ul>
            </div>
        </section>
    )
}
const Tab4 = ({itemList,resultList}) => {
    return(
        <section>
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
                    resultList.map((item)=>(
                        <ul className="body-ul" key={item.id}>
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
        if(count == null){
            setNum(0)
        }else{
            setNum(count)
        }
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
        </div>
    )
}

const ClinicalContent = ({entryName}) => {
    const [currentTab,setCurrentTab] = useState(null);
    const [clinical,setClinical] = useState(false);
    const [isTabOpen,setTabOpen] = useState(false);
    const [consent,setConsentList] = useState(null); //동의서, 참여자 정보 리스트
    const [consetnCnt, setConsentCnt] = useState(null); // 리스트 개수
    const [chkListItem, setChkListItem] = useState(null); //건강검진 항목 리스트
    const [results,setResultsList] = useState(null); // 건강검진 결과 리스트
    const [resultsCnt,setResultsCnt] = useState(null); //리스트 개수
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
                setConsentList(null);
                setLoading(null);
                const res1 = await axios.post(URL,{parm:'consent'});
                const res2 = await axios.post(URL,{parm:'medicalResult'});
                const res3 = await axios.post(URL,{parm:'checkupItem'});
                const cnt1 = await axios.post(URL,{parm:'consentCnt'});
                const cnt2 = await axios.post(URL, {parm:'resultCnt'});
                setConsentList(res1.data);
                setResultsList(res2.data);
                setChkListItem(res3.data);
                setConsentCnt(cnt1.data);
                setResultsCnt(cnt2.data);
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
                setNum(consetnCnt);
                break
            case 2:
            case 3:
                break
            case 4:
                setNum(resultsCnt);
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
                    {isTabOpen && <HiddenTab clickEvent = {onClickCurrentTab} count={num}/>}
                </div>
            </div>
            <div className="sample container-cont">
                {currentTab===1 && <Tab1 consentList={consent}/>}
                {currentTab===2 && <Tab2/>}
                {currentTab===3 && <Tab3/>}
                {currentTab===4 && <Tab4 itemList={chkListItem} resultList={results}/>}
            </div>
        </section>
    )
}

export default ClinicalContent