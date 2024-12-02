import React,{useState} from "react";

const  Menu=({setSortDish})=>{

    return (
        <div className="menu-heading">
            <h1 className="title">Our Menu</h1>
            <div className="menu-nav" >
                <button id="main" onClick={()=> setSortDish("all") } > All </button>
                <button id="filter-btn-1" data-test-id="menu-item-breakfast" onClick={()=> setSortDish("breakfast") } > Breakfast</button>
                <button id="filter-btn-2" data-test-id="menu-item-lunch" onClick={()=> setSortDish("lunch") } > Lunch </button>
                <button id="filter-btn-3" data-test-id="menu-item-shakes" onClick={()=> setSortDish("shakes") } > Shakes </button>
            </div>
        </div>
    )
}

export default Menu;