/**
*@title
*@date 21-08-05
*@author
*@desc
*@etc(change)
*/

import React from 'react';
import Select from 'react-select';

const ContentContainer =() => {
    const tit = ['전체','번호','품명','사용자','상태','위치','품질','관리자','마지막 수정시간'];
    const option = [
        {value:0, label:'사용안함'},
        {value:1, label:'사용중'}
    ]

    return (
        <div className="content-cont">
            <ul className="tit-ul">
                {tit.map((name,idx) => (
                    <li key ={idx}>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>
            <ul className="cont-ul">
                <li><input type="checkbox"/></li>
                <li>1</li>
                <li>의자1</li>
                <li>강감찬</li>
                <li>
                    <Select options={option} defaultValue = {option[0]}/>
                </li>
                <li>303호</li>
                <li>
                    <select>
                        <option value="0">좋음</option>
                        <option value="1">보통</option>
                        <option value="2">나쁨</option>
                    </select>
                </li>
                <li>홍길동</li>
                <li>2021-7-22 15:22</li>
            </ul><ul className="cont-ul">
            <li><input type="checkbox"/></li>
            <li>1</li>
            <li>의자1</li>
            <li>강감찬</li>
            <li>
                <select>
                    <option value="online">사용중</option>
                    <option value="offline">사용안함</option>
                </select>
            </li>
            <li>303호</li>
            <li>
                <select>
                    <option value="best">좋음</option>
                    <option value="good">보통</option>
                    <option value="bad">나쁨</option>
                </select>
            </li>
            <li>홍길동</li>
            <li>2021-7-22 15:22</li>
        </ul><ul className="cont-ul">
            <li><input type="checkbox"/></li>
            <li>1</li>
            <li>의자1</li>
            <li>강감찬</li>
            <li>
                <select>
                    <option value="online">사용중</option>
                    <option value="offline">사용안함</option>
                </select>
            </li>
            <li>303호</li>
            <li>
                <select>
                    <option value="best">좋음</option>
                    <option value="good">보통</option>
                    <option value="bad">나쁨</option>
                </select>
            </li>
            <li>홍길동</li>
            <li>2021-7-22 15:22</li>
        </ul><ul className="cont-ul">
            <li><input type="checkbox"/></li>
            <li>1</li>
            <li>의자1</li>
            <li>강감찬</li>
            <li>
                <select>
                    <option value="online">사용중</option>
                    <option value="offline">사용안함</option>
                </select>
            </li>
            <li>303호</li>
            <li>
                <select>
                    <option value="best">좋음</option>
                    <option value="good">보통</option>
                    <option value="bad">나쁨</option>
                </select>
            </li>
            <li>홍길동</li>
            <li>2021-7-22 15:22</li>
        </ul><ul className="cont-ul">
            <li><input type="checkbox"/></li>
            <li>1</li>
            <li>의자1</li>
            <li>강감찬</li>
            <li>
                <select>
                    <option value="online">사용중</option>
                    <option value="offline">사용안함</option>
                </select>
            </li>
            <li>303호</li>
            <li>
                <select>
                    <option value="best">좋음</option>
                    <option value="good">보통</option>
                    <option value="bad">나쁨</option>
                </select>
            </li>
            <li>홍길동</li>
            <li>2021-7-22 15:22</li>
        </ul><ul className="cont-ul">
            <li><input type="checkbox"/></li>
            <li>1</li>
            <li>의자1</li>
            <li>강감찬</li>
            <li>
                <select>
                    <option value="online">사용중</option>
                    <option value="offline">사용안함</option>
                </select>
            </li>
            <li>303호</li>
            <li>
                <select>
                    <option value="best">좋음</option>
                    <option value="good">보통</option>
                    <option value="bad">나쁨</option>
                </select>
            </li>
            <li>홍길동</li>
            <li>2021-7-22 15:22</li>
        </ul><ul className="cont-ul">
            <li><input type="checkbox"/></li>
            <li>1</li>
            <li>의자1</li>
            <li>강감찬</li>
            <li>
                <select>
                    <option value="online">사용중</option>
                    <option value="offline">사용안함</option>
                </select>
            </li>
            <li>303호</li>
            <li>
                <select>
                    <option value="best">좋음</option>
                    <option value="good">보통</option>
                    <option value="bad">나쁨</option>
                </select>
            </li>
            <li>홍길동</li>
            <li>2021-7-22 15:22</li>
        </ul><ul className="cont-ul">
            <li><input type="checkbox"/></li>
            <li>1</li>
            <li>의자1</li>
            <li>강감찬</li>
            <li>
                <select>
                    <option value="online">사용중</option>
                    <option value="offline">사용안함</option>
                </select>
            </li>
            <li>303호</li>
            <li>
                <select>
                    <option value="best">좋음</option>
                    <option value="good">보통</option>
                    <option value="bad">나쁨</option>
                </select>
            </li>
            <li>홍길동</li>
            <li>2021-7-22 15:22</li>
        </ul><ul className="cont-ul">
            <li><input type="checkbox"/></li>
            <li>1</li>
            <li>의자1</li>
            <li>강감찬</li>
            <li>
                <select>
                    <option value="online">사용중</option>
                    <option value="offline">사용안함</option>
                </select>
            </li>
            <li>303호</li>
            <li>
                <select>
                    <option value="best">좋음</option>
                    <option value="good">보통</option>
                    <option value="bad">나쁨</option>
                </select>
            </li>
            <li>홍길동</li>
            <li>2021-7-22 15:22</li>
        </ul><ul className="cont-ul">
            <li><input type="checkbox"/></li>
            <li>1</li>
            <li>의자1</li>
            <li>강감찬</li>
            <li>
                <select>
                    <option value="online">사용중</option>
                    <option value="offline">사용안함</option>
                </select>
            </li>
            <li>303호</li>
            <li>
                <select>
                    <option value="best">좋음</option>
                    <option value="good">보통</option>
                    <option value="bad">나쁨</option>
                </select>
            </li>
            <li>홍길동</li>
            <li>2021-7-22 15:22</li>
        </ul><ul className="cont-ul">
            <li><input type="checkbox"/></li>
            <li>1</li>
            <li>의자1</li>
            <li>강감찬</li>
            <li>
                <select>
                    <option value="online">사용중</option>
                    <option value="offline">사용안함</option>
                </select>
            </li>
            <li>303호</li>
            <li>
                <select>
                    <option value="best">좋음</option>
                    <option value="good">보통</option>
                    <option value="bad">나쁨</option>
                </select>
            </li>
            <li>홍길동</li>
            <li>2021-7-22 15:22</li>
        </ul>
        </div>
    );

}

export default ContentContainer;