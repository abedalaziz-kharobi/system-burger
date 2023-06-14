import './App.css';
import React,{useState} from 'react';
import Burger from './component/Burger';
import ControlPanel from './component/control-panel';

  
function App(){
  const [tempBurgerData, setTempBurgerData] = useState({
    cheese : NaN , leaf : NaN , lettuce : NaN , 
    beef : NaN , mashroom : NaN , onion : NaN,
    tomato : NaN 
  });
  const [burgerData, setBurgerData] = useState({ ...tempBurgerData });
  const [tempsalary, setTempSalary] = useState(0);
  const [salary, setSalary] = useState(0);
  
  const updateTempBurgerData = (type, value) => {
   
    setTempBurgerData({
      ...tempBurgerData,
      [type]: value
    });
    setTempSalary(tempsalary+ value*2)
  }

  function updateBurgerData() {
    console.log("done");
    setBurgerData({
      ...tempBurgerData
    });
    setSalary(tempsalary)
  }
  
  return (
    <div className='container'>
      <Burger data = { burgerData } />
      <ControlPanel data= { tempBurgerData } updateTempBurgerData={ updateTempBurgerData }  updateBurgerData = {updateBurgerData} salary = {salary} /> 
    </div>
  )
  
}


export default App;
