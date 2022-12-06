/**
 *@title 비품대여 페이지
 *@date 2021-09-10
 *@author 홍수희
 *@desc
 *@etc(change)
 */

import React, { useEffect, useState } from "react";
import axios from "axios";

/**
 *
 * @param rentalList :반납 완료 안된 비품 대여 리스트
 * @returns {JSX.Element}
 * @constructor 기본으로 출력할 컴포넌트
 */
const DefaultItem = ({ rentalList }) => {
  const tit = ["번호", "품명", "대여자", "소속", "위치", "대여 날짜"];

  return (
    <div className="container-cont">
      <div className="cont-head">
        <ul className="head-ul">
          {tit.map((name, idx) => (
            <li key={idx}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="cont-body">
        {rentalList.map((item, idx) => (
          <ul className="body-ul" key={item.id}>
            <li>{idx + 1}</li>
            <li>{item.equipment_name}</li>
            <li>{item.name}</li>
            <li>{item.belong}</li>
            <li>{item.position}</li>
            <li>{item.borrow_date}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
/**
 *
 * @param list :rental table에 있는 모든 컬럼 리스트
 * @param oneCheckHandler :체크박스 하나 클릭시
 * @param allCheckHandler :'전체'버튼 클릭시
 * @param checkedAll :전체 체크박스 클릭 여부
 * @param checkedList :체크된 체크박스의 id들
 * @returns {JSX.Element}
 * @constructor 모든 rental 테이블의 아이템을 출력하는 컴포넌트, 관리자용, 아이템 삭제도 가능
 */
const AllItem = ({
  list,
  oneCheckHandler,
  allCheckHandler,
  checkedAll,
  checkedList,
}) => {
  const tit = [
    "ID",
    "품명",
    "대여자",
    "소속",
    "위치",
    "대여날짜",
    "반납여부",
    "반납날짜",
  ];
  const [bChecked, setChecked] = useState(false);

  const checkedAllHandler = () => setChecked(!checkedAll);
  useEffect(() => checkedAllHandler, [checkedAll]);

  const checkedSingleHandler = (e, item) => {
    setChecked(!bChecked);
    oneCheckHandler(e.target.checked, item.id);
  };

  return (
    <div className="container-cont">
      <div className="cont-head">
        <ul className="head-ul">
          <li>
            <label>
              <p>전체</p>
              <label htmlFor="total">
                <input
                  type="checkbox"
                  onChange={(e) => allCheckHandler(e.target.checked)}
                />
              </label>
            </label>
          </li>
          {tit.map((name, idx) => (
            <li key={idx}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="cont-body">
        {list.map((item) => (
          <ul className="body-ul" key={item.id}>
            <li>
              <input
                type="checkbox"
                onChange={(e) => checkedSingleHandler(e, item)}
                checked={checkedList.has(item.id)}
              />
            </li>
            <li>{item.id}</li>
            <li>{item.equipment_name}</li>
            <li>{item.name}</li>
            <li>{item.belong}</li>
            <li>{item.position}</li>
            <li>{item.borrow_date}</li>
            <li>{item.toggle}</li>
            <li>{item.return_date}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
/**
 *
 * @param openEvent :+로그확인 버튼 클릭시 클릭이벤트
 * @param deleteEvent :-삭제 버튼 클릭시, 클릭이벤트
 * @returns {JSX.Element}
 * @constructor 관리자 모드에서만 보이는 버튼
 */
const AdminBtn = ({ openEvent, deleteEvent }) => {
  return (
    <div className="add-btn">
      <p onClick={openEvent}>+로그확인</p>
      <p onClick={deleteEvent}>-삭제</p>
    </div>
  );
};
/**
 *
 * @param URL axios URL
 * @param insertDone 데이터 삽입 완료 여부 rentalMain.js 에서 받아온다.
 * @returns {JSX.Element|null}
 * @constructor
 */
const RentalContent = ({ URL, insertDone }) => {
  const [allList, setAllList] = useState(null); //전체 리스트
  const [totalNum, setTotalNum] = useState(null); //전체 리스트 숫자
  const [list, setList] = useState(null); //사용자에게 보여질 리스트 (반납 완료된 아이템 출력 안함)
  const [num, setNum] = useState(null); //리스트 숫자
  const [error, setError] = useState(null); //에러 여부
  const [loading, setLoading] = useState(null); //로딩 여부
  const [adminBtnToggle, setAdminBtnToggle] = useState(false); //관리자에게 보이는 버튼
  const [defaultToggle, setDefaultToggle] = useState(true); //기본으로 출력할 컴포넌트 여부
  const [allToggle, setAllToggle] = useState(false); //모든 리스트 출력할 컴포넌트 여부
  const [checkedItems, setCheckedItems] = useState(new Set()); //체크박스 체크한 아이템
  const [isAllChecked, setAllChecked] = useState(false); //전체 클릭 여부
  const [deleteDone, setDeleteDone] = useState(false);
  let session = sessionStorage.getItem("id");

  useEffect(() => {
    const fetchList = async () => {
      try {
        setError(null);
        setList(null);
        setLoading(null);
        const res = await axios.post(URL, { param: "select" });
        const res2 = await axios.post(URL, { param: "count" });
        const res3 = await axios.post(URL, { param: "allSelect" });
        const res4 = await axios.post(URL, { param: "allCount" });
        setList(res.data);
        setNum(res2.data);
        setAllList(res3.data);
        setTotalNum(res4.data);
        setDeleteDone(false);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchList().then((r) => {});
  }, [insertDone, deleteDone, URL]);
  useEffect(() => {
    if (
      sessionStorage.getItem("name") !== null &&
      sessionStorage.getItem("auth") === "10"
    )
      setAdminBtnToggle(true);
  }, [session]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>error! 관리자에게 문의하세요</div>;
  if (!list) return null;

  //-삭제 버튼 누를시 (아이템삭제)
  async function deleteItem() {
    if (checkedItems.size > 0) {
      for (let id of checkedItems) {
        //checkedItems에 있는 id를 하나씩 꺼낸다.
        await axios.post(URL, { param: "delete", id: id });
      }
      setDeleteDone(true);
      setAllChecked(false);
      alert("삭제 완료");
    } else {
      alert("체크박스를 체크해주세요.");
    }
  }
  //+로그확인 버튼 클릭 (전체 리스트 출력)
  function openAllItem() {
    setAllToggle(!allToggle);
    setDefaultToggle(!defaultToggle);
  }

  //체크박스 개별클릭
  function onClickOneCheck(isChecked, id) {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
  }
  //체크박스 전체클릭 (전체버튼 클릭)
  function onClickAllCheck(isChecked) {
    if (isChecked) {
      allList.map((item) => checkedItems.add(item.id));
      setCheckedItems(checkedItems);
      setAllChecked(true);
    } else {
      checkedItems.clear();
      setCheckedItems(checkedItems);
      setAllChecked(false);
    }
  }

  return (
    <section className="container">
      <div className="container-tit">
        <div className="tit-txt">
          <p>대여현황</p>
        </div>
        <div className="cont-cnt">
          <p>총</p>
          <p>{allToggle ? totalNum : num}</p>
          <p>건</p>
        </div>
        {adminBtnToggle && (
          <AdminBtn openEvent={openAllItem} deleteEvent={deleteItem} />
        )}
      </div>
      {defaultToggle && <DefaultItem rentalList={list} />}
      {allToggle && (
        <AllItem
          list={allList}
          oneCheckHandler={onClickOneCheck}
          allCheckHandler={onClickAllCheck}
          checkedList={checkedItems}
          checkedAll={isAllChecked}
        />
      )}
    </section>
  );
};

export default RentalContent;
