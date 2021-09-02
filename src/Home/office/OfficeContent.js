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
                <li>{sessionStorage.getItem('name')}</li>
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
 * @param onCheckSingle
 * @returns {JSX.Element}
 * @constructor :비품리스트 기본으로 보여지는 section
 */
const DefaultItem = ({itemList,titleList, onCheckSingle}) => {
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
                        <li><input type="checkbox" onChange={(e)=>onCheckSingle(e.target.checked,item.id,item)}/></li>
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
const UpdateTest = ({item, titleList, clickEvnet, changeHandler}) => {
    const [inValue,setValue] = useState(item);
    function inputHandler(e){
        const {name,value} = e.target;
        setValue({...inValue, [name]:value});
        console.log(inValue);
    }
    return(
        <section>
            <ul>
                {titleList.map((name,idx) => (
                    <li key ={idx}>
                        <p>{name}</p>
                    </li>
                ))}
                <li> </li>
            </ul>
            <ul>
                <li>{item.id} </li>
                <li><input type="textbox" name="name" value={inValue.name} onChange={(e)=>inputHandler(e)}/></li>
                <li><input type="textbox" name="user" value={inValue.user} onChange={(e)=>inputHandler(e)}/></li>
                <li>
                    <select name="state" value={inValue.state} onChange={(e)=>inputHandler(e)}>
                        <option value="사용중">사용중</option>
                        <option value="사용안함">사용안함</option>
                    </select>
                </li>
                <li><input type="textbox" name="position" value={inValue.position} onChange={(e)=>inputHandler(e)}/></li>
                <li>
                    <select name="quality" value={inValue.quality} onChange={(e)=>inputHandler(e)}>
                        <option value="상">상</option>
                        <option value="중">중</option>
                        <option value="하">하</option>
                    </select>
                </li>
                <li><input type="textbox" name="manager" value={inValue.manager} onChange={(e)=>inputHandler(e)}/></li>
                <li>{item.timestamp}</li>
            </ul>
            <ul><li>수정하기</li></ul>
        </section>
    )
}
const UpdateItem = ({itemList,titleList, changeHandler}) => {
    return(
        <section className="update">
            <div className="cont-head">
                <ul className="head-ul">
                    {titleList.map((name,idx) => (
                        <li key ={idx}>
                            <p>{name}</p>
                        </li>
                    ))}
                    <li> </li>
                </ul>
            </div>
            <div className="cont-body">
                {itemList.map((item) => (
                    <ul className="body-ul" key={item.id}>
                        <li>{item.id}</li>
                        <li><input name="name" type="textbox" value={item.name} onChange={changeHandler}/></li>
                        <li><input name="user" type="textbox" value={item.user} onChange={changeHandler}/></li>
                        <li>
                            <select name="state" value={item.state} onChange={changeHandler}>
                                <option value="사용중">사용중</option>
                                <option value="사용안함">사용안함</option>
                            </select>
                        </li>
                        <li><input name="position" type="textbox" value={item.position} onChange={changeHandler}/></li>
                        <li>
                            <select name="quality" value={item.quality} onChange={changeHandler}>
                                <option value="상">상</option>
                                <option value="중">중</option>
                                <option value="하">하</option>
                            </select>
                        </li>
                        <li><input name="manager" type="textbox" value={sessionStorage.getItem('name')} onChange={changeHandler}/></li>
                        <li>{item.timestamp}</li>
                        <li><button>수정하기</button></li>
                    </ul>
                ))}
            </div>
        </section>
    )
}
const Btn = ({openIn,openUp,openDel}) => {
    return(
        <div className="add-btn">
            <p onClick={openIn}>+추가</p>
            <p onClick={openUp}>◎수정</p>
            <p onClick={openDel}>-삭제</p>
        </div>
    )
}

const OfficeContent = ({entryID,entryName}) => {
    let currentId = entryID.toString();
    const tit = ['자산번호','품명','상태','위치','발행일자','관리자','마지막 수정시간'];
    const [list,setList] = useState(null);
    const [num,setNum] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [isInsert,setInsert] = useState(false);
    const [isDefault,setDefault] = useState(true);
    const [isDelete,setDelete] = useState(false);
    const [isUpdate,setUpdate] = useState(false);
    const [upitem,setupitem] = useState(null);
    const [checkedItems,setCheckedItems] = useState(new Set());
    const [btnToggle,setOpenBtn] = useState(false);
    const [inputItems,setItems] = useState({
        name:'',
        user:'',
        state:'사용중',
        position:'',
        quality:'상',
        manager:sessionStorage.getItem('name'),
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

    useEffect(()=>{
        if(sessionStorage.getItem('name')!==null){
            setOpenBtn(true);
        }
    },[])
    if(loading) return <div>로딩중...</div>
    if(error) return <div>error! 관리자에게 문의하세요</div>
    if(!list) return  null;

    const {name,user,state,position,quality,manager} = inputItems;


    //+추가 버튼 누를시
    function openInsert(){
        setInsert(!isInsert);
        setDefault(true);
        setDelete(false);
        setUpdate(false);
    }
    //-삭제 버튼 누를시
    async function openDelete(){
        if(checkedItems.size > 0){
            for(let id of checkedItems){    //checkedItems에 있는 id를 하나씩 꺼낸다.
                await axios.get(deleteURL + '?table=office&item_id=' + id)
                    .then((res) => console.log(res));
            }
            window.location.reload();
            alert('삭제 완료');
        }else{
            alert('체크박스를 체크해주세요.')
        }
    }
    //o수정 버튼 누를시
    function openUpdate(){
        setUpdate(!isUpdate);
        setDefault(!isDefault);
        setInsert(false);
        setDelete(false);
    }
    //input box에서 받아온 값 inpuItems 배열에 넣음
    function inputHandler(e){
        const {name,value} = e.target;
        setItems({...inputItems, [name]:value});
        console.log(inputItems);
    }
    //추가하기 버튼 누를시
    function onClickInsert(){
        const parms = 'name='+name+'&user='+user+'&state='+state+'&position='+position+'&quality='+quality+'&manager='+manager;
        axios.get(insertURL+'?table=office&entry_id='+entryID+'&'+parms)
            .then((res)=>console.log(res));
        setInsert(false);

    }
    //체크박스 개별 클릭
    const oneClickCheck = (isChecked, id, item) => {
        if(isChecked){
            checkedItems.add(id);
            setupitem(item);
            setCheckedItems(checkedItems);
        }else if(!isChecked && checkedItems.has(id)){
            checkedItems.delete(id);
            setCheckedItems(checkedItems);
        }
    }
    //수정하기 버튼 누를시
    function onClickUpdate(){

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
                {btnToggle && <Btn openIn={openInsert} openDel={openDelete} openUp={openUpdate}/>}
            </div>
            <div className="container-cont">
                {isDefault && <DefaultItem itemList={list} titleList={tit} onCheckSingle={oneClickCheck}/> }
                {/*{isUpdate && <UpdateItem itemList={list} titleList={tit} changeHandler={inputHandler}/> }*/}
                {isUpdate && <UpdateTest item={upitem} titleList={tit} changeHandler={inputHandler} clickEvnet={onClickUpdate}/> }
                {isInsert && <InsertItem list={list} changeHandler={inputHandler} clickEvent={onClickInsert}/> }
            </div>
        </section>

    );

}

export default OfficeContent;