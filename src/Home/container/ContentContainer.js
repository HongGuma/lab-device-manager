/**
*@title
*@date 21-08-05
*@author
*@desc
*@etc(change)
*/

import React, {useEffect, useState} from 'react';
import axios from "axios";
import Select from 'react-select';

const ContentContainer =({num}) => {
    const tit = ['전체','번호','품명','사용자','상태','위치','품질','관리자','마지막 수정시간'];
    const option = [
        {value:0, label:'사용안함'},
        {value:1, label:'사용중'}
    ]
    // const [list,setList] = useState(null);
    // const [loading,setLoading] = useState(false);
    // const [error,setError] = useState(null);
    //
    // useEffect(()=>{
    //     const fetchList = async () => {
    //         try{
    //             setError(null);
    //             setList(null);
    //             setLoading(null);
    //             const res = await axios.get(currentURL);
    //             setList(res.data);
    //         }catch (e){
    //             setError(e);
    //         }
    //         setLoading(false);
    //     };
    //     fetchList();
    // },[url]);
    //
    // if(loading) return <div>로딩중...</div>
    // if(error) return <div>error! 관리자에게 문의하세요</div>
    // if(!list) return  null;

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