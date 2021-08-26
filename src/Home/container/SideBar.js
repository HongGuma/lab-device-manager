/**
*@title 사이드바 모듈
*@date 2021-08-25
*@author 홍수희
*@desc 각 페이지에 공통부분인 사이드바 기능
*@etc(change)
*/
import React,{useEffect, useState} from 'react';
import axios from "axios";

const InsertEntry = ({enterEvent,inText}) => {
    return (

            <li><input className="add-box" type="textbox" onKeyPress={enterEvent} onChange={inText}/></li>

    )
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
                    <input type="checkbox" name={item.id}/>
                    <p>{item.name}</p>
                </li>
            ))}
            <li>
                <input type="checkbox" name="total"/>
                <p>전체</p>
            </li>
        </ul>
    )
}
/**
 *
 * @param currentURL :상단바 버튼 클릭시 각 페이지에 맞는 api
 * @param clickEvent :항목 클릭 이벤트
 * @param tableName :각 페이지 entry 테이블 이름
 * @returns {JSX.Element|null}
 * @constructor 사이드바 출력하는 기능
 */
const SideBar = ({currentURL,clickEvent,tableName}) => {
    const [showTextbox,setShowTextbox] = useState(null);
    const [showDefault,setShowDefault] = useState(true);
    const [showCheckbox,setShowCheckbox] = useState(false);
    const [entryList,setList] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [entryName,setName] = useState(null);
    const insertURL = 'http://210.218.217.110:3103/api/getInsertData.php';

    useEffect(()=>{
        const fetchList = async () => {
            try{
                setError(null);
                setList(null);
                setLoading(null);
                const res = await axios.get(currentURL+'parm=1');
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
        setShowTextbox(!showTextbox);
        setShowDefault(true);
        setShowCheckbox(false);
    }
    function onClickRemove(){
        setShowCheckbox(!showCheckbox);
        setShowDefault(!showDefault);
        setShowTextbox(false);
    }
    const inputText = (e) => {
        setName(e.target.value);
    }
    function inputEnter(event){
        if(event.key === "Enter"){
            console.log("enter : "+entryName);
            axios.post(insertURL+'?table='+tableName+'&entry_name='+entryName)
                .then((res)=>console.log(res));
            setShowTextbox(false);
            window.location.reload()
        }
    }


    return (
        <section className="sidebar">
            <div className="inner">
                {showDefault && <DefaultEntry list={entryList} event = {clickEvent}/>}
                {showCheckbox && <CheckboxEntry list={entryList} event = {clickEvent}/>}
                <ul className="sidebar-ul">
                    {showTextbox && <InsertEntry enterEvent={inputEnter} inText={inputText}/>}
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

