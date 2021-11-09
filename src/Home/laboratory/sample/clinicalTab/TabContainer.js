/**
*@title TabContainer
*@date 2021-10-29
*@author 홍수희
*@desc 임상팀 탭 클릭시 출력할 conent
*@etc(change)
*/
import React, {useEffect, useState} from "react";
import {CSVLink,CSVDownload} from "react-csv";
import axios from "axios";

import {Select, filteringConsentPosts, sortConsentPosts,exportFile} from "./TabContainerFunc";
import TabContents from "./TabContents";
import ConsentContents from "./ConsentContents";
import MedicalCheckupContents from "./MedicalCheckupContents";
import SurveyContents from "./SurveyContents";
import Pagination from "./Pagination";

import searchIcon from "../../../../images/search_white.png";
import clearIcon from "../../../../images/close_icon.png";
import refreshIcon_pink from "../../../../images/refresh_pink.png";
import exportIcon from "../../../../images/export_pink.png";



/**
 * 상단 탭 클릭시 공통으로 사용되는 변수, 함수 담은 컴포넌트
 * @param URL :axios 통신시 필요한 url
 * @param posts :출력할 리스트
 * @param tabNum :탭 넘버
 * @param medicalEntry :건강검진 탭에서 사용할 항목 리스트
 * @param isInsert :'+추가' 버튼 클릭 여부
 * @param onClickDeleteToggle :'-삭제' 버튼 클릭 여부
 * @param onClickConsentInsertDone :함수. '저장'버튼 클릭시 clinicalConent의 consentInsertDone가 변경됨
 * @returns {JSX.Element}
 * @constructor
 */
const TabContainer = ({URL,posts, tabNum, currentEntry, isInsert,setRefreshToggle,setDeleteToggle,
                           isDeleteToggle, onClickConsentInsertDone}) => {
    const [inputSearchText,setInputSearchText] = useState(''); //검색창에서 입력받는 텍스트
    const [selectSearchValue,setSelectSearchValue] = useState("unique_num"); //select 에서 선택한 아이템
    const [searchBtnToggle,setSearchBtnToggle] = useState(false); //검색 버튼 클릭 여부
    const [sortToggle,setSortToggle] = useState(null); //정렬 클릭 여부 (각 항목 클릭시)
    const [currentList,setCurrentList] = useState(posts); //현재 리스트
    const listSize = currentList.length; //리스트 크기
    const postsPerPage = 15; //페이지 분할할 숫자
    const [currentPage,setCurrentPage] = useState(1); //현재 페이지
    const indexOfLast = currentPage * postsPerPage; //마지막 인덱스
    const indexOfFirst = indexOfLast - postsPerPage; //첫번째 인덱스
    const [currentPosts,setCurrentPosts] = useState(currentList.slice(indexOfFirst,indexOfLast)); //현재 리스트 자른거
    const [checkedItems,setCheckedItems] = useState(new Set());//체크된 아이템 담은 set
    const [checkedAll,setCheckAll] = useState(false);//'전체'체크 여부

    const [CSVData,setCSVData] = useState(currentList);
    const [CSVHeader,setCSVHeader] = useState(null);
    const [CSVFileNm,setCSVFileNm] = useState(null);

    const [testPost,setTestPost] = useState(null);

    /**
     * 검색 기능 수행시, searchBtnToggle 변수 변경시 작동하는 훅
     */
    useEffect(()=>{
        if(searchBtnToggle){
            setCurrentPosts(currentList.slice(indexOfFirst,indexOfLast));
            setSearchBtnToggle(false);
        }
    },[searchBtnToggle]);

    /**
     * 정렬 기능 수행시, sortToggle 변수 변경시 작동하는 훅
     */
    useEffect(()=>{
        if(sortToggle !== '' || sortToggle != null){
            setCurrentPosts(currentList.slice(indexOfFirst,indexOfLast));
        }
    },[sortToggle]);


    /**
     * 하단 번호 클릭시, currentPage 변수 변경시 작동하는 훅
     */
    useEffect(()=>{
        setCurrentPosts(currentList.slice(indexOfFirst,indexOfLast));
    },[currentPage]);

    /**
     * 새로고침 버튼 클릭시, refreshToggle 변수 변경시 작동하는 훅
     */
    // useEffect(()=>{
    //     setCurrentPage(1);
    //     setCurrentList(posts.sort((a,b)=> a.id - b.id ));
    //     setCurrentPosts(currentList.slice(indexOfFirst,indexOfLast));
    //     setCSVData(currentList);
    //     setRefreshToggle(false);
    // },[refreshToggle]);



    /**
     * 하단 넘버링에서 숫자 클릭시 실행하는 함수, currentPage 변경함
     * @param pageNumber :클릭한 숫자
     */
    function paginate(pageNumber){ setCurrentPage(pageNumber);}

    /**
     * 체크박스 개별 선택
     * @param isChecked :체크 박스 클릭 여부
     * @param uniqueNum :체크된 아이템 unique number
     */
    function onCheckSingle(isChecked,uniqueNum){
        if(isChecked){
            checkedItems.add(uniqueNum);
            setCheckedItems(checkedItems);
        }else if(!isChecked && checkedItems.has(uniqueNum)){
            checkedItems.delete(uniqueNum);
            setCheckedItems(checkedItems);
        }
    }

    /**
     * 체크박스 전체 클릭
     * @param posts :해당 페이지만 전체 선택하려고 출력된 리스트 받음
     * @param isChecked :'전체' 체크 여부
     */
    function onCheckAll(posts,isChecked){
        if(isChecked){
            currentPosts.map((item)=>{
                if(item.id != null){
                    checkedItems.add(item.id);
                }
            });
            setCheckedItems(checkedItems);
            setCheckAll(true);
        }else{
            checkedItems.clear();
            setCheckedItems(checkedItems);
            setCheckAll(false);
        }
    }

    /**
     * 삭제 버튼 클릭시
     */
    async function onClickDelete(){
        if(window.confirm(checkedItems.size+'개의 데이터를 삭제하시겠습니까?')){
            if(checkedItems.size > 0) {
                for(let item of checkedItems) {
                    await axios.post(URL, {parm: 'consentDelete',id: item})
                        .then(res=>{
                            console.log(res.data);
                        });
                }
                alert('삭제 되었습니다.');
                setDeleteToggle(false);
            }else{
                alert('삭제할 데이터가 없습니다.');
            }
        }else{
            alert('취소 되었습니다.');
        }

    }

    /**
     * 검색어 받는 handler
     * @param e :input에서 받아온 element
     */
    function inputSearchHandler(e){ setInputSearchText(e.target.value); }

    /**
     * select에서 선택한 아이템 받는 handler
     * @param e :input element
     */
    function selectSearchHandler(e){ setSelectSearchValue(e.target.value); }

    /**
     * 검색창에 x아이콘 클릭시 input textbox 비우는 함수
     */
    function onClickClear(){ setInputSearchText('');  }

    /**
     * 검색창에 돋보기 아이콘 클릭시
     */
    function onClickSearchBtn(){
        setSearchBtnToggle(true);
        const filtering = filteringConsentPosts(inputSearchText,posts,selectSearchValue);
        setCurrentList(filtering);
    }

    /**
     * 동의서 탭에서 항목 클릭시
     * @param name :클릭한 항목 이름
     * @param toggle :클릭 여부 (클릭한 횟수에 따라 desc, asc)
     */
    function onClickSortConsentPosts(name,toggle){
        setSortToggle(toggle);
        const sorting = sortConsentPosts(currentList,toggle,name);
        setCurrentList(sorting);
    }

    /**
     * 새로고침 함수
     */
    function onClickRefresh(){
        onClickClear();
        setRefreshToggle(true);
    }

    /**
     * 엑셀 파일 내보내기
     */
    function onClickExportFile(){
        exportFile(tabNum,setCSVHeader,setCSVFileNm,currentEntry);
        // alert("파일 내보내기.\n준비중 입니다.");
        setCSVData(currentList);
    }

    /**
     * 검색후 엔터
     * @param e :ket evnet
     */
    function onKeyPress(e){
        if(e.key === 'Enter'){
            onClickSearchBtn();
        }
    }

    return(
        <div className="sample tab-wrap">
            <div className="search-wrap">
                <div className="search">
                    <Select tabNum={tabNum} onChangeHandler={selectSearchHandler}/>
                    <div className="input-wrap">
                        <div className="input-sect">
                            <input type="textbox" value={inputSearchText}
                                   onChange={(e)=>inputSearchHandler(e)}
                                   onKeyPress={(e)=>onKeyPress(e)}/>
                            <img src={clearIcon} alt="clear" onClick={onClickClear}/>
                        </div>
                        <button onClick={onClickSearchBtn}><img src={searchIcon} alt="검색" className="search-icon"/></button>
                    </div>
                    <div className="number">
                        <p>{listSize} 건</p>
                    </div>
                    <button onClick={onClickRefresh}><img src={refreshIcon_pink} alt="새로고침" className="refresh-icon"/></button>
                    <CSVLink headers={CSVHeader} data={CSVData} filename={CSVFileNm} target="_blank">
                        <button onClick={onClickExportFile}>
                            <img src={exportIcon} alt="파일 내보내기" className="export-icon"/>
                        </button>
                    </CSVLink>
                </div>
            </div>
            <div className="tab-table">
                {tabNum === 1 && <ConsentContents URL={URL} consentPosts={currentPosts} currentEntry={currentEntry}
                                                  onCheckSingle={onCheckSingle} checkedItems={checkedItems}
                                                  onCheckAll={onCheckAll} checkedAll={checkedAll}
                                                  isInsertToggle={isInsert} onClickConsentInsertDone={onClickConsentInsertDone}
                                                  isDeleteToggle={isDeleteToggle}
                                                  onClickSort={onClickSortConsentPosts}
                                                  // refrashToggle={refreshToggle}
                />}
                {/*{tabNum === 2 && <SurveyContents posts={posts}/>}*/}
                {tabNum === 2 && <TabContents URL={URL} currentPosts={currentPosts} currentEntry={currentEntry}
                                              onCheckSingle={onCheckSingle} checkedItems={checkedItems}
                                              onCheckAll={onCheckAll} checkedAll={checkedAll}
                                              isInsertToggle={isInsert} onClickConsentInsertDone={onClickConsentInsertDone}
                                              isDeleteToggle={isDeleteToggle} onClickSort={onClickSortConsentPosts}
                                              // refrashToggle={refreshToggle}
                />}
                {tabNum === 3 && <MedicalCheckupContents URL={URL} medicalPosts={currentPosts} currentEntry={currentEntry}
                                                         onCheckSingle={onCheckSingle} checkedItems={checkedItems}
                                                         onCheckAll={onCheckAll} checkedAll={checkedAll} isInsertToggle={isInsert} isDeleteToggle={isDeleteToggle}/>}
            </div>
            <div>
                <div>
                    <button className={isDeleteToggle?'':'none'} onClick={onClickDelete}>삭제</button>
                </div>
            </div>
            <div className="tab-pagination">
                <Pagination totalPosts={currentList.length} postsPerPage={postsPerPage} paginate={paginate}
                            isInsertToggle={isInsert}
                            // refreshToggle={refreshToggle}
                />
            </div>
        </div>
    )
}

export default TabContainer;