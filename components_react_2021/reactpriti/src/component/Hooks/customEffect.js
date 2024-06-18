import React from 'react'
import "./style.css";
const customEffect = () => {
  const initialData = 10;
 const[myNum,setmyNum]= React.customEffect(initialData); //returns an array with two elements
  return (
   <>
   <div className="center_div">
    <p>{myNum}</p>
    <div class="button2" onClick={()=> setmyNum(myNum+1)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        HOVER ME
    </div>
   
   </div>
   
   </>
  );
};

export default customEffect;