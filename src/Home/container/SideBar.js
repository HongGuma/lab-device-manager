/**
*@title 사이드바 모듈
*@date 2021-08-25
*@author 홍수희
*@desc 각 페이지에 공통부분인 사이드바 기능
*@etc(change)
*/
import React,{useEffect, useState} from 'react';
import axios from "axios";

/**
 *
 * @param enterEvent :키 입력 이벤트
 * @param inText :textbox 텍스트 입력 이벤트
 * @returns {JSX.Element}
 * @constructor 항목추가 버튼 클릭시 나오는 input
 */
const InsertEntry = ({enterEvent,inText,onClickEvent}) => {
    return (
        <li>
            <input className="add-box" type="textbox" onKeyPress={enterEvent} onChange={inText}/>
            <p onClick={onClickEvent}>추가</p>
        </li>
    )
}

/**
 *
 * @param list :entry list
 * @param event :아이템 클릭 이벤트
 * @returns {JSX.Element}
 * @constructor : 기본으로 출력하는 비품 항목 리스트
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
 * @param list :항목 리스트
 * @param onCheckedSingle :체크박스 개별 클릭 이벤트
 * @param onCheckedAll :체크박스 전체 클릭 이벤트
 * @param removeEvent :삭제 버튼 클릭 이벤트
 * @param checkedItems
 * @param allChecked
 * @returns {JSX.Element}
 * @constructor :-항목삭제 버튼 클릭시 출력되는 ul
 */
const RemoveEntry = ({list, onCheckedSingle, onCheckedAll, removeEvent, checkedItems, allChecked}) => {
    const [bCheck,setChecked] = useState(false);
    const allCheckHandler = () => setChecked(!allChecked);
    const singleCheckHandler = (e,item) =>{
        setChecked(!bCheck);
        onCheckedSingle(e.target.checked,item);
    }
    useEffect(()=>allCheckHandler,[allChecked]);
    return(
        <ul className="sidebar-ul-chk">
            <li>
                <label>
                    <label htmlFor="total">
                        <input type="checkbox"
                               name="total"
                               onChange={(e) => onCheckedAll(e.target.checked) }/>
                    </label>
                    <p>전체</p>
                </label>
            </li>
            {list.map((item)=>(
                <li key={item.id}>
                    <label>
                        <label htmlFor={item.id}>
                            <input type="checkbox"
                                   onChange={(e)=> singleCheckHandler(e,item.id)}
                                   checked={checkedItems.has(item.id)}/>
                        </label>
                        <p>{item.name}</p>
                    </label>
                </li>
            ))}
            <li onClick={removeEvent}><p>삭제</p></li>
        </ul>
    )
}

const AddBtn = ({openAdd,openRemove}) => {
    return (
        <div className="add-btn">
            <p onClick={()=>openAdd()}>+항목추가</p>
            <p onClick={()=>openRemove()}>-항목삭제</p>
        </div>
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
    const [isInsert,setInsert] = useState(null); // 항목 추가 버튼 클릭 여부
    const [isDefault,setDefault] = useState(true); // 기본 entry list 출력 여부
    const [isRemove,setRemove] = useState(false); // 항목 삭제 버튼 클릭 여부
    const [doneInsert,setDoneInsert] = useState(false); //항목 추가 완료 여부
    const [doneRemove,setDoneRemove] = useState(false); //항목 삭제 완료 여부
    const [entryList,setList] = useState(null); //항목 리스트
    const [loading,setLoading] = useState(false); // 로딩 여부
    const [error,setError] = useState(null); // 에러 여부
    const [entryName,setName] = useState(null); //항목 이름 리스트
    const [checkedItems,setCheckedItems] = useState(new Set()); //체크박스 체크 여부 set
    const [isAllChecked,setAllChecked] = useState(false); //체크박스 체크 여부 set
    const [btnToggle,setOpenBtn] = useState(false);//추가,삭제 버튼 출력 여부
    const insertURL = 'http://210.218.217.110:3103/api/getInsertEntry.php';
    const deleteURL = 'http://210.218.217.110:3103/api/getDeleteEntry.php';
    //초기 항목 데이터 불러오기
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
            setDoneInsert(false);
            setDoneRemove(false);
        };
        fetchList();
    },[currentURL, doneInsert, doneRemove]);
    useEffect(()=>{
        if(sessionStorage.getItem('name')!==null){
            setOpenBtn(true);
        }
    },[sessionStorage.getItem('id')])

    if(loading) return <div>로딩중...</div>
    if(error) return <div>error! 관리자에게 문의하세요</div>
    if(!entryList) return  null;

    //항목추가 버튼 클릭시
    function openAdd(){
        setInsert(!isInsert);
        setDefault(true);
        setRemove(false);
    }
    //항목삭제 버튼 클릭시
    function openRemove(){
        setRemove(!isRemove);
        setDefault(!isDefault);
        setInsert(false);
        checkedItems.clear();
        setCheckedItems(checkedItems);
    }
    //항목추가 후 엔터 누를시
    function inputEnter(event){
        if(event.key === "Enter"){
            // console.log("enter : "+entryName);
            if(entryName.length > 0){
                axios.get(insertURL+'?table='+tableName+'&entry_name='+entryName)
                    .then((res)=> {
                        // console.log(res)
                    });
            }
            setDoneInsert(true);
        }
    }
    //항목추가 후 '추가' 버튼 누를시
    function onClickInsert(){
        if(entryName.length > 0){
            axios.get(insertURL+'?table='+tableName+'&entry_name='+entryName)
                .then((res)=> {
                    // console.log(res)
                });
        }
        setDoneInsert(true);
    }
    //삭제 버튼 누를시
    async function onClickRemove(){
        // console.log(checkedItems);
        for(let id of checkedItems){    //checkedItems에 있는 id를 하나씩 꺼낸다.
            const cnt = await axios.get(deleteURL+'?table='+tableName+'&entry_id='+id);  //선택한 entry_id와 이어진 equipment가 있는지 확인한다.
            if(cnt.data <= 0) { //없으면 삭제 진행
                await axios.get(deleteURL + '?table=' + tableName + '&item_id=' + id)
                    .then((res) => {
                        // console.log(res)
                    });
            }
        }
        setDoneRemove(true);
        setRemove(false);
        setDefault(true);
    }
    //항목추가 컴포넌트 textbox에 입력한 텍스트 entryName변수에 저장
    const inputText = (e) => {
        setName(e.target.value);
    }
    //체크박스 개별 선택, true면 id를 checkedItems에 저장 (하나씩 클릭할때) *(isChecked : checkbox에서 받아온 checked, id : checkbox에서 받아온 item.id)
    const oneClickCheck = (isChecked, id) => {
        if(isChecked){
            checkedItems.add(id);
            setCheckedItems(checkedItems);
        }else if(!isChecked && checkedItems.has(id)){
            checkedItems.delete(id);
            setCheckedItems(checkedItems);
        }
        // console.log(checkedItems);
    }
    //체크박스 전체 선택
    const allClickCheck = (isChecked) => {
        if(isChecked){
            entryList.map((item)=>(
                checkedItems.add(item.id)
            ));
            setCheckedItems(checkedItems);
            setAllChecked(true);
        }else{
            checkedItems.clear();
            setCheckedItems(checkedItems);
            setAllChecked(false);
        }
    }


    return (
        <section className="sidebar">
            <div className="inner">
                {isDefault && <DefaultEntry list={entryList} event = {clickEvent}/>}
                {isRemove && <RemoveEntry list={entryList} onCheckedSingle={oneClickCheck} removeEvent={onClickRemove} onCheckedAll={allClickCheck} checkedItems={checkedItems}/>}
                <ul className="sidebar-ul">
                    {isInsert && <InsertEntry enterEvent={inputEnter} inText={inputText} onClickEvent={onClickInsert}/>}
                </ul>
            </div>
            {btnToggle && <AddBtn openAdd={openAdd} openRemove={openRemove}/>}
        </section>
    );

}

export default SideBar;

