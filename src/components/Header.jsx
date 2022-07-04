import React, { Component } from "react";


function Header() {
    let buttonName = "Some button";
    const handleClick = () => {
        console.log('hello');
    }
    return (
        <div>
            <h1>It`s main!</h1>
            <button className={ "some-button" } onClick={ handleClick }>{buttonName}</button>
        </div>
    );
};

export default Header;












// СТАРЫЙ СИНТАКСИС
//class Header extends Component {
//    render() {
//        return (
//            <div>
//                <h1>It`s Header!</h1>
//            </div>
//        );
//    }
//}
//
//export default Header;






