/**
*@title main
*@date 21-07-30
*@author 홍수희
*@desc 모든 컴포넌트 집합
*@etc(change)
*/
import React from 'react'
import { Route } from 'react-router-dom';

import './App.css';
import Header from "./Home/Header";
import Login from "./admin/Login";
import Main from './Home/Main';
import OfficeMain from './Home/office/OfficeMain';
import ServerMain from "./Home/server/ServerMain";
import LabMain from "./Home/laboratory/LabMain";
import RentalMain from "./Home/rental/RentalMain";
import Footer from "./Home/Footer";

function App(){
    return(
        <div className="app">
            <Header/>
            <Route path="/" component={Main} exact/>
            <Route path="/login" component={Login}/>
            <Route path="/office" component={OfficeMain}/>
            <Route path="/server" component={ServerMain}/>
            <Route path="/laboratory" component={LabMain}/>
            <Route path="/rental" component={RentalMain}/>
            <Footer/>
        </div>
    )
}

export default App;
