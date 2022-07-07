import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import "../styles/App.css";


import Header from "./Header.js";
import Main from "./Main.js";


function App() {
  return (
    <div>
      <header>
        <h1>Welcome to React Router!</h1>
      </header>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}
export default App





//
//function App() {
//	return (
//	    <Routes>
//            <Route path="/" element={<Header />} />
//            <Route exact path="main" element={<Main />} />
//        </Routes>
//
//
////		<Router>
////			<div>
////				<Routes>
////					<Route
////						exact
////						path={'/header'}
////						element={<Header />}
////					/>
//////					<Route exact path={'/recipes'} element={<Recipes />} />
////					<Route
////						exact
////						path={'/main'}
////						element={<Main />}
////					/>
////				</Routes>
////			</div>
////		</Router>
//	)
//}
//
//export default App






//import React, { Component } from "react";
//import { Route } from 'react-router-dom';
//import "../styles/App.css";
//import Header from "./Header.js";
//import Main from "./Main";
//
//
//function App() {
//    return (
//        <div>
//            <h1>Hello World</h1>
//            <Route path="/">
//                <Header />
//            </Route>
//            <Main />
//        </div>
//    );
//};
//
//export default App;
