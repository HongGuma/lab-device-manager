/**
*@title 사이드바
*@date 21-08-17
*@author 홍수희
*@desc
*@etc(change)
*/
import React, {useEffect, useState} from 'react';
import axios from "axios";

const SideBarContainer = ({list}) => {
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
    //             const res = await axios.get(url);
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

    return(
        <ul>
            {/*{list.map((str,idx)=>(*/}
            {/*    <li key={idx}><p>{str}</p></li>*/}
            {/*))}*/}
        </ul>
    )


}

export default SideBarContainer;