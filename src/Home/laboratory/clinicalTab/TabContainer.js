import React, {useEffect, useState} from "react";
import ConsentContent from "./ConsentContent";
import MedicalCheckupContent from "./MedicalCheckupContent";
import SurveyContent from "./SurveyContent";
import Pagination from "../Pagination";
import axios from "axios";
import searchIcon from "../../../images/search_white.png";
import clearIcon from "../../../images/close_icon.png";

function filteringConsentPosts(inputTxt,posts,selValue){
    let result;
    switch(selValue){
        case "unique_num":
            result = posts.filter((el)=> el.unique_num.includes(inputTxt));
            break;
        case "false_nm":
            result = posts.filter((el)=> el.false_nm.includes(inputTxt));
            break;
        case "parti_date":
            result = posts.filter((el)=> el.parti_date.includes(inputTxt));
            break;
        case "sex":
            result = posts.filter((el)=>el.sex.includes(inputTxt));
            break
        default:
            result = posts;
    }
    return result;
}

function sortConsentPosts(list,sortToggle,name){
    let sortedPost;
    switch(name){
        case '고유번호':
            if(sortToggle === 'desc'){
                sortedPost = list.sort((a,b)=>a.unique_num.slice(5,10) > b.unique_num.slice(5,10) ? 1 : -1);
            }else if(sortToggle === 'asc'){
                sortedPost = list.sort((a,b)=>a.unique_num.slice(5,10) > b.unique_num.slice(5,10) ? -1 : 1);
            }
            break;
        case '가명':
            if(sortToggle === 'desc'){
                sortedPost = list.sort((a,b)=> a.false_nm > b.false_nm ? 1 : -1);
            }else if(sortToggle === 'asc'){
                sortedPost = list.sort((a,b)=> a.false_nm > b.false_nm ? -1 : 1);
            }
            break;
        case '참여일':
            if(sortToggle === 'desc'){
                sortedPost = list.sort((a,b)=> a.parti_date > b.parti_date ? 1 : -1);
            }else if(sortToggle === 'asc'){
                sortedPost = list.sort((a,b)=> a.parti_date > b.parti_date ? -1 : 1);
            }
            break;
        case '성별':
        case '나이':
            if(sortToggle === 'desc'){
                sortedPost = list.sort((a,b)=> a.age > b.age ? 1 : -1);
            }else if(sortToggle === 'asc'){
                sortedPost = list.sort((a,b)=> a.age > b.age ? -1 : 1);
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
            sortedPost = list.sort((a,b)=> a.id - b.id );
    }
    return sortedPost;
}

function deformList(inputTxt,posts,selValue,sortItem,sortToggle){
    let result;
    // console.log('inputTxt='+inputTxt+', sortItem='+sortItem);
    if(inputTxt !== '' || inputTxt != null){
        const filteredList = filteringConsentPosts(inputTxt,posts,selValue);

        if(sortItem !== '' || sortItem != null){
            result = sortConsentPosts(filteredList,sortToggle,sortItem);
        }else{
            result = filteredList;
        }
    }else{
        if(sortItem !== '' || sortItem != null){
            result = sortConsentPosts(posts,sortToggle,sortItem);
        }else{
            result = posts;
        }
    }
    return result;
}


/**
 * 상단 탭 클릭시 공통으로 사용되는 변수, 함수 담은 컴포넌트
 * @param URL :axios 통신시 필요한 url
 * @param posts :출력할 리스트
 * @param tabNum :탭 넘버
 * @param itemList :건강검진 탭에서 사용할 항목 리스트
 * @param isInsert :'+추가' 버튼 클릭 여부
 * @param onClickDeleteToggle :'-삭제' 버튼 클릭 여부
 * @param onClickConsentInsertDone :함수. '저장'버튼 클릭시 clinicalConent의 consentInsertDone가 변경됨
 * @returns {JSX.Element}
 * @constructor
 */
const TabContent = ({URL,posts, tabNum, itemList, isInsert,setDeleteToggle, isDeleteToggle, onClickConsentInsertDone, onClickDeleteDone}) => {
    const [inputSearchText,setInputSearchText] = useState(''); //검색창에서 입력받는 텍스트
    const [selectSearchValue,setSelectSearchValue] = useState("unique_num"); //select 에서 선택한 아이템
    const [searchBtnToggle,setSearchBtnToggle] = useState(false); //검색 버튼 클릭 여부
    const [sortToggle,setSortToggle] = useState(null); //정렬 클릭 여부 (각 항목 클릭시)
    const [sortItemNm,setSortItemNm] = useState(null); //정렬 클릭시 받아오는 항목 이름
    // const currentList = deformList(inputSearchText,posts,selectSearchValue,sortItemNm,sortToggle);
    const [currentList,setCurrentList] = useState(posts);
    // const filteredPosts = filteringConsentPosts(inputSearchText,posts,selectSearchValue); //검색창에서 입력받은 텍스트로 필터링된 리스트
    // const [sortedPosts,setSortedPosts] = useState(sortConsentPosts(filteredPosts,0,'')); //오름차순,내림차순 으로 정렬된 리스트

    const postsPerPage = 15; //페이지 분할할 숫자
    const [currentPage,setCurrentPage] = useState(1); //현재 페이지
    const indexOfLast = currentPage * postsPerPage; //마지막 인덱스
    const indexOfFirst = indexOfLast - postsPerPage; //첫번째 인덱스

    // const [currentPosts,setCurrentPosts] = useState(sortedPosts.slice(indexOfFirst,indexOfLast)); //현재 출력할 리스트
    const [currentPosts,setCurrentPosts] = useState(currentList.slice(indexOfFirst,indexOfLast)); //현재 출력할 리스트
    const [checkedItems,setCheckedItems] = useState(new Set());//체크된 아이템 담은 set
    const [checkedAll,setCheckAll] = useState(false);//'전체'체크 여부


    // useEffect(() => {
    //     const resultList = deformList(inputSearchText,posts,selectSearchValue,sortItemNm,sortToggle);
    //     setCurrentPosts(resultList.slice(indexOfFirst,indexOfLast));
    // },[inputSearchText,sortToggle,currentPage])
    useEffect(()=>{
        if(searchBtnToggle){
            setCurrentPosts(currentList.slice(indexOfFirst,indexOfLast));
            setSearchBtnToggle(false);
        }
    },[searchBtnToggle])

    useEffect(()=>{
        if(isInsert){ //+추가 버튼 누르면 제일 마지막 페이지로 이동
            setCurrentPage(Math.ceil(currentPosts.length/postsPerPage));
        }else{//한번더 누르면 첫 페이지로 이동
            setCurrentPage(1);
        }
    },[isInsert])

    //하단 넘버링에서 숫자 클릭시 실행하는 함수, currentPage 변경함
    function paginate(pageNumber){
        setCurrentPage(pageNumber);
    }

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
        // console.log(isChecked,uniqueNum);
    }
    /**
     * 체크박스 전체 클릭
     * @param posts :해당 페이지만 전체 선택하려고 출력된 리스트 받음
     * @param isChecked :'전체' 체크 여부
     */
    function onCheckAll(posts,isChecked){
        if(isChecked){
            currentPosts.map((item)=>{
                if(item.unique_num != null){
                    checkedItems.add(item.unique_num);
                }else{
                    checkedItems.add(item.r_2);
                }
            });
            setCheckedItems(checkedItems);
            setCheckAll(true);
        }else{
            checkedItems.clear();
            setCheckedItems(checkedItems);
            setCheckAll(false);
        }
        // console.log(isChecked,checkedItems);
    }
    //삭제 버튼 클릭시
    async function onClickDelete(){
        if(checkedItems.size > 0){
            for(let item of checkedItems){
                await axios.post(URL,{parm:'consentDelete',unique_num:item});
            }
            alert('삭제완료.')
            onClickDeleteDone()
            setDeleteToggle(false)
        }
    }
    //검색어 받는 handler
    function inputSearchHandler(e){
        setInputSearchText(e.target.value);
    }
    //select box에서 선택한 아이템 받는 handler
    function selectSearchHandler(e){
        setSelectSearchValue(e.target.value);
    }
    //검색창에 x아이콘 클릭시
    function onClickClear(){
        setInputSearchText('');
    }
    //동의서 항목에서 항목 클릭시
    function onClickSortConsentPosts(name,toggle){
        setSortToggle(toggle);
        setSortItemNm(name);
    }
    function onClickSortMedicalPosts(num,name){

    }
    function onClickSearchBtn(){
        setSearchBtnToggle(true);
        const filtering = filteringConsentPosts(inputSearchText,posts,selectSearchValue);
        setCurrentList(filtering);
    }


    return(
        <div className="sample tab-wrap">
            <div className="search-wrap">
                <div className="search">
                    <select className="search-sel" onChange={(e)=>selectSearchHandler(e)}>
                        <option value="unique_num">고유번호</option>
                        <option value="false_nm">가명</option>
                        <option value="prti_date">참여일</option>
                    </select>
                    <div className="input-wrap">
                        <div className="input-sect">
                            <input type="textbox" value={inputSearchText}
                                   onChange={(e)=>inputSearchHandler(e)}/>
                            <img src={clearIcon} alt="clear" onClick={onClickClear}/>
                        </div>
                        <button onClick={onClickSearchBtn}><img src={searchIcon} alt="검색 아이콘" className="search-icon"/></button>
                    </div>
                </div>
            </div>

            <div className="tab-table">
                {tabNum === 1 && <ConsentContent URL={URL} consentPosts={currentPosts}
                                                 onCheckSingle={onCheckSingle} checkedItems={checkedItems}
                                                 onCheckAll={onCheckAll} checkedAll={checkedAll}
                                                 isInsertToggle={isInsert}  onClickConsentInsertDone={onClickConsentInsertDone}
                                                 isDeleteToggle={isDeleteToggle}
                                                 onClickSort={onClickSortConsentPosts}/>}
                {tabNum === 2 && <SurveyContent posts={posts}/>}
                {tabNum === 3 && <MedicalCheckupContent medicalPosts={currentPosts} itemList={itemList}
                                                      onCheckSingle={onCheckSingle} checkedItems={checkedItems}
                                                      onCheckAll={onCheckAll} checkedAll={checkedAll} isDeleteToggle={isDeleteToggle}/>}
            </div>
            <div>
                <div>
                    <button className={isDeleteToggle?'':'none'} onClick={onClickDelete}>삭제</button>
                </div>
            </div>
            <div className="tab-pagination">
                <Pagination totalPosts={currentList.length} postsPerPage={postsPerPage} paginate={paginate} isInsertToggle={isInsert}/>
            </div>
        </div>
    )
}

export default TabContent;