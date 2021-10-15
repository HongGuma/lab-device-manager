/**
*@title 샘플 관리 페이지 본문
*@date 2021-09-27
*@author 홍수희
*@desc 사이드바 클릭시 해당 아이템에 맞는 데이터 컬럼 출력하는 페이지
*@etc(change)
*/

import React, {useEffect, useState} from "react"

const SampleContent = ({entryName,tabNum}) => {
    const [currentTab,setCurrentTab] = useState(null);
    const [clinical,setClinical] = useState(false);
    const [isTabOpen,setTabOpen] = useState(false);
    let session = sessionStorage.getItem('id');
    
    useEffect(()=>{
        if (sessionStorage.getItem('auth')>5){setClinical(true);}
        else{ setClinical(false) }
        if(clinical){
            if(entryName===''){
                setTabOpen(false)
            }else{
                setTabOpen(true)
            }
        }else { setTabOpen(false)}
    },[clinical, entryName, session])


    function tabOnOff(){

    }

    function onClickCurrentTab(num){
        setCurrentTab(num);
    }

    return(
        <section className="sample container">
            <div className="container-tit">
                <div className="tit-txt">
                    <a>{entryName}</a>
                </div>
            </div>
        </section>
    )
}

export default SampleContent