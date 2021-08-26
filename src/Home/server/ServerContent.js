

import React, {useEffect, useState} from 'react';
import axios from "axios";


const ServerContent = ({entryId,entryName}) => {
    let currentId = entryId.toString();
    const tit = ['번호','품명','용량','교체 날짜','A/S 날짜','기타','마지막 수정시간'];
    const [list,setList] = useState(null);
    const [num,setNum] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const fetchList = async () => {
            try{
                setError(null);
                setList(null);
                setLoading(null);
                const res = await axios.get('http://210.218.217.110:3103/api/getDiskData.php?parm=2&entry_id='+currentId);
                const res2 = await axios.get('http://210.218.217.110:3103/api/getDiskData.php?parm=4&entry_id='+currentId);
                setList(res.data);
                setNum(res2.data);
            }catch (e){
                setError(e);
            }
            setLoading(false);
        };
        fetchList();
    },[currentId, entryId]);

    if(loading) return <div>로딩중...</div>
    if(error) return <div>error! 관리자에게 문의하세요</div>
    if(!list) return  null;


    return (
        <section className="container">
            <div className="container-tit">
                <div className="tit-txt">
                    <p>{entryName}</p>
                </div>
                <div className="cont-cnt">
                    <p>총</p>
                    <p>{num}</p>
                    <p>개</p>
                </div>
                <div className="add-btn">
                    <p >+추가</p>
                    <p >+수정</p>
                    <p >-삭제</p>
                </div>
            </div>
            <div className="container-cont">
                <div className="cont-head">
                    <ul className="head-ul">
                        <li>
                            <p>전체</p>
                            <a><input type="checkbox"/></a>
                        </li>
                        {tit.map((name,idx) => (
                            <li key ={idx}>
                                <p>{name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="cont-body">
                    {list.map((item) => (
                        <ul className="body-ul" key={item.disk_id}>
                            <li><input type="checkbox"/></li>
                            <li>{item.disk_id}</li>
                            <li>{item.disk_name}</li>
                            <li>{item.volume}</li>
                            <li>{item.change_date}</li>
                            <li>{item.AS_date}</li>
                            <li>{item.etc}</li>
                            <li>{item.timestamp}</li>
                        </ul>
                    ))}
                </div>

            </div>
        </section>

    );

}

export default ServerContent;