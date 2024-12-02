import React,{useState} from "react";
import obj   from "./data.js";

const Dish = ( {sortDish} )=>{
    let [dish,setDish] = useState(obj)
    // console.log(obj);
    function toTitle(str){
        str=str.split(" ");
        let title= str.map( (char)=>{
            return char[0].toUpperCase()+char.slice(1).toLowerCase();
        } )
        return title.join(" ")
        
    }
    return (
        <div className="dish-container">
            
            {
                dish.filter( (item)=> sortDish=="all" ? item : item.category== sortDish  ).map((item)=> {
                    return (
                        <div className="dish-detail">
                            <div className="image">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="detail">
                                <div className="detail-heading">
                                    <h2 className="title"> { toTitle(item.title)} </h2>
                                    <h3 className="price"> {`$ ${item.price}`} </h3>
                                </div>
                                <p> 
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Dish;


