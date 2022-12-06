/**
 *@title 샘플 관리 페이지
 *@date 2021-09-27
 *@author 홍수희
 *@desc 샘플관리 메인 페이지
 *@etc(change) 임상팀 요청으로 생성함
 */

import React from "react";
import ClinicalTab from "./clinicalTab/ClinicalTab";
import ProjectTwoContent from "../ProjectTwoContent";

class SampleMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entryId: 0,
      entryName: "",
    };
    this.onClickEntry = this.onClickEntry.bind(this);
  }
  onClickEntry(name) {
    this.setState({
      entryName: name,
    });
  }
  render() {
    return (
      <div className="sample">
        <div className="sample page-wrap">
          <div className="sample page-tit">
            <p>샘플 관리</p>
          </div>
          <div className="sample page-width">
            <section className="sidebar">
              <div className="inner">
                <ul className="sidebar-ul">
                  <li onClick={() => this.onClickEntry("임상팀")}>
                    <p>만게놈(임상팀)</p>
                  </li>
                  <li onClick={() => this.onClickEntry("프로젝트2")}>
                    <p>프로젝트2</p>
                  </li>
                  <li onClick={() => this.onClickEntry("프로젝트3")}>
                    <p>프로젝트3</p>
                  </li>
                  <li onClick={() => this.onClickEntry("프로젝트4")}>
                    <p>프로젝트4</p>
                  </li>
                </ul>
              </div>
            </section>
            {this.state.entryName === "임상팀" && (
              <ClinicalTab entryName={this.state.entryName} />
            )}
            {this.state.entryName === "프로젝트2" && (
              <ProjectTwoContent entryName={this.state.entryName} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SampleMain;
