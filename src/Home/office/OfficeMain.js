/**
 *@title 연구실 메인 화면
 *@date 21-08-18
 *@author 홍수희
 *@desc 연구실 관련 컴포넌트 모아서 출력하는 화면
 *@etc(change)
 */

import React from "react";
import OfficeContent from "./OfficeContent";
import SideBar from "../container/SideBar";

class OfficeMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      officeEntry: [],
      officeList: [],
      entryName: "",
      entryID: 0,
      url: "http://localhost:3103/api/getOfficeData.php?",
      tableName: "office",
    };
    this.onClickEntry = this.onClickEntry.bind(this);
  }

  onClickEntry(item) {
    this.setState({
      entryName: item.name,
      entryID: item.id,
    });
  }

  render() {
    return (
      <div className="office page-wrap">
        <div className="office page-tit">
          <p>연구실 비품 관리</p>
        </div>
        <div className="office page-width">
          <SideBar
            currentURL={this.state.url}
            clickEvent={this.onClickEntry}
            tableName={this.state.tableName}
          />
          <OfficeContent
            entryID={this.state.entryID}
            entryName={this.state.entryName}
          />
        </div>
      </div>
    );
  }
}

export default OfficeMain;
