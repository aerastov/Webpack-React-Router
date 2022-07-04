import React, { Component } from "react";

import "../styles/App.css";
import Header from "./Header.jsx";
import Main from "./Main";


class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <Header />
                <Main />
            </div>
        );
    }
}
export default App;
