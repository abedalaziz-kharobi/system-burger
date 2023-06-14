import React from "react";
import cheese from '../images/burger-cheese.svg';
import leaf from '../images/burger-leaf.svg';
import lettuce from '../images/burger-lettuce.svg';
import beef from '../images/burger-meat-beef.svg';
import mashroom from '../images/burger-mushroom.svg';
import onion from '../images/burger-onion.svg';
import tomato from '../images/burger-tomato.svg';



const Ingredient = (props) => {

     return (

      <div>
         {props.type === 'cheese' && <img src={cheese}/>}
         {props.type === 'leaf' && <img src={leaf}/>}
         {props.type === 'lettuce' && <img src={lettuce}/>}
         {props.type === 'beef' && <img src={beef}/>}
         {props.type === 'mashroom' && <img src={mashroom}/>}
         {props.type === 'onion' && <img src={onion}/>}
         {props.type === 'tomato' && <img src={tomato}/>}
      </div>
     );
      
};

export default Ingredient;
