import React from 'react'
import {Route, Routes} from "react-router-dom";  //browser router

//HOC
import DefaultHoc from './HOC/Default.HOC';

//Components 
import Temp from './components/temp';

function App() { //preparing route and adding contents
  return (
    <>
    <Routes>
    <Route path="/" exact element={<Temp/>}/> 
    </Routes>
    </>
  );
}

export default App;
