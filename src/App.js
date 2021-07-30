/**
*@title
*@date 21-07-30
*@author 홍수희
*@desc
*@etc(change)
*/
import React from 'react'
import { Route } from 'react-router-dom';

import Main from './Home/Main';
import Header from "./Header/Header";

function App(){
    return(
        <div>
            <Header/>
            <Route path="/" component={Main} exact/>
        </div>
    )
}

export default App;
