import React from "react";


function Category() {
    let buttonName = "Some button";
    const handleClick = () => {
        console.log('hello');
    }
    return (
        <div>
            <h1>It`s Category!</h1>
            <button className={ "some-button" } onClick={ handleClick }>{buttonName}</button>
        </div>
    );
};

export default Category;