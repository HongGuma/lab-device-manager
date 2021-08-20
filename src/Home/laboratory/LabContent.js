/**
 *@title 연구실 페이지 본문 출력
 *@date 21-08-18
 *@author 홍수희
 *@desc
 *@etc(change)
 */

import React, {useEffect, useState} from 'react';
import axios from "axios";


const LabContent = ({entryID,entryName}) => {
    // let currentId = entryID.toString();
    // const tit = ['번호','품명','사용자','상태','위치','품질','관리자','마지막 수정시간'];
    // const option = [
    //     {value:0, label:'사용안함'},
    //     {value:1, label:'사용중'}
    // ];
    // const [list,setList] = useState(null);
    // const [num,setNum] = useState(null);
    // const [loading,setLoading] = useState(false);
    // const [error,setError] = useState(null);
    //
    // useEffect(()=>{
    //     const fetchList = async () => {
    //         try{
    //             setError(null);
    //             setList(null);
    //             setLoading(null);
    //             const res = await axios.get('http://210.218.217.110:3103/api/getOfficeData.php?parm=equipment&entry_id='+currentId);
    //             const res2 = await axios.get('http://210.218.217.110:3103/api/getOfficeData.php?parm=count&entry_id='+currentId);
    //             setList(res.data);
    //             setNum(res2.data);
    //         }catch (e){
    //             setError(e);
    //         }
    //         setLoading(false);
    //     };
    //     fetchList();
    // },[currentId, entryID]);
    //
    // if(loading) return <div>로딩중...</div>
    // if(error) return <div>error! 관리자에게 문의하세요</div>
    // if(!list) return  null;


    return (
        <section className="container">
            <div className="container-tit">
                <div className="tit-txt">
                    <p>{entryName}</p>
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
                        {/*{tit.map((name,idx) => (*/}
                        {/*    <li key ={idx}>*/}
                        {/*        <p>{name}</p>*/}
                        {/*    </li>*/}
                        {/*))}*/}
                    </ul>
                </div>
                <div className="cont-body">
                    {/*{list.map((item) => (*/}
                    {/*    <ul className="body-ul" key={item.id}>*/}
                    {/*        <li><input type="checkbox"/></li>*/}
                    {/*        <li>{item.id}</li>*/}
                    {/*        <li>{item.name}</li>*/}
                    {/*        <li>{item.user}</li>*/}
                    {/*        <li>{item.quality}</li>*/}
                    {/*        <li>{item.position}</li>*/}
                    {/*        <li>{item.state}</li>*/}
                    {/*        <li>{item.manager}</li>*/}
                    {/*        <li>{item.timestamp}</li>*/}
                    {/*    </ul>*/}
                    {/*))}*/}
                </div>

            </div>
        </section>

    );

}

export default LabContent;