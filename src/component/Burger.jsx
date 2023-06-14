import React, { useEffect, useState } from "react";
import Ingredient from "./ingredient";
import topBread from '../images/burger-bread-top.svg';
import bottomBread from '../images/burger-bread-bottom.svg';


const Burger = (props) => {
    const [Ingredients, setIngredients] = useState([]);
    useEffect(() => {
        const newInge = [];
        const { data:IngredientList = [] } = props;
        Object.keys(IngredientList).forEach((key)=> {
            for (let i = 0 ; i < IngredientList[key] ; i++){
                newInge.push(<Ingredient key={key} type = {key} />);
            }
        });
        setIngredients(newInge);
    },[props.data]) 
     
     return (
        <div>
            <img src={topBread}/>
            {Ingredients}
            <img src={bottomBread}/>
        </div>
     );
      
};

export default Burger;
