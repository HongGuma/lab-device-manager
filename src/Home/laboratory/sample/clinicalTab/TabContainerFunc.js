/**
 *@title Tab Container Function
 *@date 2021-10-29
 *@author 홍수희
 *@desc Tab Container 에 사용되는 함수 모음
 *@etc(change)
 */

import React, { useState } from "react";
import axios from "axios";

/**
 * 검색창 앞 select
 * @param tabNum :tabNum 탭넘버에 따라 컴포넌트가 변경됨
 * @param onChangeHandler :select 클릭시 작동하는 handler
 * @returns {JSX.Element|null} :tabNum에 따라 다른 select 리턴
 */
export const Select = ({ tabNum, onChangeHandler }) => {
  const Consent = (
    <select className="search-sel" onChange={(e) => onChangeHandler(e)}>
      <option value="unique_num">고유번호</option>
      <option value="false_nm">가명</option>
      <option value="prti_date">참여일</option>
      <option value="sex">성별</option>
      <option value="age">나이</option>
      <option value="cancel_date">참여취소일</option>
      <option value="sortation">구분</option>
      <option value="secondary_use">검체 2차적 사용</option>
      <option value="etc">비고</option>
      <option value="type_quantity">종류 및 수량</option>
      <option value="shelf_live">보존기간</option>
      <option value="secondary_offer">2차적 제공</option>
      <option value="secondary_id_info">2차 식별 정보</option>
      <option value="report">리포트</option>
      <option value="report_id">리포트ID</option>
      <option value="request_update">업데이트 신청자</option>
      <option value="disease_name">질병명</option>
      <option value="disease_code_KR">질병코드(KR)</option>
      <option value="disease_code_EN">질병코드(EN)</option>
      <option value="pregnancy_week">임신주수</option>
      <option value="family_id">가족ID</option>
      <option value="family_code">가족관계</option>
      <option value="disease_classification">질환구분</option>
      <option value="etc2">비고2</option>
    </select>
  );
  const Medical = (
    <select className="search-sel" onChange={(e) => onChangeHandler(e)}>
      <option value="r_2">고유번호</option>
    </select>
  );
  if (tabNum === 1) {
    return Consent;
  } else if (tabNum === 3) {
    return Medical;
  } else {
    return null;
  }
};

/**
 * 동의서 탭에서 출력할 리스트 필터링 하는 함수
 * @param inputTxt :input textbox에서 받은 text
 * @param originalList :필터링 전 리스트
 * @param selValue :select 에서 선택한 아이템
 * @returns {*} :필터링된 리스트 리턴
 */
export function filteringConsentPosts(inputTxt, originalList, selValue) {
  let result;
  switch (selValue) {
    case "unique_num":
      result = originalList.filter((el) => el.unique_num.includes(inputTxt));
      break;
    case "false_nm":
      result = originalList.filter((el) => el.false_nm.includes(inputTxt));
      break;
    case "parti_date":
      result = originalList.filter((el) => el.parti_date.includes(inputTxt));
      break;
    case "sex":
      result = originalList.filter((el) => el.sex.includes(inputTxt));
      break;
    case "age":
      result = originalList.filter((el) => el.age.includes(inputTxt));
      break;
    case "cancel_date":
      result = originalList.filter((el) => el.cancel_date.includes(inputTxt));
      break;
    case "sortation":
      result = originalList.filter((el) => el.sortation.includes(inputTxt));
      break;
    case "secondary_use":
      result = originalList.filter((el) => el.secondary_use === inputTxt);
      break;
    case "etc":
      result = originalList.filter((el) => el.etc.includes(inputTxt));
      break;
    case "type_quantity":
      result = originalList.filter((el) => el.type_quantity.includes(inputTxt));
      break;
    case "shelf_live":
      result = originalList.filter((el) => el.shelf_live.includes(inputTxt));
      break;
    case "secondary_offer":
      result = originalList.filter((el) => el.secondary_offer === inputTxt);
      break;
    case "secondary_id_info":
      result = originalList.filter((el) =>
        el.secondary_id_info.includes(inputTxt)
      );
      break;
    case "report":
      result = originalList.filter((el) => el.report.includes(inputTxt));
      break;
    case "report_id":
      result = originalList.filter((el) => el.report_id.includes(inputTxt));
      break;
    case "request_update":
      result = originalList.filter((el) =>
        el.request_update.includes(inputTxt)
      );
      break;
    case "disease_name":
      result = originalList.filter((el) => el.disease_name.includes(inputTxt));
      break;
    case "disease_code_KR":
      result = originalList.filter((el) =>
        el.disease_code_KR.includes(inputTxt)
      );
      break;
    case "disease_code_EN":
      result = originalList.filter((el) =>
        el.disease_code_EN.includes(inputTxt)
      );
      break;
    case "pregnancy_week":
      result = originalList.filter((el) =>
        el.pregnancy_week.includes(inputTxt)
      );
      break;
    case "family_id":
      result = originalList.filter((el) => el.family_id.includes(inputTxt));
      break;
    case "family_code":
      result = originalList.filter((el) => el.family_code.includes(inputTxt));
      break;
    case "disease_classification":
      result = originalList.filter((el) =>
        el.disease_classification.includes(inputTxt)
      );
      break;
    case "etc2":
      result = originalList.filter((el) => el.etc2.includes(inputTxt));
      break;
    default:
      result = originalList;
  }
  return result;
}

/**
 * 동의서 탭에서 항목 클릭시 정렬기능 수행하는 함수
 * @param originalList :정렬전 리스트
 * @param sortToggle :오름차순인지 내림차순인지 여부
 * @param name :클릭한 항목 이름
 * @returns {*} :정렬이 된 리스트 리턴
 */
export function sortConsentPosts(originalList, sortToggle, name) {
  let sortedPost;
  switch (name) {
    case "고유번호":
      if (sortToggle === "desc") {
        sortedPost = originalList.sort((a, b) =>
          a.unique_num.slice(5, 10) > b.unique_num.slice(5, 10) ? 1 : -1
        );
      } else if (sortToggle === "asc") {
        sortedPost = originalList.sort((a, b) =>
          a.unique_num.slice(5, 10) > b.unique_num.slice(5, 10) ? -1 : 1
        );
      }
      break;
    case "가명":
      if (sortToggle === "desc") {
        sortedPost = originalList.sort((a, b) =>
          a.false_nm > b.false_nm ? 1 : -1
        );
      } else if (sortToggle === "asc") {
        sortedPost = originalList.sort((a, b) =>
          a.false_nm > b.false_nm ? -1 : 1
        );
      }
      break;
    case "참여일":
      if (sortToggle === "desc") {
        sortedPost = originalList.sort((a, b) =>
          a.parti_date > b.parti_date ? 1 : -1
        );
      } else if (sortToggle === "asc") {
        sortedPost = originalList.sort((a, b) =>
          a.parti_date > b.parti_date ? -1 : 1
        );
      }
      break;
    case "성별":
    case "나이":
      if (sortToggle === "desc") {
        sortedPost = originalList.sort((a, b) => (a.age > b.age ? 1 : -1));
      } else if (sortToggle === "asc") {
        sortedPost = originalList.sort((a, b) => (a.age > b.age ? -1 : 1));
      }
      break;
    case "참여취소일":
    case "구분":
    case "검체 2차적 사용":
    case "비고":
    case "종류 및 수량":
    case "보존기간":
    case "2차적 제공":
    case "2차 식별 정보":
    case "리포트":
    case "리포트 ID":
      if (sortToggle === "desc") {
        sortedPost = originalList.sort((a, b) => (a.age > b.age ? 1 : -1));
      } else if (sortToggle === "asc") {
        sortedPost = originalList.sort((a, b) => (a.age > b.age ? -1 : 1));
      }
      break;
    case "업데이트 신청자":
    case "질병명":
    case "질병코드(KR)":
      if (sortToggle === "desc") {
        sortedPost = originalList.sort((a, b) =>
          a.disease_code_KR > b.disease_code_KR ? 1 : -1
        );
      } else if (sortToggle === "asc") {
        sortedPost = originalList.sort((a, b) =>
          a.disease_code_KR > b.disease_code_KR ? -1 : 1
        );
      }
      break;
    case "질병코드(EN)":
    case "임신주수":
    case "가족ID":
      if (sortToggle === "desc") {
        sortedPost = originalList.sort((a, b) =>
          a.family_id > b.family_id ? 1 : -1
        );
      } else if (sortToggle === "asc") {
        sortedPost = originalList.sort((a, b) =>
          a.family_id > b.family_id ? -1 : 1
        );
      }
      break;
    case "가족관계":
    case "질환구분":
    case "비고2":
    default:
      sortedPost = originalList.sort((a, b) => a.id - b.id);
  }
  return sortedPost;
}

/**
 * 엑셀 파일 내보내기
 * @param tabNum :탭 넘버, 몇번 탭 클릭 했는지
 * @param setCSVHeader :부모 컴포넌트에서 받아옴 CSVHader 변경하는 용도
 * @param setCSVFileNm :부모 컴포넌트에서 받아옴 CSVFileNm 변경하는 용도
 * @param itemList :건강검진
 */
export function exportFile(tabNum, setCSVHeader, setCSVFileNm, itemList) {
  const today = new Date();
  const year = today.getUTCFullYear();
  const month = today.getMonth();
  const day = today.getDay();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  const timeformat =
    year + "" + month + "" + day + "" + hour + "" + min + "" + sec;
  if (tabNum === 1) {
    setCSVFileNm("만게놈_동의서_참여자_정보_" + timeformat + ".csv");
    const consentHader = [
      { label: "고유번호", key: "unique_num" },
      { label: "가명", key: "false_nm" },
      { label: "참여일", key: "parti_date" },
      { label: "성별", key: "sex" },
      { label: "나이", key: "age" },
      { label: "참여취소일", key: "cancel_date" },
      { label: "구분", key: "sortation" },
      { label: "검체 2차적 사용", key: "secondary_use" },
      { label: "비고", key: "etc" },
      { label: "종류 및 수량", key: "type_quantity" },
      { label: "보존기간", key: "shelf_live" },
      { label: "2차적 제공", key: "secondary_offer" },
      { label: "2차적 식별 정보", key: "secondary_id_info" },
      { label: "리포트", key: "report" },
      { label: "리포트ID", key: "report_id" },
      { label: "업데이트 신청자", key: "request_update" },
      { label: "질병명", key: "disease_name" },
      { label: "질명코드(KR)", key: "disease_code_KR" },
      { label: "질명코드(EN)", key: "disease_code_EN" },
      { label: "임신주수", key: "pregnancy_week" },
      { label: "가족ID", key: "family_id" },
      { label: "가족관계", key: "family_code" },
      { label: "질환구분", key: "disease_classification" },
      { label: "비고2", key: "etc2" },
    ];
    setCSVHeader(consentHader);
  } else if (tabNum === 3) {
    setCSVFileNm("만게놈_건강검진_" + timeformat + ".csv");
    const medicalHader = itemList.map((item) => ({
      label: item.name,
      key: "r_" + item.id,
    }));
    setCSVHeader(medicalHader);
  }
}
