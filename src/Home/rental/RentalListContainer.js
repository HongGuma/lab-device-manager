/**
*@title
*@date 21-08-04
*@author
*@desc
*@etc(change)
*/

import React, {useEffect, useState} from "react";
import axios from "axios";

const RentalListContainer = () =>{
    const tit = ['번호','품명','대여자','소속','위치','대여 날짜'];
    const URL = 'http://210.218.217.110:3103/api/postRental.php';
    const [list,setList] = useState(null);//사용자에게 보여질 리스트 (반납 완료된 아이템 출력 안함)
    const [error,setError] = useState(null); //에러 여부
    const [loading,setLoading] = useState(null); //로딩 여부
    useEffect(()=>{
        const fetchList = async () => {
            try{
                setError(null);
                setList(null);
                setLoading(null);
                const res = await axios.post(URL,{param:'select'});
                setList(res.data);
            }catch (e){
                setError(e);
            }
            setLoading(false);
        };
        fetchList();
    },[]);
    if(loading) return <div>로딩중...</div>
    if(error) return <div>error! 관리자에게 문의하세요</div>
    if(!list) return  null;
    return (
        <div className="rental current-cont">
            <section className="current-inner">
                <div className="tit-txt">
                    <p>대여현황</p>
                </div>
                <div className="current-body">
                    <div className="item">
                        <ul className="item-ul">
                            {tit.map((name,idx) => (
                                <li key ={idx}>
                                    <p>{name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="item">
                        {list.map((item,idx)=> (
                            <ul className="item-ul" key={item.id}>
                                <li>{idx+1}</li>
                                <li>{item.equipment_name}</li>
                                <li>{item.name}</li>
                                <li>{item.belong}</li>
                                <li>{item.position}</li>
                                <li>{item.borrow_date}</li>
                            </ul>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );

}

export default RentalListContainer;