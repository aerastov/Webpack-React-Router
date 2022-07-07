import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import  { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
        <BrowserRouter>
		    <App />
		</BrowserRouter>
	</React.StrictMode>
)





//import React from "react";
//import { BrowserRouter } from 'react-router-dom'
//import App from "./components/App";
//import { createRoot } from 'react-dom/client';
//
//
//const container = document.getElementById("root");
//const root = createRoot(container); // createRoot(container!) if you use TypeScript
//root.render(
//    <BrowserRouter>
//        <App tab="home" />
//    </BrowserRouter>
//    );