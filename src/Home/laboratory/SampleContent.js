import React from "react";

/**
*@title 샘플 관리 페이지 본문
*@date 2021-09-27
*@author 홍수희
*@desc 사이드바 클릭시 해당 아이템에 맞는 데이터 컬럼 출력하는 페이지
*@etc(change)
*/

const SampleContent = ({entryName}) => {
    const titleList = ['고유번호', '가명', '참여일', '성별', '나이', '참여취소일', '구분','검체 2차적 사용','비고','종류 및 수량','보존기간','2차적 제공','2차 식별 정보','리포트','리포트ID','업데이트 신청자','질병명','질병코드','질병코드','임신주수','가족ID','가족관계','질환구분','비고']

    function onClickOnOff(item){

    }

    return(
        <section className="sample container">
            <div className="container-tit">
                <div className="tit-txt">
                    <p className="0">{entryName}</p>
                    <p className="1">하위 항목1</p>
                    <p className="2">하위 항목2</p>
                    <p className="3">하위 항목3</p>
                    <p className="4">하위 항목4</p>
                </div>
                <div className="cont-cnt">
                    <p>총</p>
                    <p></p>
                    <p>개</p>
                </div>
            </div>
            <div className="sample container-cont">
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
            </div>
        </section>
    )
}

export default SampleContent