

import React, {useEffect, useState} from 'react';
import axios from "axios";


const InsertItem = ({clickEvent, changeHandler}) => {
    return(
        <form onSubmit={clickEvent}>
            <ul className="body-ul">
                <li></li>
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
    function onClickUpdate(){
        const parms = 'asset_num='+asset_num+'&name='+name+'&state='+state+'&position='+position+'&issue_date='+issue_date+'&manager='+manager+'&column_id='+item.id;

        axios.get('http://210.218.217.110:3103/api/getUpdateEquipment.php?table=office&'+parms)
            .then((res)=> {
                console.log(res)
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

const Btn = ({openIn,openUp,openDel}) => {
    return(
        <div className="add-btn">
            <p onClick={openIn}>+추가</p>
            <p onClick={openUp}>◎수정</p>
            <p onClick={openDel}>-삭제</p>
        </div>
    )
}

const ServerContent = ({entryId,entryName}) => {
    let currentId = entryId.toString();
    const tit = ['서버이름','IP-address','SSH-PROT','CPU(core)','disk','memory','관리자','마지막 수정시간'];
    const [list,setList] = useState(null);
    const [num,setNum] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const fetchList = async () => {
            try{
                setError(null);
                setList(null);
                setLoading(null);
                const res = await axios.get('http://210.218.217.110:3103/api/getServerData.php?parm=2&entry_id='+currentId);
                const res2 = await axios.get('http://210.218.217.110:3103/api/getServerData.php?parm=4&entry_id='+currentId);
                setList(res.data);
                setNum(res2.data);
            }catch (e){
                setError(e);
            }
            setLoading(false);
        };
        fetchList();
    },[currentId, entryId]);

    if(loading) return <div>로딩중...</div>
    if(error) return <div>error! 관리자에게 문의하세요</div>
    if(!list) return  null;


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
                        {tit.map((name,idx) => (
                            <li key ={idx}>
                                <p>{name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="cont-body">
                    {list.map((item) => (
                        <ul className="body-ul" key={item.disk_id}>
                            <li><input type="checkbox"/></li>
                            <li>{item.disk_id}</li>
                            <li>{item.disk_name}</li>
                            <li>{item.volume}</li>
                            <li>{item.change_date}</li>
                            <li>{item.AS_date}</li>
                            <li>{item.etc}</li>
                            <li>{item.timestamp}</li>
                        </ul>
                    ))}
                </div>

            </div>
        </section>

    );

}

export default ServerContent;