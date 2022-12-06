import React, { useState } from "react";
import axios from "axios";

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
const UpdateItem = ({
  item,
  titleList,
  setUpdate,
  setDefault,
  setDoneUpdate,
}) => {
  const [inValue, setValue] = useState({
    asset_num: item.asset_num,
    name: item.name,
    state: item.state,
    position: item.position,
    issue_date: item.issue_date,
    manager: sessionStorage.getItem("name"),
  });
  const { asset_num, name, state, position, issue_date, manager } = inValue;

  function inputHandler(e) {
    const { name, value } = e.target;
    setValue({ ...inValue, [name]: value });
    // console.log(inValue);
  }
  async function onClickUpdate() {
    const updateURL = "http://localhost:3103/api/postUpdateEquipment.php";
    await axios({
      method: "POST",
      url: updateURL,
      data: {
        table: "office",
        asset_num: asset_num,
        name: name,
        state: state,
        position: position,
        issue_date: issue_date,
        manager: manager,
        column_id: item.id,
      },
      header: { "Content-Type": "aplication/json" },
    }).then((res) => {
      // console.log(res);
    });
    setUpdate(false);
    setDefault(true);
    setDoneUpdate(true);
  }
  return (
    <section>
      <ul>
        {titleList.map((name, idx) => (
          <li key={idx}>
            <p>{name}</p>
          </li>
        ))}
        <li> </li>
      </ul>
      <ul>
        <li>
          <input
            type="textbox"
            name="asset_num"
            value={inValue.asset_num}
            onChange={(e) => inputHandler(e)}
          />{" "}
        </li>
        <li>
          <input
            type="textbox"
            name="name"
            value={inValue.name}
            onChange={(e) => inputHandler(e)}
          />
        </li>
        <li>
          <select
            name="state"
            value={inValue.state}
            onChange={(e) => inputHandler(e)}
          >
            <option value="사용중">사용중</option>
            <option value="사용안함">사용안함</option>
            <option value="대여중">대여중</option>
          </select>
        </li>
        <li>
          <input
            type="textbox"
            name="position"
            value={inValue.position}
            onChange={(e) => inputHandler(e)}
          />
        </li>
        <li>
          <input
            type="textbox"
            name="issue_date"
            value={inValue.issue_date}
            onChange={(e) => inputHandler(e)}
          />{" "}
        </li>
        <li>
          <input
            type="textbox"
            name="manager"
            value={inValue.manager}
            onChange={(e) => inputHandler(e)}
          />
        </li>
        <li>{item.timestamp}</li>
      </ul>
      <ul>
        <li onClick={onClickUpdate}>수정하기</li>
      </ul>
    </section>
  );
};

export default UpdateItem;
