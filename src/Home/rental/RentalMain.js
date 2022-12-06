/**
 *@title
 *@date 21-08-04
 *@author
 *@desc
 *@etc(change)
 */

import React, { useEffect, useState } from "react";
import axios from "axios";
import RentalContent from "./RentalContent";
import img from "../../images/cancel.png";

const RequestPopup = ({ closeRequest, URL, done }) => {
  const [inValue, setValue] = useState({
    equipment_name: "",
    name: "",
    belong: "",
    position: "",
    passwd: "",
  });
  const { equipment_name, name, belong, position, passwd } = inValue;

  function inputHandler(e) {
    const { name, value } = e.target;
    setValue({ ...inValue, [name]: value });
    // console.log(inValue);
  }

  async function clickInsert() {
    if (name === "") {
      closeRequest();
      done();
      return;
    }
    if (passwd === "") {
      alert("비밀번호는 비울 수 없습니다.");
      return;
    }
    await axios({
      method: "POST",
      url: URL,
      data: {
        param: "request",
        equipment_name: equipment_name,
        name: name,
        belong: belong,
        position: position,
        passwd: passwd,
      },
      header: { "Content-Type": "aplication/json" },
    }).then((res) => {
      setValue({
        equipment_name: "",
        name: "",
        belong: "",
        position: "",
        passwd: "",
      });
    });

    closeRequest();
    done();
  }

  return (
    <div className="popup-wrap">
      <div className="popup">
        <div className="popup-header">
          <p>대여신청</p>
          <img
            className="popup-close-btn"
            src={img}
            onClick={closeRequest}
            alt="close"
          />
        </div>
        <div className="popup-body">
          <div className="sect-02">
            <div className="sect-02-item">
              <p>품명</p>
              <input
                name="equipment_name"
                type="text"
                onChange={(e) => inputHandler(e)}
              />
            </div>
            <div className="sect-02-item">
              <p>대여자</p>
              <input
                name="name"
                type="text"
                onChange={(e) => inputHandler(e)}
              />
            </div>
            <div className="sect-02-item">
              <p>소속</p>
              <input
                name="belong"
                type="text"
                onChange={(e) => inputHandler(e)}
              />
            </div>
            <div className="sect-02-item">
              <p>위치</p>
              <input
                name="position"
                type="text"
                onChange={(e) => inputHandler(e)}
              />
            </div>
            <div className="sect-02-item">
              <p>비밀번호</p>
              <input
                name="passwd"
                type="password"
                onChange={(e) => inputHandler(e)}
              />
            </div>
          </div>
        </div>
        <div className="popup-tail">
          <p onClick={clickInsert}>완료</p>
        </div>
      </div>
    </div>
  );
};

const RentalItemList = ({
  name,
  returnCom,
  rentalList,
  onCheckSingle,
  allChecked,
  checkedItems,
  onClickAllCheck,
}) => {
  const tit = ["품명", "위치", "대여날짜"];
  const [bChecked, setChecked] = useState(false);
  const allCheckHandler = () => setChecked(!allChecked);
  const singleCheckHandler = (e, item) => {
    setChecked(!bChecked);
    onCheckSingle(e.target.checked, item);
  };
  useEffect(() => allCheckHandler, [allChecked]);
  return (
    <div className="sect-02 return">
      <div className="sect-02-item">
        <p className="message">{name} 님의 대여목록</p>
      </div>
      <div className="sect-02-list">
        <ul className="tit-ul">
          <li>
            <p style={{ lineHeight: "0" }}>전체</p>
            <input
              type="checkbox"
              onChange={(e) => onClickAllCheck(e.target.checked)}
            />
          </li>
          {tit.map((name, idx) => (
            <li key={idx}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
        {rentalList.map((item, idx) => (
          <ul className="body-ul" key={idx}>
            <li>
              <input
                type="checkbox"
                onChange={(e) => singleCheckHandler(e, item.id)}
                checked={checkedItems.has(item.id)}
              />
            </li>
            <li>{item.equipment_name}</li>
            <li>{item.position}</li>
            <li>{item.borrow_date}</li>
          </ul>
        ))}
      </div>
      <div className="popup-tail">
        <p onClick={returnCom}>완료</p>
      </div>
    </div>
  );
};

const ReturnPopup = ({ URL, closeReturn, done }) => {
  const [authToggle, setAuthToggle] = useState(true); //본인 확인 여부
  const [rentalList, setRental] = useState(null); //본인 확인후 리스트 출력 여부
  const [inAuth, setAuth] = useState({
    //본인 확인시 입력받을 name,password
    name: "",
    passwd: "",
  });
  const { name, passwd } = inAuth;
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [allChecked, setAllChecked] = useState(false);

  //input 입력 핸들러
  function inputHandler(e) {
    const { name, value } = e.target;
    setAuth({ ...inAuth, [name]: value });
  }
  //비품반납시 본인 확인 및 데이터 불러오기 함수
  async function authChecking() {
    await axios({
      method: "POST",
      url: URL,
      data: {
        param: "selectAuth",
        name: name,
        passwd: passwd,
      },
      header: { "Content-Type": "aplication/json" },
    }).then((res) => {
      // console.log(res);
      if (res.data == null || res.data === "") {
        alert("성함이나 비밀번호가 맞지 않습니다.");
      } else {
        setRental(res.data);
        setAuthToggle(!authToggle);
      }
    });
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
      rentalList.map((item) => checkedItems.add(item.id));
      setCheckedItems(checkedItems);
      setAllChecked(true);
    } else {
      checkedItems.clear();
      setCheckedItems(checkedItems);
      setAllChecked(false);
    }
  }

  async function retrunComplete() {
    if (checkedItems.size > 0) {
      for (let checkedID of checkedItems) {
        await axios
          .post(URL, { param: "doneRental", id: checkedID })
          .then((res) => {
            // console.log(res)
            alert("반납이 완료되었습니다. ");
            window.location.reload();
            closeReturn();
          });
      }
    }
  }

  return (
    <div className="popup-wrap">
      <div className="popup">
        <div className="popup-header">
          <p>비품반납</p>
          <img
            className="popup-close-btn"
            src={img}
            onClick={closeReturn}
            alt="close"
          />
        </div>
        {authToggle && (
          <div>대여신청시 작성한 성함과 비밀번호를 입력해주세요.</div>
        )}
        <div className="popup-body">
          {authToggle ? (
            <div className="sect-02">
              <div className="sect-02-item">
                <p>이름</p>
                <input
                  name="name"
                  type="text"
                  onChange={(e) => inputHandler(e)}
                />
              </div>
              <div className="sect-02-item">
                <p>비밀번호</p>
                <input
                  name="passwd"
                  type="password"
                  onChange={(e) => inputHandler(e)}
                />
              </div>
              <div className="popup-tail">
                <p onClick={authChecking}>다음</p>
              </div>
            </div>
          ) : (
            <RentalItemList
              name={name}
              returnCom={retrunComplete}
              rentalList={rentalList}
              onCheckSingle={onClickOneCheck}
              onClickAllCheck={onClickAllCheck}
              checkedItems={checkedItems}
              allChecked={allChecked}
            />
          )}
        </div>
      </div>
    </div>
  );
};

class RentalMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestPopup: false,
      returnPopup: false,
      URL: "http://localhost:3103/api/postRental.php",
      insertDone: false,
    };
    this.requestPopupEvent = this.requestPopupEvent.bind(this);
    this.returnPopupEvent = this.returnPopupEvent.bind(this);
    this.requestRentalDone = this.requestRentalDone.bind(this);
  }

  requestPopupEvent() {
    this.setState({
      requestPopup: !this.state.requestPopup,
    });
  }
  returnPopupEvent() {
    this.setState({
      returnPopup: !this.state.returnPopup,
    });
  }
  requestRentalDone() {
    this.setState({
      insertDone: !this.state.insertDone,
    });
  }

  render() {
    return (
      <div className="rental-wrap">
        {this.state.requestPopup && (
          <RequestPopup
            closeRequest={this.requestPopupEvent}
            URL={this.state.URL}
            done={this.requestRentalDone}
          />
        )}
        {this.state.returnPopup && (
          <ReturnPopup
            closeReturn={this.returnPopupEvent}
            URL={this.state.URL}
            done={this.returnRentalDone}
          />
        )}
        <div className="rental-tit">
          <p>비품 대여 관리</p>
        </div>
        <div className="rental-width">
          <section className="sidebar">
            <div className="inner">
              <ul className="rental-ul">
                <li onClick={this.requestPopupEvent}>
                  <p>대여신청</p>
                </li>
                <li onClick={this.returnPopupEvent}>
                  <p>비품반납</p>
                </li>
              </ul>
            </div>
          </section>
          <RentalContent
            popupEvent={this.popupEvent}
            URL={this.state.URL}
            insertDone={this.state.insertDone}
            requestRentalDone={this.requestRentalDone}
          />
        </div>
      </div>
    );
  }
}

export default RentalMain;
