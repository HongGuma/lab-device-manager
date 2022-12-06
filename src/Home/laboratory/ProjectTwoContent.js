/**
 *@title
 *@date 2021-10-05
 *@author
 *@desc
 *@etc(change)
 */

import React, { useEffect, useState } from "react";

const Tab1 = () => {
  return <div>tab1</div>;
};
const Tab2 = () => {
  return <div>tab2</div>;
};
const Tab3 = () => {
  return <div>tab3</div>;
};
const Tab4 = () => {
  return <div>tab4</div>;
};

const HiddenTab = ({ clickEvent }) => {
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
          tab1
        </p>
        <p
          className={currentNum === 2 ? "active" : ""}
          onClick={() => clickTab(2)}
        >
          tab2
        </p>
        <p
          className={currentNum === 3 ? "active" : ""}
          onClick={() => clickTab(3)}
        >
          tab3
        </p>
        <p
          className={currentNum === 4 ? "active" : ""}
          onClick={() => clickTab(4)}
        >
          tab4
        </p>
      </div>
      <div className="cont-cnt">
        <p>총</p>
        <p></p>
        <p>개</p>
      </div>
    </div>
  );
};

const ProjectTwoContent = ({ entryName }) => {
  const [currentTab, setCurrentTab] = useState(null);
  const [clinical, setClinical] = useState(false);
  const [isTabOpen, setTabOpen] = useState(false);
  let session = sessionStorage.getItem("id");

  useEffect(() => {
    if (sessionStorage.getItem("auth") > 5) {
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

  function tabOnOff() {}

  function onClickCurrentTab(num) {
    setCurrentTab(num);
  }

  return (
    <section className="sample container">
      <div className="container-tit">
        <div className="tit-txt">
          <a>{entryName}</a>
          {isTabOpen && <HiddenTab clickEvent={onClickCurrentTab} />}
        </div>
      </div>
      <div className="sample container-cont">
        {currentTab === 1 && <Tab1 />}
        {currentTab === 2 && <Tab2 />}
        {currentTab === 3 && <Tab3 />}
        {currentTab === 4 && <Tab4 />}
      </div>
    </section>
  );
};

export default ProjectTwoContent;
