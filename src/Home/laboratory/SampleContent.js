import React, {useEffect, useState} from "react";

/**
*@title 샘플 관리 페이지 본문
*@date 2021-09-27
*@author 홍수희
*@desc 사이드바 클릭시 해당 아이템에 맞는 데이터 컬럼 출력하는 페이지
*@etc(change)
*/

const Tab1 = () => {
    const titleList = ['고유번호', '가명', '참여일', '성별', '나이', '참여취소일', '구분','검체 2차적 사용','비고','종류 및 수량','보존기간','2차적 제공','2차 식별 정보','리포트','리포트ID','업데이트 신청자','질병명','질병코드','질병코드','임신주수','가족ID','가족관계','질환구분','비고']

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

const Tab4 = () => {
    const titleList = ['']
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


const SampleContent = ({entryName,tabNum}) => {
    const [currentTab,setCurrentTab] = useState(null);
    function tabOnOff(){

    }

    function onClickCurrentTab(num){
        setCurrentTab(num);
        console.log(currentTab);
    }

    return(
        <section className="sample container">
            <div className="container-tit">
                <div className="tit-txt">
                    <a>{entryName}</a>
                    <p className="tab1" onClick={()=>onClickCurrentTab('1')}>동의서, 참여자 정보</p>
                    <p className="tab2" onClick={()=>onClickCurrentTab('2')}>설문지(1~2143)</p>
                    <p className="tab3" onClick={()=>onClickCurrentTab('3')}>설문지(2144~3095)</p>
                    <p className="tab4" onClick={()=>onClickCurrentTab('4')}>건강검진</p>
                </div>
                <div className="cont-cnt">
                    <p>총</p>
                    <p></p>
                    <p>개</p>
                </div>
            </div>
            <div className="sample container-cont">
                {currentTab==='1' && <Tab1/>}
                {currentTab==='2' && <Tab2/>}
            </div>
        </section>
    )
}

export default SampleContent