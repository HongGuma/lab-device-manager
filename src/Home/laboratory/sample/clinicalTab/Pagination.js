import React, {useEffect, useState} from "react";


/**
 * 하단에 숫자 출력하는 컴포넌트
 * @param totalPosts :총 post 개수 (리스트 전체 길이)
 * @param postsPerPage :자를 page 개수 (13개씩 자르고 싶다면 postperpage=13
 * @param paginate :페이지네이션 함수 (숫자를 누르면 tabcontent에 있는 currentPage가 변경
 * @param isInsertToggle :+추가 버튼 클릭 여부
 * @param refreshToggle :새로고침 클릭 여부
 * @returns {JSX.Element}
 * @constructor
 */
const Pagination = ({totalPosts,postsPerPage,paginate,isInsertToggle,refreshToggle})=>{
    const numberPages = Math.ceil(totalPosts/postsPerPage); //하단 페이지네이션의 페이지 개수
    const numbers = []; //하단 페이지네이션의 숫자 리스트
    for (let i = 1; i<=Math.ceil(totalPosts/postsPerPage);i++){
        numbers.push(i);
    }

    const perNum = 10; // 하단 페이지네이션 나눌 수 (10개씩 끊음)
    const [currentNumPage, setCurrentNumPage] = useState(1); //페이지네이션의 페이지
    const [clickNum, setClickNum] = useState(1); //클릭한 숫자
    const indexOfLastNum = currentNumPage * perNum; //페이지네이션의 마지막 인덱스
    const indexOfFirstNum = indexOfLastNum - perNum; //페이지네이션의 첫번째 인덱스
    const currentNum = numbers.slice(indexOfFirstNum,indexOfLastNum); //하단에 출력할 숫자들
    const endNum = Math.ceil(totalPosts/postsPerPage) //하단 넘버링의 마지막 숫자 ex) 124번
    const endPage = Math.ceil(numberPages/perNum) //하단 넘버링의 마지막 페이지

    // useEffect(()=>{
    //     if(isInsertToggle){ //추가 버튼 누르면 제일 마지막 페이지로 이동
    //         setCurrentNumPage(endPage);
    //     }else{ //한번더 누르면 제일 첫 페이지로 이동
    //         setCurrentNumPage(1);
    //     }
    // },[isInsertToggle])

    /**
     * 새로고침 버튼 누르면 첫 페이지로 돌아감
     */
    useEffect(()=>{
        onClickMoveBeginning();
    },[refreshToggle])

    function onClickMoveNext(){ setCurrentNumPage(currentNumPage+1); } //하단 넘버링 화살표 누르면 다음 숫자 리스트 출력하는 함수
    function onClickMovePre(){ setCurrentNumPage(currentNumPage-1); } //하단 넘버링 화살표 누르면 이전 숫자 리스트 출력하는 함수
    function onClickMoveEnd() { //마지막 페이지로 이동
        setCurrentNumPage(endPage);
        paginate(endNum);
        setClickNum(endNum);
    }
    function onClickMoveBeginning(){ //1번 숫자로 돌아감
        setCurrentNumPage(1);
        paginate(1);
        setClickNum(1);
    }
    function onClickPaginate(num){ //넘버링에 숫자 클릭시 숫자에 해당하는 post 출력
        paginate(num); //TabContent에 있는 함수
        setClickNum(num); //클릭한 숫자 밑에 밑줄 그으려고
    }

    return(
        <ul className="pagination">
            {currentNumPage > 1 && <li onClick={onClickMoveBeginning}><p> ◁ </p></li>}
            {currentNumPage > 1 && <li onClick={onClickMovePre}> <p> ◀ </p> </li>}
            {currentNum.map((pageNum)=>(
                <li className={clickNum === pageNum? 'active':''} key={pageNum} onClick={()=>onClickPaginate(pageNum)}>
                    <p>{pageNum}</p>
                </li>
            ))}
            {currentNumPage < (numberPages/perNum) && <li onClick={onClickMoveNext}> <p> ▶ </p> </li>}
            {currentNumPage < (numberPages/perNum) && <li onClick={onClickMoveEnd}><p> ▷ </p></li>}
        </ul>
    )
}

export default Pagination;