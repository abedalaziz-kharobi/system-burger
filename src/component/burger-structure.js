import { render } from "@testing-library/react";
import React from "react";

function structure() {
    var burger = {topBread : 1 , cheese : 0 , leaf : 0 , 
        lettuce : 0 , beef : 0 , mashroom : 0 , onion : 0,
        tomato : 0 , buttomBread : 1}

    function increase(type){
        let myBurger = {...burger}
        myBurger[type]++;
    }
    
    return {
        //ingredient with map and loop
    }

}