import React,{useEffect, useState} from 'react';
import Burger from './Burger';
import './control-panel.css'

function controlPanel(props) {
  const  burgerData  = props.data;

  
  const update = props.updateTempBurgerData;
    return (
      <div className='container'>
        <div class="card">
          <section>
            <h1>Welcome, Burger!</h1>
          </section>
          <div class="box">
            <input type="number"  onChange={(event) => props.updateTempBurgerData("cheese", event.target.value )  } value={props.data['cheese']}  required></input>
            <span>cheese : </span>
            <i></i>
          </div>
          <div class='box'>
            <input type="number" onChange={(event) => props.updateTempBurgerData("leaf", event.target.value ) }  value = {props.data["leaf"]} required></input>
            <span>leaf : </span>
            <i></i>
            </div>
            <div class='box'>
              <input type="number" onChange={(event) => props.updateTempBurgerData("lettuce", event.target.value ) } value = {props.data["lettuce"]} required></input>
              <span>lettuce : </span>
              <i></i>
            </div>
            <div class='box'>
              <input  type="number" onChange={(event) => props.updateTempBurgerData("beef", event.target.value ) } value = {props.data["beef"]} required></input>
              <span>meat beef : </span>
              <i></i>
              
            </div>
            <div class='box'>
              <input type="number" onChange={(event) => props.updateTempBurgerData("mashroom", event.target.value ) } value = {props.data["mashroom"]} required></input>
              <span>mashroom : </span>
              <i/>
            </div>
            <div class='box'>
              <input type="number" onChange={(event) => props.updateTempBurgerData("onion", event.target.value ) } value = {props.data["onion"]} required></input>
              <span>onion : </span>
              <i/>
            </div>
            <div class='box'>
              <input type="number" onChange={(event) => props.updateTempBurgerData("tomato", event.target.value ) } value = {props.data["tomato"]} required></input>
              <span>tomato : </span>
              <i/>
            </div>
          <button type="button" class="submit-btn" onClick={props.updateBurgerData}  >Next</button>
        </div>

        <input className='salary' value={props.salary}></input>

      
      
      </div>
    );
  }

  export default controlPanel;