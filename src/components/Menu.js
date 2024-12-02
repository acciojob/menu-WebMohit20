import React,{useState} from "react";

const  Menu=({setSortDish})=>{

    return (
        <div className="menu-heading">
            <h1 className="title">Our Menu</h1>
            <div className="menu-nav" >
                <a href="#" onClick={()=> setSortDish("all") } > All </a>
                <a href="#" onClick={()=> setSortDish("breakfast") } > Breakfast </a>
                <a href="#" onClick={()=> setSortDish("lunch") } > Lunch </a>
                <a href="#" onClick={()=> setSortDish("shakes") } > Shakes </a>
            </div>
        </div>
    )
}

export default Menu;