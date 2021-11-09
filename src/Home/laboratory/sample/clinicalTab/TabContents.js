import React, {useEffect, useState} from "react";
import axios from "axios";
import {} from "./TabContainer";
import down_arrow from "../../../../images/down_arrow_white.png";
import up_arrow from "../../../../images/up_arrow.png";
import {DuplicateCheck} from './TabContainerFunc';
import ConsentContents from "./ConsentContents";


const ConsentComponent = ({consentPosts,clickedItem,onClickItem,isDeleteToggle,singleCheckHandler,checkedItems,
                              dubleClickedID,dubleClickedItem,updateItem,onDubleClickHandler,onKeyPress,onDubleClickToggle}) => {
    return(
        <div className="cont-body">
            {
                consentPosts.map((item)=>(
                    <ul className={clickedItem === item.id ? "active body-ul":"body-ul"}
                        key={item.id}
                        onClick={()=>onClickItem(item.id)} >
                        <li className={isDeleteToggle ? '':'none'}>
                            <input type="checkbox"
                                   onChange={(e)=>singleCheckHandler(e.target.checked,item.id)}
                                   checked={checkedItems.has(item.id)}/></li>

                        {dubleClickedID === item.id && dubleClickedItem === 'r_1' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_1',item.r_1)}>{item.r_1}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_2' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_2', item.r_2)}>{item.r_2}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_3' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_3', item.r_3)}>{item.r_3}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_4' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_4', item.r_4)}>{item.r_4}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_5' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_5', item.r_5)}>{item.r_5}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_6' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_6', item.r_6)}>{item.r_6}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_7' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_7', item.r_7)}>{item.r_7}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_8' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_8', item.r_8)}>{item.r_8}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_9' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_9', item.r_9)}>{item.r_9}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_10' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_10', item.r_10)}>{item.r_10}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_11' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_11',item.r_11)}>{item.r_11}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_12' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_12',item.r_12)}>{item.r_12}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_13' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_13',item.r_13)}>{item.r_13}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_14' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_14',item.r_14)}>{item.r_14}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_15' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_15',item.r_15)}>{item.r_15}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_16' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_16',item.r_16)}>{item.r_16}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_17' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_17',item.r_17)}>{item.r_17}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_18' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_18',item.r_18)}>{item.r_18}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_19' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_19',item.r_19)}>{item.r_19}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_20' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_20', item.r_20)}>{item.r_20}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_21' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_21', item.r_21)}>{item.r_21}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_22' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_22', item.r_22)}>{item.r_22}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_23' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_23', item.r_23)}>{item.r_23}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_24' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_24', item.r_24)}>{item.r_24}</li>}

                    </ul>
                ))
            }
        </div>
    )
}

const MedicalComponent = ({medicalPosts,clickedItem,onClickItem,isDeleteToggle,singleCheckHandler,checkedItems,
                              dubleClickedID,dubleClickedItem,updateItem,onDubleClickHandler,onKeyPress,onDubleClickToggle}) => {
    return(
        <div className="cont-body">
            {
                medicalPosts.map((item)=>(
                    <ul className={clickedItem === item.id ? "active body-ul":"body-ul"}
                        key={item.id}
                        onClick={()=>onClickItem(item.id)} >
                        <li className={isDeleteToggle ? '':'none'}>
                            <input type="checkbox"
                                   onChange={(e)=>singleCheckHandler(e.target.checked,item.id)}
                                   checked={checkedItems.has(item.id)}/></li>
                        {dubleClickedID === item.id && dubleClickedItem === 'r_1' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_1',item.r_1)}>{item.r_1}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_2' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_2',item.r_2)}>{item.r_2}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_3' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_3',item.r_3)}>{item.r_3}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_3' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_3', item.r_3)}>{item.r_3}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_4' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_4', item.r_4)}>{item.r_4}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_5' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_5', item.r_5)}>{item.r_5}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_6' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_6', item.r_6)}>{item.r_6}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_7' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_7', item.r_7)}>{item.r_7}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_8' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_8', item.r_8)}>{item.r_8}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_9' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_9', item.r_9)}>{item.r_9}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_10' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_10', item.r_10)}>{item.r_10}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_11' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_11',item.r_11)}>{item.r_11}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_12' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_12',item.r_12)}>{item.r_12}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_13' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_13',item.r_13)}>{item.r_13}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_14' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_14',item.r_14)}>{item.r_14}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_15' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_15',item.r_15)}>{item.r_15}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_16' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_16',item.r_16)}>{item.r_16}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_17' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_17',item.r_17)}>{item.r_17}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_18' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_18',item.r_18)}>{item.r_18}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_19' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_19',item.r_19)}>{item.r_19}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_20' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_20', item.r_20)}>{item.r_20}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_21' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_21', item.r_21)}>{item.r_21}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_22' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_22', item.r_22)}>{item.r_22}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_23' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_23', item.r_23)}>{item.r_23}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_24' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_24', item.r_24)}>{item.r_24}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_25' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_25', item.r_25)}>{item.r_25}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_26' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_26', item.r_26)}>{item.r_26}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_27' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_27', item.r_27)}>{item.r_27}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_28' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_28', item.r_28)}>{item.r_28}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_29' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_29', item.r_29)}>{item.r_29}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_30' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_30', item.r_30)}>{item.r_30}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_31' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_31', item.r_31)}>{item.r_31}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_32' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_32', item.r_32)}>{item.r_32}</li>}
                        \
                        {dubleClickedID === item.id && dubleClickedItem === 'r_33' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_33', item.r_33)}>{item.r_33}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_34' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_34', item.r_34)}>{item.r_34}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_35' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_35', item.r_35)}>{item.r_35}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_36' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_36', item.r_36)}>{item.r_36}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_37' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_37', item.r_37)}>{item.r_37}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_38' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_38', item.r_38)}>{item.r_38}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_39' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_39', item.r_39)}>{item.r_39}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_40' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_40', item.r_40)}>{item.r_40}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_41' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id,'r_41', item.r_41)}>{item.r_41}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_42' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_42', item.r_42)}>{item.r_42}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_43' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_43', item.r_43)}>{item.r_43}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_44' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_44', item.r_44)}>{item.r_44}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_45' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_45', item.r_45)}>{item.r_45}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_46' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_46', item.r_46)}>{item.r_46}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_47' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_47', item.r_47)}>{item.r_47}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_48' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_48', item.r_48)}>{item.r_48}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_49' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_49', item.r_49)}>{item.r_49}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_50' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_50', item.r_50)}>{item.r_50}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_51' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_51', item.r_51)}>{item.r_51}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_52' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_52', item.r_52)}>{item.r_52}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_53' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_53', item.r_53)}>{item.r_53}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_54' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_54', item.r_54)}>{item.r_54}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_55' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_55', item.r_55)}>{item.r_55}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_56' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_56', item.r_56)}>{item.r_56}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_57' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_57', item.r_57)}>{item.r_57}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_58' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_58', item.r_58)}>{item.r_58}</li>}

                        {dubleClickedID === item.id && dubleClickedItem === 'r_59' ?
                            <li><input type="textbox" value={updateItem}
                                       onChange={(e)=>onDubleClickHandler(e)}
                                       onKeyPress={(e)=>onKeyPress(e)}/></li> :
                            <li onDoubleClick={()=>onDubleClickToggle(item.id, 'r_59', item.r_59)}>{item.r_59}</li>}
                    </ul>
                ))
            }
        </div>
    )
}
/**
 * 동의서, 참여자 정보 탭 클릭시 출력되는 리스트
 * @param URL
 * @param consentPosts :동의서, 참여자 정보 리스트
 * @param onCheckSingle :(함수)체크박스 개별 클릭시
 * @param onCheckAll :(함수) '전체' 체크박스 클릭시
 * @param checkedAll :전체 클릭 여부
 * @param checkedItems :체크박스 체크된 아이템 담는 Set
 * @param isInsertToggle :+추가 버튼 클릭 여부
 * @param onClickConsentInsertDone :'저장'버튼 클릭시 작동하는 함수. InsertConsent에 전달
 * @param isDeleteToggle
 * @param onClickSort
 * @returns {JSX.Element}
 * @constructor
 */
const TabContents = ({
                             URL,tabNum,
                             consentPosts,currentEntry,
                             onCheckSingle, onCheckAll,
                             checkedAll, checkedItems,
                             isInsertToggle, onClickConsentInsertDone,
                             isDeleteToggle,
                             onClickSort,
                             // refrashToggle,
                         }) => {
    const [clickedHead,setClickedHead] = useState(null);
    const [clickedItem,setClickedItem] = useState(null);
    const [dubleClickedItem,setDubleClickedItem] = useState(null);
    const [dubleClickedID,setDubleClickedID] = useState(null);
    const [updateItem,setUpdateItem] = useState(null);
    const [bChecked,setChecked] = useState(false);
    const [count,setCount] = useState(0);
    const consentEntry = currentEntry;

    const allCheckHandler = () => setChecked(!checkedAll);
    const singleCheckHandler = (e,uniqueNum) => {
        setChecked(!bChecked);
        onCheckSingle(e,uniqueNum);
    }
    useEffect(()=>allCheckHandler,[checkedAll]);

    function onClickItem(id){ setClickedItem(id);}

    function onClickHead(id,name){
        setCount(count+1);
        if(count === 0){
            setClickedHead(id);
            onClickSort(name,'desc');
        }else if(count === 1){
            setClickedHead(id);
            onClickSort(name,'asc');
        }else{
            setCount(0);
            setClickedHead(null);
            onClickSort('none','none');
        }
    }

    /**
     * 딱 원하는 칸만 input textbox로 바뀌도록 하기 위한 함수
     * @param id
     * @param key
     * @param item
     */
    function onDubleClickToggle(id,key,item){
        setDubleClickedItem(key);
        setDubleClickedID(id);
        setUpdateItem(item);
    }

    /**
     * input에서 text 받는 핸들러
     * @param e
     */
    function onDubleClickHandler(e){ setUpdateItem(e.target.value);}

    /**
     * 수정할때 엔터 누르면 저장
     * @param e :키 이벤트
     */
    function onKeyPress(e){
        if(e.key === 'Enter'){
            if(window.confirm('수정 하시겠습니까?')){
                axios.post(URL,{parm:'consentUpdate',col_nm:dubleClickedItem,update_data:updateItem,id:dubleClickedID})
                    .then((res)=>{
                        if(res.data){
                            alert("수정 완료.");
                        }else{
                            alert("error! 수정 실패");
                        }
                    });
            }
            setDubleClickedItem(null);
            setDubleClickedID(null);
        }
    }

    return(
        <section className="consent-section">
            <div className="cont-head">
                <ul className="head-ul">
                    <li className={isDeleteToggle ? '':'none'}>
                        <label>
                            <p>전체</p>
                            <label htmlFor="total">
                                <input type="checkbox"
                                       onChange={(e)=>onCheckAll(consentPosts,e.target.checked)}/>
                            </label>
                        </label>
                    </li>
                    {consentEntry.map((item) => (
                        <li className={clickedHead===item.id?'active':''}
                            key={item.id}
                            onClick={()=>onClickHead(item.id,item.name)}>
                            <p>{item.name}</p>
                            {count === 1 && <img src={down_arrow} alt="down arrow"/> }
                            {count === 2 && <img src={up_arrow} alt="up arrow"/> }
                        </li>
                    ))}
                </ul>
            </div>
            {(tabNum === 1) && <ConsentComponent/>}
            {(tabNum === 3) && <MedicalComponent/>}
        </section>
    )
}


export default ConsentContents;