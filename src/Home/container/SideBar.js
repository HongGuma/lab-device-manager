
import React,{useEffect, useState} from 'react';
import axios from "axios";

const ShowTextbox = () => {
    return <li><input className="add-box" type="textbox"/></li>
}

const DefaultEntry = ({list,event}) => {
    return(
        <ul className="sidebar-ul">
            {list.map((item)=>(
                <li onClick={()=>event(item)} key={item.id}><p>{item.name}</p></li>
            ))}
        </ul>
    )
}

const CheckboxEntry = ({list,event}) => {
    return(
        <ul className="sidebar-ul-chk">
            {list.map((item)=>(
                <li onClick={()=>event(item)} key={item.id}>
                    <input type="checkbox"/>
                    <p>{item.name}</p>
                </li>
            ))}
        </ul>
    )
}

const SideBar = ({currentURL,clickEvent}) => {
    const [showTextbox,setShowTextbox] = useState(null);
    const [showDefault,setShowDefault] = useState(true);
    const [showCheckbox,setShowCheckbox] = useState(false);
    const [entryList,setList] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const fetchList = async () => {
            try{
                setError(null);
                setList(null);
                setLoading(null);
                const res = await axios.get(currentURL);
                setList(res.data);
            }catch (e){
                setError(e);
            }
            setLoading(false);
        };
        fetchList();
    },[currentURL]);

    if(loading) return <div>로딩중...</div>
    if(error) return <div>error! 관리자에게 문의하세요</div>
    if(!entryList) return  null;

    function onClickAdd(){
        console.log("항목추가!");
        setShowTextbox(!showTextbox);

    }
    function onClickRemove(){
        console.log("항목삭제!");
        setShowCheckbox(!showCheckbox);
        setShowDefault(!showDefault);
    }

    return (
        <section className="sidebar">
            <div className="inner">
                {showDefault && <DefaultEntry list={entryList} event = {clickEvent}/>}
                {showCheckbox && <CheckboxEntry list={entryList} event = {clickEvent}/>}
                <ul className="sidebar-ul">
                    {showTextbox && <ShowTextbox/>}
                </ul>
            </div>
            <div className="add-btn">
                <p onClick={()=>onClickAdd()}>+항목추가</p>
                <p onClick={()=>onClickRemove()}>-항목삭제</p>
            </div>
        </section>
    );

}

export default SideBar;

