/**
*@title Tab Container Function
*@date 2021-10-29
*@author 홍수희
*@desc Tab Container 에 사용되는 함수 모음
*@etc(change)
*/

import React from "react";

/**
 * 검색창 앞 select
 * @param tabNum :tabNum 탭넘버에 따라 컴포넌트가 변경됨
 * @param onChangeHandler :select 클릭시 작동하는 handler
 * @returns {JSX.Element|null} :tabNum에 따라 다른 select 리턴
 */
export const Select = ({tabNum,onChangeHandler}) => {
    const Consent = (
        <select className="search-sel" onChange={(e)=>onChangeHandler(e)}>
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
    )
    const Medical = (
        <select className="search-sel" onChange={(e)=>onChangeHandler(e)}>
            <option value="r_2">고유번호</option>
        </select>
    )
    if (tabNum === 1){
        return Consent;
    }
    else if(tabNum === 3){
        return Medical;
    }
    else{
        return null;
    }
}

/**
 * 동의서 탭에서 출력할 리스트 필터링 하는 함수
 * @param inputTxt :input textbox에서 받은 text
 * @param originalList :필터링 전 리스트
 * @param selValue :select 에서 선택한 아이템
 * @returns {*} :필터링된 리스트 리턴
 */
export function filteringConsentPosts(inputTxt,originalList,selValue){
    let result;
    switch(selValue){
        case "unique_num":
            result = originalList.filter((el)=> el.unique_num.includes(inputTxt));
            break;
        case "false_nm":
            result = originalList.filter((el)=> el.false_nm.includes(inputTxt));
            break;
        case "parti_date":
            result = originalList.filter((el)=> el.parti_date.includes(inputTxt));
            break;
        case "sex":
            result = originalList.filter((el)=>el.sex.includes(inputTxt));
            break
        case "age":
            result = originalList.filter((el)=>el.age.includes(inputTxt));
            break
        case "cancel_date":
            result = originalList.filter((el)=>el.cancel_date.includes(inputTxt));
            break
        case "sortation":
            result = originalList.filter((el)=>el.sortation.includes(inputTxt));
            break
        case "secondart_use":
            result = originalList.filter((el)=>el.secondart_use.includes(inputTxt));
            break
        case "etc":
            result = originalList.filter((el)=>el.etc.includes(inputTxt));
            break
        case "type_quantity":
            result = originalList.filter((el)=>el.type_quantity.includes(inputTxt));
            break
        case "shelf_live":
            result = originalList.filter((el)=>el.shelf_live.includes(inputTxt));
            break
        case "secondary_offer":
            result = originalList.filter((el)=>el.secondary_offer.includes(inputTxt));
            break
        case "secondary_id_info":
            result = originalList.filter((el)=>el.secondary_id_info.includes(inputTxt));
            break
        case "report":
            result = originalList.filter((el)=>el.report.includes(inputTxt));
            break
        case "report_id":
            result = originalList.filter((el)=>el.report_id.includes(inputTxt));
            break
        case "request_update":
            result = originalList.filter((el)=>el.request_update.includes(inputTxt));
            break
        case "disease_name":
            result = originalList.filter((el)=>el.disease_name.includes(inputTxt));
            break
        case "disease_code_KR":
            result = originalList.filter((el)=>el.disease_code_KR.includes(inputTxt));
            break
        case "disease_code_EN":
            result = originalList.filter((el)=>el.disease_code_EN.includes(inputTxt));
            break
        case "pregnancy_week":
            result = originalList.filter((el)=>el.pregnancy_week.includes(inputTxt));
            break
        case "family_id":
            result = originalList.filter((el)=>el.family_id.includes(inputTxt));
            break
        case "family_code":
            result = originalList.filter((el)=>el.family_code.includes(inputTxt));
            break
        case "disease_classification":
            result = originalList.filter((el)=>el.disease_classification.includes(inputTxt));
            break
        case "etc2":
            result = originalList.filter((el)=>el.etc2.includes(inputTxt));
            break
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
export function sortConsentPosts(originalList,sortToggle,name){
    let sortedPost;
    switch(name){
        case '고유번호':
            if(sortToggle === 'desc'){
                sortedPost = originalList.sort((a,b)=>a.unique_num.slice(5,10) > b.unique_num.slice(5,10) ? 1 : -1);
            }else if(sortToggle === 'asc'){
                sortedPost = originalList.sort((a,b)=>a.unique_num.slice(5,10) > b.unique_num.slice(5,10) ? -1 : 1);
            }
            break;
        case '가명':
            if(sortToggle === 'desc'){
                sortedPost = originalList.sort((a,b)=> a.false_nm > b.false_nm ? 1 : -1);
            }else if(sortToggle === 'asc'){
                sortedPost = originalList.sort((a,b)=> a.false_nm > b.false_nm ? -1 : 1);
            }
            break;
        case '참여일':
            if(sortToggle === 'desc'){
                sortedPost = originalList.sort((a,b)=> a.parti_date > b.parti_date ? 1 : -1);
            }else if(sortToggle === 'asc'){
                sortedPost = originalList.sort((a,b)=> a.parti_date > b.parti_date ? -1 : 1);
            }
            break;
        case '성별':
        case '나이':
            if(sortToggle === 'desc'){
                sortedPost = originalList.sort((a,b)=> a.age > b.age ? 1 : -1);
            }else if(sortToggle === 'asc'){
                sortedPost = originalList.sort((a,b)=> a.age > b.age ? -1 : 1);
            }
            break;
        case '참여취소일':
        case '구분':
        case '검체 2차적 사용':
        case '비고':
        case '종류 및 수량':
        case '보존기간':
        case '2차적 제공':
        case '2차 식별 정보':
        case '리포트':
        case '리포트 ID':
            if(sortToggle === 'desc'){
                sortedPost = originalList.sort((a,b)=> a.age > b.age ? 1 : -1);
            }else if(sortToggle === 'asc'){
                sortedPost = originalList.sort((a,b)=> a.age > b.age ? -1 : 1);
            }
            break;
        case '업데이트 신청자':
        case '질병명':
        case '질병코드(KR)':
        case '질병코드(EN)':
        case '임신주수':
        case '가족ID':
        case '가족관계':
        case '질환구분':
        case '비고2':
        default:
            sortedPost = originalList.sort((a,b)=> a.id - b.id );
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
export function exportFile(tabNum,setCSVHeader,setCSVFileNm,itemList){
    const today = new Date();
    const year = today.getUTCFullYear();
    const month = today.getMonth();
    const day = today.getDay();
    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();
    const timeformat = year+''+month+''+day+''+hour+''+min+''+sec;
    if(tabNum===1){
        setCSVFileNm('동의서_참여자_정보_'+timeformat+'.csv');
        const consentHader = [
            {label:'고유번호',key:'unique_num'},
            {label:'가명',key:'false_nm'},
            {label:'참여일',key:'parti_date'},
            {label:'성별',key:'sex'},
            {label:'나이',key:'age'},
            {label:'참여취소일',key:'cancel_date'},
            {label:'구분',key:'sortation'},
            {label:'검체 2차적 사용',key:'secondary_use'},
            {label:'비고',key:'etc'},
            {label:'종류 및 수량',key:'type_quantity'},
            {label:'보존기간',key:'shelf_live'},
            {label:'2차적 제공',key:'secondary_offer'},
            {label:'2차적 식별 정보',key:'secondary_id_info'},
            {label:'리포트',key:'report'},
            {label:'리포트ID',key:'report_id'},
            {label:'업데이트 신청자',key:'request_update'},
            {label:'질병명',key:'disease_name'},
            {label:'질명코드(KR)',key:'disease_code_KR'},
            {label:'질명코드(EN)',key:'disease_code_EN'},
            {label:'임신주수',key:'pregnancy_week'},
            {label:'가족ID',key:'family_id'},
            {label:'가족관계',key:'family_code'},
            {label:'질환구분',key:'disease_classification'},
            {label:'비고2',key:'etc2'},
        ];
        setCSVHeader(consentHader);
    }else if(tabNum===3){
        setCSVFileNm('건강검진_'+timeformat+'.csv');
        const medicalHader = itemList.map((item)=>({label:item.name,key:'r_'+item.id}));
        setCSVHeader(medicalHader);

            // {label:item.r_1,key:'r_1'}, {label:item.r_2,key:'r_2'}, {label:item.r_3,key:'r_3'}, {label:item.r_4,key:'r_4'}, {label:item.r_5,key:'r_5'},
            // {label:item.r_6,key:'r_6'}, {label:item.r_7,key:'r_7'}, {label:item.r_8,key:'r_8'}, {label:item.r_9,key:'r_9'}, {label:item.r_10,key:'r_10'},
            // {label:item.r_11,key:'r_11'}, {label:item.r_12,key:'r_12'}, {label:item.r_13,key:'r_13'}, {label:item.r_14,key:'r_14'}, {label:item.r_15,key:'r_15'},
            // {label:item.r_16,key:'r_16'}, {label:item.r_17,key:'r_17'}, {label:item.r_18,key:'r_18'}, {label:item.r_19,key:'r_19'}, {label:item.r_20,key:'r_20'},
            // {label:item.r_21,key:'r_21'}, {label:item.r_22,key:'r_22'}, {label:item.r_23,key:'r_23'}, {label:item.r_24,key:'r_24'}, {label:item.r_25,key:'r_25'},
            // {label:item.r_26,key:'r_26'}, {label:item.r_27,key:'r_27'}, {label:item.r_28,key:'r_28'}, {label:item.r_29,key:'r_29'}, {label:item.r_30,key:'r_30'},
            // {label:item.r_31,key:'r_31'}, {label:item.r_32,key:'r_32'}, {label:item.r_33,key:'r_33'}, {label:item.r_34,key:'r_34'}, {label:item.r_35,key:'r_35'},
            // {label:item.r_36,key:'r_36'}, {label:item.r_37,key:'r_37'}, {label:item.r_38,key:'r_38'}, {label:item.r_39,key:'r_39'}, {label:item.r_40,key:'r_40'},
            // {label:item.r_41,key:'r_41'}, {label:item.r_42,key:'r_42'}, {label:item.r_43,key:'r_43'}, {label:item.r_44,key:'r_44'}, {label:item.r_45,key:'r_45'},
            // {label:item.r_46,key:'r_46'}, {label:item.r_47,key:'r_47'}, {label:item.r_48,key:'r_48'}, {label:item.r_49,key:'r_49'}, {label:item.r_50,key:'r_50'},
            // {label:item.r_51,key:'r_51'}, {label:item.r_52,key:'r_52'}, {label:item.r_53,key:'r_53'}, {label:item.r_54,key:'r_54'}, {label:item.r_55,key:'r_55'},
            // {label:item.r_56,key:'r_56'}, {label:item.r_57,key:'r_57'}, {label:item.r_58,key:'r_58'}, {label:item.r_59,key:'r_59'}, {label:item.r_60,key:'r_60'},
            // {label:item.r_61,key:'r_61'}, {label:item.r_62,key:'r_62'}, {label:item.r_63,key:'r_63'}, {label:item.r_64,key:'r_64'}, {label:item.r_65,key:'r_65'},
            // {label:item.r_66,key:'r_66'}, {label:item.r_67,key:'r_67'}, {label:item.r_68,key:'r_68'}, {label:item.r_69,key:'r_69'}, {label:item.r_70,key:'r_70'},
            // {label:item.r_71,key:'r_71'}, {label:item.r_72,key:'r_72'}, {label:item.r_73,key:'r_73'}, {label:item.r_74,key:'r_74'}, {label:item.r_75,key:'r_75'},
            // {label:item.r_76,key:'r_76'}, {label:item.r_77,key:'r_77'}, {label:item.r_78,key:'r_78'}, {label:item.r_79,key:'r_79'}, {label:item.r_80,key:'r_80'},
            // {label:item.r_81,key:'r_81'}, {label:item.r_82,key:'r_82'}, {label:item.r_83,key:'r_83'}, {label:item.r_84,key:'r_84'}, {label:item.r_85,key:'r_85'},
            // {label:item.r_86,key:'r_86'}, {label:item.r_87,key:'r_87'}, {label:item.r_88,key:'r_88'}, {label:item.r_89,key:'r_89'}, {label:item.r_90,key:'r_90'},
            // {label:item.r_91,key:'r_91'}, {label:item.r_92,key:'r_92'}, {label:item.r_93,key:'r_93'}, {label:item.r_94,key:'r_94'}, {label:item.r_95,key:'r_95'},
            // {label:item.r_96,key:'r_96'}, {label:item.r_97,key:'r_97'}, {label:item.r_98,key:'r_98'}, {label:item.r_99,key:'r_99'}, {label:item.r_100,key:'r_100'},
            // {label:item.r_101,key:'r_101'}, {label:item.r_102,key:'r_102'}, {label:item.r_103,key:'r_103'}, {label:item.r_104,key:'r_104'}, {label:item.r_105,key:'r_105'},
            // {label:item.r_106,key:'r_106'}, {label:item.r_107,key:'r_107'}, {label:item.r_108,key:'r_108'}, {label:item.r_109,key:'r_109'}, {label:item.r_110,key:'r_110'},
            // {label:item.r_111,key:'r_111'}, {label:item.r_112,key:'r_112'}, {label:item.r_113,key:'r_113'}, {label:item.r_114,key:'r_114'}, {label:item.r_115,key:'r_115'},


    }

}

