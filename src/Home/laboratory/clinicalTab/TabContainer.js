import React, {useEffect, useState} from "react";
import ConsentContent from "./ConsentContent";
import MedicalCheckupContent from "./MedicalCheckupContent";
import SurveyContent from "./SurveyContent";
import Pagination from "../Pagination";
import axios from "axios";

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
    const postsPerPage = 15; //페이지 분할할 숫자
    const [currentPage,setCurrentPage] = useState(1); //현재 페이지
    const indexOfLast = currentPage * postsPerPage; //마지막 인덱스
    const indexOfFirst = indexOfLast - postsPerPage; //첫번째 인덱스
    const currentPosts = posts.slice(indexOfFirst,indexOfLast); //현재 출력할 리스트
    const [checkedItems,setCheckedItems] = useState(new Set());//체크된 아이템 담은 set
    const [checkedAll,setCheckAll] = useState(false);//'전체'체크 여부

    useEffect(()=>{
        if(isInsert){ //+추가 버튼 누르면 제일 마지막 페이지로 이동
            setCurrentPage(Math.ceil(posts.length/postsPerPage));
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
            posts.map((item)=>{
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

    return(
        <div className="sample tab-wrap">
            <div className="tab-table">
                {tabNum === 1 && <ConsentContent URL={URL} consentPosts={currentPosts}
                                                 onCheckSingle={onCheckSingle} checkedItems={checkedItems}
                                                 onCheckAll={onCheckAll} checkedAll={checkedAll}
                                                 isInsertToggle={isInsert}  onClickConsentInsertDone={onClickConsentInsertDone}
                                                 isDeleteToggle={isDeleteToggle}/>}
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
                <Pagination totalPosts={posts.length} postsPerPage={postsPerPage} paginate={paginate} isInsertToggle={isInsert}/>
            </div>
        </div>
    )
}

export default TabContent;