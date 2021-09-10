import React, {useState, useEffect} from "react";
import axios from "axios";

export default function PrintMainData({url}){
    let currentURL = '';
    let notyet = false;
    let print = true;
    if(url == null){
        notyet = true;
        print = false;
        currentURL = 'http://210.218.217.110:3103/api/getOfficeData.php';
    }else if(url.length < 1 ){
        notyet = false;
        print = true;
        currentURL = 'http://210.218.217.110:3103/api/getOfficeData.php';
    }
    else{
        notyet = false;
        print = true;
        currentURL = url;
    }

    const [list,setList] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const fetchList = async () => {
            try{
                setError(null);
                setList(null);
                setLoading(null);
                const res = await axios.get(currentURL+'?parm=3');
                setList(res.data);
            }catch (e){
                setError(e);
            }
            setLoading(false);
        };
        fetchList();
    },[currentURL, url]);

    if(loading) return <div>로딩중...</div>
    if(error) return <div>error! 관리자에게 문의하세요</div>
    if(!list) return  null;

    return(
        <div className="item">
            <ul>
                {notyet && <li><p>준비중 입니다.</p></li>}
                {print && list.map(item=>(
                    <li key={item.id}>
                        <p>{item.entry_name} ({item.item_count})</p>
                    </li>
                    )
                )}
            </ul>
        </div>
    );
}
