/**
*@title 연구실 페이지 본문 출력 
*@date 21-08-18
*@author 홍수희
*@desc 
*@etc(change)
*/

import React, {useEffect, useState} from 'react';
import axios from "axios";

/**
 *
 * @param clickEvent :추가하기 버튼 클릭 이벤트
 * @param changeHandler :input 데이터 핸들러
 * @returns {JSX.Element}
 * @constructor +추가 버튼 클릭시 나오는 form
 */
const InsertItem = ({clickEvent, changeHandler}) => {
    return(
        <form onSubmit={clickEvent}>
            <ul className="body-ul">
                <li>.</li>
                <li><input name="name" type="textbox" onChange={changeHandler}/></li>
                <li><input name="user" type="textbox" onChange={changeHandler}/></li>
                <li>
                    <select name="state" onChange={changeHandler}>
                        <option value="사용중">사용중</option>
                        <option value="사용안함">사용안함</option>
                    </select>
                </li>
                <li><input name="position" type="textbox" onChange={changeHandler}/></li>
                <li>
                    <select name="quality" onChange={changeHandler}>
                        <option value="상">상</option>
                        <option value="중">중</option>
                        <option value="하">하</option>
                    </select>
                </li>
                <li><input name="manager" type="textbox" onChange={changeHandler}/></li>
                <li>.</li>
            </ul>
            <ul>
                <li onClick={clickEvent}>
                    <p>추가 하기</p>
                </li>
            </ul>
        </form>
    )
}
/**
 *
 * @param itemList :비품 리스트
 * @param titleList :table head에 해당하는 부분
 * @returns {JSX.Element}
 * @constructor :비품리스트 기본으로 보여지는 section
 */
const DefaultItem = ({itemList,titleList}) => {
    return(
        <section>
            <div className="cont-head">
                <ul className="head-ul">
                    {titleList.map((name,idx) => (
                        <li key ={idx}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="cont-body">
                {itemList.map((item) => (
                    <ul className="body-ul" key={item.id}>
                        <li>{item.id}</li>
                        <li>{item.name}</li>
                        <li>{item.user}</li>
                        <li>{item.state}</li>
                        <li>{item.position}</li>
                        <li>{item.quality}</li>
                        <li>{item.manager}</li>
                        <li>{item.timestamp}</li>
                    </ul>
                ))}
            </div>
        </section>
    )
}
/**
 *
 * @param itemList :비품 리스트
 * @param titleList :table head에 해당하는 부분
 * @param onCheckSingle :체크박스 개별 클릭 이벤트
 * @param clickEvent :삭제하기 버튼 클릭 이벤트
 * @returns {JSX.Element}
 * @constructor :-삭제 버튼 클릭시 출력되는 section
 */
const DeleteItem = ({itemList,titleList, onCheckSingle, clickEvent}) => {
    return(
        <section>
            <div className="cont-head">
                <ul className="head-ul">
                    <li>
                        <p>전체</p>
                        <label>
                            <label htmlFor="total"><input type="checkbox"/></label>
                        </label>
                    </li>
                    {titleList.map((name,idx) => (
                        <li key ={idx}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="cont-body">
                {itemList.map((item) => (
                    <ul className="body-ul" key={item.id}>
                        <li><input type="checkbox" onChange={(e)=>onCheckSingle(e,item.id)}/></li>
                        <li>{item.id}</li>
                        <li>{item.name}</li>
                        <li>{item.user}</li>
                        <li>{item.quality}</li>
                        <li>{item.position}</li>
                        <li>{item.state}</li>
                        <li>{item.manager}</li>
                        <li>{item.timestamp}</li>
                    </ul>
                ))}
                <ul>
                    <li onClick={clickEvent}><p>삭제하기</p></li>
                </ul>
            </div>
        </section>
    )
}

const RemoveItem = ({itemList,titleList}) => {
    return(
        <section>
            <div className="cont-head">
                <ul className="head-ul">
                    {titleList.map((name,idx) => (
                        <li key ={idx}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="cont-body">
                {itemList.map((item) => (
                    <ul className="body-ul" key={item.id}>
                        <li>{item.id}</li>
                        <li><input name="name" type="textbox" value={item.name}/></li>
                        <li><input name="user" type="textbox" value={item.user}/></li>
                        <li>
                            <select name="state" value={item.state}>
                                <option value="사용중">사용중</option>
                                <option value="사용안함">사용안함</option>
                            </select>
                        </li>
                        <li><input name="position" type="textbox" value={item.position}/></li>
                        <li>
                            <select name="quality" value={item.quality}>
                                <option value="상">상</option>
                                <option value="중">중</option>
                                <option value="하">하</option>
                            </select>
                        </li>
                        <li><input name="manager" type="textbox" value={item.manager}/></li>
                        <li>{item.timestamp}</li>
                    </ul>
                ))}
            </div>
        </section>
    )
}

const OfficeContent = ({entryID,entryName}) => {
    let currentId = entryID.toString();
    const tit = ['번호','품명','사용자','상태','위치','품질','관리자','마지막 수정시간'];
    const [list,setList] = useState(null);
    const [num,setNum] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [isInsert,setInsert] = useState(false);
    const [isDefault,setDefault] = useState(true);
    const [isDelete,setDelete] = useState(false);
    const [isRemove,setRemove] = useState(false);
    const [checkedItems,setCheckedItems] = useState(new Set());
    const [inputItems,setItems] = useState({
        name:'',
        user:'',
        state:'사용중',
        position:'',
        quality:'상',
        manager:'',
    })
    const crrentURL = 'http://210.218.217.110:3103/api/getOfficeData.php';
    const insertURL = 'http://210.218.217.110:3103/api/getInsertEquipment.php';
    const deleteURL = 'http://210.218.217.110:3103/api/getDeleteEquipment.php';

    useEffect(()=>{
        const fetchList = async () => {
            try{
                setError(null);
                setList(null);
                setLoading(null);
                const res = await axios.get(crrentURL+'?parm=2&entry_id='+currentId); //equipment 불러오는 axios
                const res2 = await axios.get(crrentURL+'?parm=4&entry_id='+currentId); //count 불러오는 axios
                setList(res.data);
                setNum(res2.data);
            }catch (e){
                setError(e);
            }
            setLoading(false);
        };
        fetchList();
    },[currentId, entryID]);
    if(loading) return <div>로딩중...</div>
    if(error) return <div>error! 관리자에게 문의하세요</div>
    if(!list) return  null;

    const {name,user,state,position,quality,manager} = inputItems;


    //+추가 버튼 누를시
    function openInsert(){
        setInsert(!isInsert);
        setDefault(true);
        setDelete(false);
    }
    //-삭제 버튼 누를시
    function openDelete(){
        setInsert(false);
        setDefault(!isDefault);
        setDelete(!isDelete);
        setRemove(false);
    }
    //o수정 버튼 누를시
    function openRemove(){
        setRemove(!isRemove);
        setDefault(!isDefault);
        setDelete(false);
        setInsert(false);
    }
    //input box에서 받아온 값 inpuItems 배열에 넣음
    function inputHandler(e){
        const {name,value} = e.target;
        setItems({...inputItems, [name]:value});
    }
    //추가하기 버튼 누를시
    function onClickInsert(){
        const parms = 'name='+name+'&user='+user+'&state='+state+'&position='+position+'&quality='+quality+'&manager='+manager;
        axios.get(insertURL+'?table=office&entry_id='+entryID+'&'+parms)
            .then((res)=>console.log(res));
        window.location.reload();
        setInsert(false);
    }
    //삭제하기 버튼 누를시
    async function onClickRemove(){
        for(let id of checkedItems){    //checkedItems에 있는 id를 하나씩 꺼낸다.
            await axios.get(deleteURL + '?table=office&item_id=' + id)
                .then((res) => console.log(res));
        }
        window.location.reload();
        alert('삭제 완료');
    }
    //체크박스 클릭 여부
    const oneClickCheck = (isChecked, id) => {
        if(isChecked){
            checkedItems.add(id);
            setCheckedItems(checkedItems);
        }else if(!isChecked && checkedItems.has(id)){
            checkedItems.delete(id);
            setCheckedItems(checkedItems);
        }
    }

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
                    <p onClick={openInsert}>+추가</p>
                    <p onClick={openRemove}>◎수정</p>
                    <p onClick={openDelete}>-삭제</p>
                </div>
            </div>
            <div className="container-cont">
                {isDefault && <DefaultItem itemList={list} titleList={tit}/> }
                {isDelete && <DeleteItem itemList={list} titleList={tit} onCheckSingle={oneClickCheck} clickEvent={onClickRemove}/> }
                {isRemove && <RemoveItem itemList={list} titleList={tit}/> }
                {isInsert && <InsertItem list={list} changeHandler={inputHandler} clickEvent={onClickInsert}/> }
            </div>
        </section>

    );

}

export default OfficeContent;