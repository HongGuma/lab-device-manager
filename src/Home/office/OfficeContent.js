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
                <li> </li>
                <li><input name="asset_num" type="textbox" onChange={changeHandler}/></li>
                <li><input name="name" type="textbox" onChange={changeHandler}/></li>
                <li>
                    <select name="state" onChange={changeHandler}>
                        <option value="사용중">사용중</option>
                        <option value="사용안함">사용안함</option>
                    </select>
                </li>
                <li><input name="position" type="textbox" onChange={changeHandler}/></li>
                <li><input name="issue_date" type="textbox" onChange={changeHandler} placeholder="yyyy-mm-dd"/></li>
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
 * @param onCheckSingle :체크박스 하나만 선택시
 * @param onCheckAll :'전체' 체크박스 클릭시
 * @param checkedList :체크박스에 체크된 아이템들의 아이디 set
 * @param allChecked :전체선택 여부
 * @returns {JSX.Element}
 * @constructor :비품리스트 기본으로 보여지는 section
 */
const DefaultItem = ({itemList,titleList, onCheckSingle, onCheckAll, checkedList, allChecked}) => {
    const [bChecked,setChecked] = useState(false);
    const allCheckHandler = () => setChecked(!allChecked);
    const singleCheckHandler = (e,item) => {
        setChecked(!bChecked);
        onCheckSingle(e.target.checked,item)
    }
    useEffect(()=>allCheckHandler,[allChecked]);

    return(
        <section>
                <div className="cont-head">
                    <ul className="head-ul">
                        <li>
                            <label>
                                <p>전체</p>
                                <label htmlFor="total">
                                    <input
                                        type="checkbox"
                                        onChange={(e)=>onCheckAll(e.target.checked)}
                                        />
                                </label>
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
                            <li><input type="checkbox"
                                       onChange={(e)=>singleCheckHandler(e,item)}
                                       checked={checkedList.has(item.id)}
                                      /></li>
                            <li>{item.asset_num}</li>
                            <li>{item.name}</li>
                            <li>{item.state}</li>
                            <li>{item.position}</li>
                            <li>{item.issue_date}</li>
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
 * @param item :checkbox로 클릭한 아이템
 * @param titleList :표 머리글 리스트
 * @param setUpdate :수정 버튼 클릭 여부
 * @param setDefault :수정 버튼 클릭시 기본 화면 출력
 * @param setDoneUpdate :수정 완료 여부
 * @returns {JSX.Element}
 * @constructor 기본화면에서 체크박스 클릭후 수정 버튼 누르면 보여주는 화면
 */
const UpdateItem = ({item, titleList, setUpdate, setDefault, setDoneUpdate}) => {
    const [inValue,setValue] = useState({
        asset_num:item.asset_num,
        name:item.name,
        state:item.state,
        position:item.position,
        issue_date:item.issue_date,
        manager:sessionStorage.getItem('name'),
    });
    const {asset_num, name,state,position,issue_date,manager} = inValue;

    function inputHandler(e){
        const {name,value} = e.target;
        setValue({...inValue, [name]:value});
        // console.log(inValue);
    }
    async function onClickUpdate(){
        const updateURL = 'http://210.218.217.110:3103/api/postUpdateEquipment.php';
        await axios({
            method: 'POST',
            url: updateURL,
            data: {
                table:'office',
                asset_num: asset_num,
                name: name,
                state: state,
                position: position,
                issue_date: issue_date,
                manager: manager,
                column_id:item.id,
            },
            header: {'Content-Type': 'aplication/json'}
        }).then((res)=>{
            console.log(res);
        });
        setUpdate(false);
        setDefault(true);
        setDoneUpdate(true);
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
                <li><input type="textbox" name="asset_num" value={inValue.asset_num} onChange={(e)=>inputHandler(e)}/> </li>
                <li><input type="textbox" name="name" value={inValue.name} onChange={(e)=>inputHandler(e)}/></li>
                <li>
                    <select name="state" value={inValue.state} onChange={(e)=>inputHandler(e)}>
                        <option value="사용중">사용중</option>
                        <option value="사용안함">사용안함</option>
                        <option value="대여중">대여중</option>
                    </select>
                </li>
                <li><input type="textbox" name="position" value={inValue.position} onChange={(e)=>inputHandler(e)}/></li>
                <li><input type="textbox" name="issue_date" value={inValue.issue_date} onChange={(e)=>inputHandler(e)}/> </li>
                <li><input type="textbox" name="manager" value={inValue.manager} onChange={(e)=>inputHandler(e)}/></li>
                <li>{item.timestamp}</li>
            </ul>
            <ul><li onClick={onClickUpdate}>수정하기</li></ul>
        </section>
    )
}
/**
 *
 * @param openIn :추가하기 버튼 클릭이벤트
 * @param openUp :업데이트 버튼 클릭이벤트
 * @param openDel :삭제하기 버튼 클릭이벤트
 * @returns {JSX.Element}
 * @constructor 관리자 로그인시만 보이는 버튼 각 아이템 추가,수정,삭제 가능
 */
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
    let currentId = entryID.toString(); //현재 사이드바에서 클릭한 항목 id
    const tit = ['자산번호','품명','상태','위치','발행일자','관리자','마지막 수정시간']; //
    const [list,setList] = useState(null); //클릭한 항목을 item_id로 가지고 있는 equipment list
    const [num,setNum] = useState(null);//클릭한 항목을 item_id로 가지고 있는 equipment list의 개수
    const [loading,setLoading] = useState(false);//로딩여부
    const [error,setError] = useState(null);//에러여부
    const [isInsert,setInsert] = useState(false);//항목추가 버튼 클릭여부
    const [isDefault,setDefault] = useState(true);//아무것도 클릭 안했을때 제일 먼저 보이는 컴포넌트
    const [doneDelete,setDelete] = useState(false);//삭제 완료 여부
    const [doneInsert,setDoneInsert] = useState(false);//추가 완료 여부
    const [doneUpdate,setDoneUpdate] = useState(false);//수정 완료 여부
    const [isUpdate,setUpdate] = useState(false);//수정 버튼 클릭 여부
    const [updateItem,setupdateItem] = useState(null);//수정 하려고 체크박스 클릭한 item
    const [checkedItems,setCheckedItems] = useState(new Set());//체크박스 체크한 아이템 id set
    const [isAllChecked,setAllChecked] = useState(false); //체크박스 전체 체크 여부
    const [btnToggle,setOpenBtn] = useState(false);//추가,수정,삭제 버튼 출력 여부
    const [inputItems,setItems] = useState({ //데이터 입력시 사용하는 set
        asset_num:null,
        name:'-',
        state:'사용중',
        position:'-',
        issue_date:'-',
        manager:sessionStorage.getItem('name'),
    })
    const crrentURL = 'http://210.218.217.110:3103/api/getOfficeData.php'; //데이터 출력시 api url
    const insertURL = 'http://210.218.217.110:3103/api/postInsertEquipment.php'; //데이터 삽입시 api url
    const deleteURL = 'http://210.218.217.110:3103/api/getDeleteEquipment.php'; //데이터 삭제시 api url
    let session = sessionStorage.getItem('id');
    //entryId 바뀔때 마다 list 새로 가져오기
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
            setDelete(false);
            setDoneInsert(false);
            setDoneUpdate(false);
        };
        fetchList().then(r=>{});
    },[currentId, entryID, doneInsert,doneDelete, doneUpdate]);
    //랜더링 전 sesstion에서 name 받아오기
    useEffect(()=>{
        if(sessionStorage.getItem('name')!==null)
            setOpenBtn(true);
    },[session])

    if(loading) return <div>로딩중...</div>
    if(error) return <div>error! 관리자에게 문의하세요</div>
    if(!list) return  null;

    const {asset_num,name,state,position,issue_date,manager} = inputItems;

    //+추가 버튼 누를시 (추가 input 출력)
    function openInsert(){
        setInsert(!isInsert);
        setDefault(true);
        setUpdate(false);
    }
    //-삭제 버튼 누를시 (아이템 삭제)
    async function openDelete(){
        if(checkedItems.size > 0){
            for(let id of checkedItems){    //checkedItems에 있는 id를 하나씩 꺼낸다.
                await axios.get(deleteURL + '?table=office&item_id=' + id)
                    .then((res) => {
                        // console.log(res)
                    });
            }
            setDelete(true);
            setAllChecked(false);
            alert('삭제 완료');
        }else{
            alert('체크박스를 체크해주세요.')
        }
    }
    //o수정 버튼 누를시 (수정 input 출력)
    function openUpdate(){
        if(checkedItems.size>0 && checkedItems.size < 2){
            setUpdate(!isUpdate);
            setDefault(!isDefault);
            setInsert(false);
        }else if(checkedItems.size > 1){
            alert('하나만 체크해주세요');
        }
        else{
          alert('체크박스를 체크해주세요.');
        }
    }
    //input box에서 받아온 값 inpuItems 배열에 넣음
    function inputHandler(e){
        const {name,value} = e.target;
        setItems({...inputItems, [name]:value});
        // console.log(inputItems);
    }
    //'추가하기' 버튼 누를시 (아이템 수정)
    async function onClickInsert(){
        await axios({
            method: 'POST',
            url: insertURL,
            data: {
                table:'office',
                asset_num: asset_num,
                name: name,
                state: state,
                position: position,
                issue_date: issue_date,
                manager: manager,
                entry_id:entryID,
            },
            header: {
                'Content-Type': 'aplication/json'
            }
        }).then((res)=>{
            setItems({
                asset_num:null,
                name:'-',
                state:'사용중',
                position:'-',
                issue_date:'-',});
            // console.log(res);
        });

        setDoneInsert(true);
        // setInsert(false);
    }
    //체크박스 개별 클릭
    const onCheckSingle = (isChecked,item) => {
        if(isChecked){
            checkedItems.add(item.id);
            setupdateItem(item);
            setCheckedItems(checkedItems);
        }else if(!isChecked && checkedItems.has(item.id)){
            checkedItems.delete(item.id);
            setCheckedItems(checkedItems);
        }
        // console.log(checkedItems);
    }
    //체크박스 전체 클릭
    const onCheckAll = (isChecked) => {
        if(isChecked){
            list.map((item)=>(
                checkedItems.add(item.id)
            ));
            setCheckedItems(checkedItems);
            setAllChecked(true);
        }else{
            checkedItems.clear();
            setCheckedItems(checkedItems);
            setAllChecked(false);
        }
        // console.log(checkedItems);
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
                {isDefault && <DefaultItem itemList={list} titleList={tit} onCheckSingle={onCheckSingle} onCheckAll={onCheckAll} checkedList={checkedItems} allChecked={isAllChecked}/> }
                {/*{isUpdate && <UpdateItem itemList={list} titleList={tit} changeHandler={inputHandler}/> }*/}
                {isUpdate && <UpdateItem item={updateItem} titleList={tit} changeHandler={inputHandler} setUpdate={setUpdate} setDefault={setDefault} setDoneUpdate={setDoneUpdate}/> }
                {isInsert && <InsertItem list={list} changeHandler={inputHandler} clickEvent={onClickInsert}/> }
            </div>
        </section>

    );

}

export default OfficeContent;