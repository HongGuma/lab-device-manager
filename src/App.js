/**
*@title
*@date 21-07-30
*@author 홍수희
*@desc
*@etc(change)
*/
import React from 'react'
import { Route } from 'react-router-dom';

import './App.css';
import Header from "./Header/Header";
import Main from './Home/Main';
import OfficeMain from './Home/office/OfficeMain';
import DeviceMain from "./Home/device/DeviceMain";
import LabMain from "./Home/laboratory/LabMain";
import SampleMain from "./Home/sample/SampleMain";

function App(){
    return(
        <div>
            <Header/>
            <Route path="/" component={Main} exact/>
            <Route path="/office" component={OfficeMain}/>
            <Route path="/device" component={DeviceMain}/>
            <Route path="/laboratory" component={LabMain}/>
            <Route path="/sample" component={SampleMain}/>
        </div>
    )
}

export default App;
