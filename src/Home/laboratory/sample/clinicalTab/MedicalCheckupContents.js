import React, { useEffect, useState } from "react";
import axios from "axios";

const InsertMedicalCheckup = ({ medicalEntry, URL }) => {
  const entrys = Object.values(medicalEntry).length;
  const [insertItem, setInsertItem] = useState({
    r_1: "-",
    r_2: "-",
    r_3: "-",
    r_4: "-",
    r_5: "-",
    r_6: "-",
    r_7: "-",
    r_8: "-",
    r_9: "-",
    r_10: "-",
    r_11: "-",
    r_12: "-",
    r_13: "-",
    r_14: "-",
    r_15: "-",
    r_16: "-",
    r_17: "-",
    r_18: "-",
    r_19: "-",
    r_20: "-",
    r_21: "-",
    r_22: "-",
    r_23: "-",
    r_24: "-",
    r_25: "-",
    r_26: "-",
    r_27: "-",
    r_28: "-",
    r_29: "-",
    r_30: "-",
    r_31: "-",
    r_32: "-",
    r_33: "-",
    r_34: "-",
    r_35: "-",
    r_36: "-",
    r_37: "-",
    r_38: "-",
    r_39: "-",
    r_40: "-",
    r_41: "-",
    r_42: "-",
    r_43: "-",
    r_44: "-",
    r_45: "-",
    r_46: "-",
    r_47: "-",
    r_48: "-",
    r_49: "-",
    r_50: "-",
    r_51: "-",
    r_52: "-",
    r_53: "-",
    r_54: "-",
    r_55: "-",
    r_56: "-",
    r_57: "-",
    r_58: "-",
    r_59: "-",
    r_60: "-",
    r_61: "-",
    r_62: "-",
    r_63: "-",
    r_64: "-",
    r_65: "-",
    r_66: "-",
    r_67: "-",
    r_68: "-",
    r_69: "-",
    r_70: "-",
    r_71: "-",
    r_72: "-",
    r_73: "-",
    r_74: "-",
    r_75: "-",
    r_76: "-",
    r_77: "-",
    r_78: "-",
    r_79: "-",
    r_80: "-",
    r_81: "-",
    r_82: "-",
    r_83: "-",
    r_84: "-",
    r_85: "-",
    r_86: "-",
    r_87: "-",
    r_88: "-",
    r_89: "-",
    r_90: "-",
    r_91: "-",
    r_92: "-",
    r_93: "-",
    r_94: "-",
    r_95: "-",
    r_96: "-",
    r_97: "-",
    r_98: "-",
    r_99: "-",
    r_100: "-",
    r_101: "-",
    r_102: "-",
    r_103: "-",
    r_104: "-",
    r_105: "-",
    r_106: "-",
    r_107: "-",
    r_108: "-",
    r_109: "-",
    r_110: "-",
    r_111: "-",
    r_112: "-",
    r_113: "-",
    r_114: "-",
    r_115: "-",
  });

  function insertHandler(e) {
    const { name, value } = e.target;
    setInsertItem({ ...insertItem, [name]: value });
  }

  async function onClick() {
    await axios({
      method: "POST",
      url: URL,
      data: {
        parm: "insert",
        table: "10kG_medical_checkup_result",
        arr: insertItem,
        entryLen: entrys,
      },
      header: { "Content-Type": "aplication/json" },
    }).then((res) => {
      if (res.data) {
        alert("완료");
      } else {
        alert("에러 발생. 관리자에게 문의하세요.");
      }
    });
  }

  return (
    <div>
      <ul className="insert-ul">
        {medicalEntry.map((item) => (
          <li key={item.id}>
            <input
              type="textbox"
              name={"r_" + item.id}
              onChange={(e) => insertHandler(e)}
            />
          </li>
        ))}
      </ul>
      <ul className="insert-btn" onClick={onClick}>
        <li>저장</li>
      </ul>
    </div>
  );
};

/**
 * 건강검진 탭 클릭시 출력하는 리스트
 * @param medicalPosts :건강검진 리스트
 * @param medicalEntry :건강검진 항목 리스트
 * @param onCheckSingle :체크박스 개별 클릭시
 * @param onCheckAll :체크박스 '전체' 클릭
 * @param checkedItems :체크박스 체크된 아이템 set
 * @param checkedAll :'전체'체크 여부
 * @returns {JSX.Element}
 * @constructor
 */
const MedicalCheckupContents = ({
  URL,
  medicalPosts,
  currentEntry,
  onCheckSingle,
  onCheckAll,
  checkedItems,
  checkedAll,
  isInsertToggle,
  isDeleteToggle,
}) => {
  const [clickedItem, setClickedItem] = useState(null);
  const [dubleClickedItem, setDubleClickedItem] = useState(null);
  const [dubleClickedID, setDubleClickedID] = useState(null);
  const [updateItem, setUpdateItem] = useState(null);
  const [changeToggle, setChangeToggle] = useState(false);
  const [bChecked, setChecked] = useState(false);
  const allCheckHandler = () => setChecked(!checkedAll);
  const singleCheckHandler = (e, uniqueNum) => {
    setChecked(!bChecked);
    onCheckSingle(e, uniqueNum);
  };
  const medicalEntry = currentEntry;

  useEffect(() => allCheckHandler, [checkedAll]);
  function onClickItem(id) {
    setClickedItem(id);
  }
  /**
   * 딱 원하는 칸만 input textbox로 바뀌도록 하기 위한 함수
   * @param id
   * @param key
   * @param item
   */
  function onDubleClickToggle(id, key, item) {
    setDubleClickedItem(key);
    setDubleClickedID(id);
    setUpdateItem(item);
  }

  /**
   * input에서 text 받는 핸들러
   * @param e
   */
  function onDubleClickHandler(e) {
    setUpdateItem(e.target.value);
  }

  /**
   * 수정할때 엔터 누르면 저장
   * @param e :키 이벤트
   */
  function onKeyPress(e) {
    if (e.key === "Enter") {
      if (window.confirm("수정 하시겠습니까?")) {
        axios
          .post(URL, {
            parm: "medicalUpdate",
            col_nm: dubleClickedItem,
            update_data: updateItem,
            id: dubleClickedID,
          })
          .then((res) => {
            if (res.data) {
              alert("수정 완료.");
            } else {
              alert("error! 수정 실패");
            }
          });
      }
      setDubleClickedItem(null);
      setDubleClickedID(null);
    }
  }

  const MedicalComponent = ({ item }) => {
    const consentItem = Object.values(item);
    return medicalEntry.map((entry, idx) =>
      dubleClickedID === item.id && dubleClickedItem === entry.name ? (
        <li key={entry.id}>
          <input
            type="textbox"
            name={"r_" + entry.id}
            value={updateItem}
            onChange={(e) => onDubleClickHandler(e)}
            // onKeyPress={onKeyPress}
          />
        </li>
      ) : (
        <li
          key={entry.id}
          onDoubleClick={() =>
            onDubleClickToggle(item.id, entry.name, consentItem[idx + 1])
          }
        >
          {consentItem[idx + 1]}
        </li>
      )
    );
  };

  return (
    <section className="medical-section">
      <div className="cont-head">
        <ul className="head-ul">
          <li className={isDeleteToggle ? "" : "none"}>
            <label>
              <p>전체</p>
              <label htmlFor="total">
                <input
                  type="checkbox"
                  onChange={(e) => onCheckAll(medicalPosts, e.target.checked)}
                />
              </label>
            </label>
          </li>
          {medicalEntry.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="cont-body">
        {medicalPosts.map((item) => (
          <ul
            className={clickedItem === item.id ? "active body-ul" : "body-ul"}
            onClick={() => onClickItem(item.id)}
            key={item.id}
          >
            <li className={isDeleteToggle ? "" : "none"}>
              <input
                type="checkbox"
                onChange={(e) => singleCheckHandler(e.target.checked, item.id)}
                checked={checkedItems.has(item.id)}
              />
            </li>

            <MedicalComponent item={item} />

            {/*<li>{item.r_2}</li><li>{item.r_3}</li><li>{item.r_4}</li><li>{item.r_5}</li>*/}
            {/*<li>{item.r_6}</li><li>{item.r_7}</li><li>{item.r_8}</li><li>{item.r_9}</li><li>{item.r_10}</li>*/}
            {/*<li>{item.r_11}</li><li>{item.r_12}</li><li>{item.r_13}</li><li>{item.r_14}</li><li>{item.r_15}</li>*/}
            {/*<li>{item.r_16}</li><li>{item.r_17}</li><li>{item.r_18}</li><li>{item.r_19}</li><li>{item.r_20}</li>*/}
            {/*<li>{item.r_21}</li><li>{item.r_22}</li><li>{item.r_23}</li><li>{item.r_24}</li><li>{item.r_25}</li>*/}
            {/*<li>{item.r_26}</li><li>{item.r_27}</li><li>{item.r_28}</li><li>{item.r_29}</li><li>{item.r_30}</li>*/}
            {/*<li>{item.r_31}</li><li>{item.r_32}</li><li>{item.r_33}</li><li>{item.r_34}</li><li>{item.r_35}</li>*/}
            {/*<li>{item.r_36}</li><li>{item.r_37}</li><li>{item.r_38}</li><li>{item.r_39}</li><li>{item.r_40}</li>*/}
            {/*<li>{item.r_41}</li><li>{item.r_42}</li><li>{item.r_43}</li><li>{item.r_44}</li><li>{item.r_45}</li>*/}
            {/*<li>{item.r_46}</li><li>{item.r_47}</li><li>{item.r_48}</li><li>{item.r_49}</li><li>{item.r_50}</li>*/}
            {/*<li>{item.r_51}</li><li>{item.r_52}</li><li>{item.r_53}</li><li>{item.r_54}</li><li>{item.r_55}</li>*/}
            {/*<li>{item.r_56}</li><li>{item.r_57}</li><li>{item.r_58}</li><li>{item.r_59}</li><li>{item.r_60}</li>*/}
            {/*<li>{item.r_61}</li><li>{item.r_62}</li><li>{item.r_63}</li><li>{item.r_64}</li><li>{item.r_65}</li>*/}
            {/*<li>{item.r_66}</li><li>{item.r_67}</li><li>{item.r_68}</li><li>{item.r_69}</li><li>{item.r_70}</li>*/}
            {/*<li>{item.r_71}</li><li>{item.r_72}</li><li>{item.r_73}</li><li>{item.r_74}</li><li>{item.r_75}</li>*/}
            {/*<li>{item.r_76}</li><li>{item.r_77}</li><li>{item.r_78}</li><li>{item.r_79}</li><li>{item.r_80}</li>*/}
            {/*<li>{item.r_81}</li><li>{item.r_82}</li><li>{item.r_83}</li><li>{item.r_84}</li><li>{item.r_85}</li>*/}
            {/*<li>{item.r_86}</li><li>{item.r_87}</li><li>{item.r_88}</li><li>{item.r_89}</li><li>{item.r_90}</li>*/}
            {/*<li>{item.r_91}</li><li>{item.r_92}</li><li>{item.r_93}</li><li>{item.r_94}</li><li>{item.r_95}</li>*/}
            {/*<li>{item.r_96}</li><li>{item.r_97}</li><li>{item.r_98}</li><li>{item.r_99}</li><li>{item.r_100}</li>*/}
            {/*<li>{item.r_101}</li><li>{item.r_102}</li><li>{item.r_103}</li><li>{item.r_104}</li><li>{item.r_105}</li>*/}
            {/*<li>{item.r_106}</li><li>{item.r_107}</li><li>{item.r_108}</li><li>{item.r_109}</li><li>{item.r_110}</li>*/}
            {/*<li>{item.r_111}</li><li>{item.r_112}</li><li>{item.r_113}</li><li>{item.r_114}</li><li>{item.r_115}</li>*/}
          </ul>
        ))}
      </div>
      {isInsertToggle && (
        <InsertMedicalCheckup URL={URL} medicalEntry={medicalEntry} />
      )}
    </section>
  );
};

export default MedicalCheckupContents;
