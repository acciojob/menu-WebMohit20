import React,{useState} from "react";
import Menu from "./Menu";
import Dish from "./Dish";
import "../styles/App.css"
import "../styles/dish.css"
import "../styles/menu.css"
function App(){
    let [sortDish,setSortDish] = useState("all")
    return (
        <div className="menu-container">
            <Menu setSortDish={setSortDish} />
            <Dish sortDish={sortDish} />
        </div>
    )
}

export default App;