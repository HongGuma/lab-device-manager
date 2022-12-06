/**
 *@title
 *@date 2021-10-05
 *@author 홍수희
 *@desc
 *@etc(change)
 */

import React, { useEffect, useState } from "react";
import axios from "axios";
import TabContainer from "./TabContainer";
import TabContents from "./TabContents";

const Tab2 = () => {
  return (
    <section>
      <div>준비중</div>
    </section>
  );
};

/**
 * 상단 탭, 사이드바에서 아이템을 클릭해야 출력
 * @param clickEvent :탭 클릭 이벤트 함수
 * @param num :탭 클릭시 출력되는 리스트 수
 * @returns {JSX.Element}
 * @constructor :제목 옆 탭 출력 컴포넌트
 */
const HiddenTab = ({
  clickEvent,
  onClickInsertToggle,
  onClickDeleteToggle,
}) => {
  const [currentNum, setCurrentNum] = useState(null);
  function clickTab(num) {
    setCurrentNum(num);
  }
  useEffect(() => {
    clickEvent(currentNum);
  }, [clickEvent, currentNum]);

  return (
    <div className="hidden-tab">
      <div className="tabs">
        <p
          className={currentNum === 1 ? "active" : ""}
          onClick={() => clickTab(1)}
        >
          동의서, 참여자 정보
        </p>
        <p
          className={currentNum === 2 ? "active" : ""}
          onClick={() => clickTab(2)}
        >
          설문지
        </p>
        <p
          className={currentNum === 3 ? "active" : ""}
          onClick={() => clickTab(3)}
        >
          건강검진
        </p>
      </div>
      <div className="add-btn">
        <p onClick={onClickInsertToggle}>+추가</p>
        <p onClick={onClickDeleteToggle}>-삭제</p>
      </div>
    </div>
  );
};
/**
 * 메인 컴포넌트 위에 모든 컴포넌트의 부모
 * @param entryName
 * @returns {JSX.Element|null}
 * @constructor
 */
const ClinicalTab = ({ entryName }) => {
  const [currentTab, setCurrentTab] = useState(null);
  const [clinical, setClinical] = useState(false);
  const [isTabOpen, setTabOpen] = useState(false);
  const [consentPosts, setConsentPosts] = useState(null); //동의서, 참여자 정보 리스트
  const [consentEntry, setConsentEntry] = useState(null); //동의서, 참여자 항목 리스트
  const [medicalEntry, setMedicalEntry] = useState(null); //건강검진 항목 리스트
  const [medicalResPosts, setMedicalResPosts] = useState(null); // 건강검진 결과 리스트

  const [error, setError] = useState(null); //에러 여부
  const [loading, setLoading] = useState(null); //로딩 여부
  const [isInsertToggle, setInsertToggle] = useState(false); //추가 버튼 클릭 여부
  const [isDeleteToggle, setDeleteToggle] = useState(false); //삭제 버튼 클릭 여부
  const [refreshToggle, setRefreshToggle] = useState(false); //새로고침 클릭 여부

  const [currentPost, setCurrentPost] = useState(null); //탭 클릭시 tabcontainer로 보낼 리스트
  const [currentEntry, setCurrentEntry] = useState(null); //탭 클릭시 tabcontainer로 보낼 항목
  const URL = "http://localhost:3103/api/postSampleData.php";
  let session = sessionStorage.getItem("id");

  useEffect(() => {
    const fetchList = async () => {
      try {
        setError(null);
        setConsentPosts(null);
        setLoading(null);
        const res1 = await axios.post(URL, { parm: "consent" });
        const res2 = await axios.post(URL, { parm: "medicalResult" });
        const res3 = await axios.post(URL, { parm: "medicalEntry" });
        const res4 = await axios.post(URL, { parm: "consentEntry" });
        setConsentPosts(res1.data);
        setMedicalResPosts(res2.data);
        setMedicalEntry(res3.data);
        setConsentEntry(res4.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
      setRefreshToggle(false);
      setInsertToggle(false);
      setDeleteToggle(false);
    };
    fetchList().then((r) => {});
  }, [refreshToggle]);
  useEffect(() => {
    if (sessionStorage.getItem("auth") > 7) {
      setClinical(true);
    } else {
      setClinical(false);
    }
    if (clinical) {
      if (entryName === "") {
        setTabOpen(false);
      } else {
        setTabOpen(true);
      }
    } else {
      setTabOpen(false);
    }
  }, [clinical, entryName, session]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>error! 관리자에게 문의하세요</div>;
  if (!consentPosts) return null;
  if (!medicalEntry) return null;

  /**
   * +추가 버튼 클릭시 isInsertToggle 변경하는 함수
   */
  function onClickInsertToggle() {
    setInsertToggle(!isInsertToggle);
  }
  /**
   * 삭제버튼 클릭시 isDeleteToggle 변경하는 함수
   */
  function onClickDeleteToggle() {
    setDeleteToggle(!isDeleteToggle);
  }
  /**
   * 탭 클릭시 currentPost 변경하는 함수
   * @param num :tab number
   */
  function onClickCurrentTab(num) {
    setCurrentTab(num);
    switch (num) {
      case 1:
        setCurrentPost(consentPosts);
        setCurrentEntry(consentEntry);
        break;
      case 2:
        setCurrentPost(consentPosts);
        setCurrentEntry(consentEntry);
        break;
      case 3:
        setCurrentPost(medicalResPosts);
        setCurrentEntry(medicalEntry);
        break;
    }
  }

  return (
    <section className="sample container">
      <div className="container-tit">
        <div className="tit-txt">
          <a>{entryName}</a>
          {isTabOpen ? (
            <HiddenTab
              clickEvent={onClickCurrentTab}
              onClickInsertToggle={onClickInsertToggle}
              onClickDeleteToggle={onClickDeleteToggle}
            />
          ) : (
            <div>: 열람 권한이 없습니다.</div>
          )}
        </div>
      </div>
      <div className="sample container-cont">
        {(currentTab === 1 || currentTab === 2 || currentTab === 3) && (
          <TabContainer
            URL={URL}
            posts={currentPost}
            tabNum={currentTab}
            currentEntry={currentEntry}
            isInsert={isInsertToggle}
            isDeleteToggle={isDeleteToggle}
            setDeleteToggle={setDeleteToggle}
            setRefreshToggle={setRefreshToggle}
          />
        )}
      </div>
    </section>
  );
};

export default ClinicalTab;
