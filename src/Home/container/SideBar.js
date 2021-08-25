/**
*@title 사이드바 모듈
*@date 2021-08-25
*@author 홍수희
*@desc 각 페이지에 공통부분인 사이드바 기능
*@etc(change)
*/
import React,{useEffect, useState} from 'react';
import axios from "axios";

const InsertEntry = () => {
    let text = '';
    const inputText = (e) => {
        text = e.target.value;
    }
    function enter(event){
        if(event.key === "Enter"){
            console.log("enter : "+text);
        }
    }
    return <li><input className="add-box" type="textbox" onKeyPress={enter} onChange={inputText}/></li>
}
/**
 *
 * @param list
 * @param event
 * @returns {JSX.Element}
 * @constructor : 기본으로 출력하는 비품 항목 리스트, list = entry list, event = 아이템 클릭 이벤트
 */
const DefaultEntry = ({list,event}) => {
    return(
        <ul className="sidebar-ul">
            {list.map((item)=>(
                <li onClick={()=>event(item)} key={item.id}><p>{item.name}</p></li>
            ))}
        </ul>
    )
}
/**
 *
 * @param list
 * @param event
 * @returns {JSX.Element}
 * @constructor : 항목삭제 버튼 클릭시 출력하는 비품 항목 리스트
 */
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
/**
 *
 * @param currentURL :상단바 버튼 클릭시 각 페이지에 맞는 db url
 * @param clickEvent :항목 클릭 이벤트
 * @returns {JSX.Element|null}
 * @constructor 사이드바 출력하는 기능
 */
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
        setShowDefault(true);
        setShowCheckbox(false);
    }
    function onClickRemove(){
        console.log("항목삭제!");
        setShowCheckbox(!showCheckbox);
        setShowDefault(!showDefault);
        setShowTextbox(false);
    }

    return (
        <section className="sidebar">
            <div className="inner">
                {showDefault && <DefaultEntry list={entryList} event = {clickEvent}/>}
                {showCheckbox && <CheckboxEntry list={entryList} event = {clickEvent}/>}
                <ul className="sidebar-ul">
                    {showTextbox && <InsertEntry/>}
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

