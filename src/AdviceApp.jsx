import {useEffect, useState} from 'react'
import './Advice.css'

const AdviceApp = () => {
    const[advice,setadvice]=useState("You will Do it!")
    const[count,setcount]=useState(0);
    async function getAdvice (){
        const res=await fetch("https://api.adviceslip.com/advice")
        // console.log(res);
        const data=await res.json();
        // console.log(data);
        setadvice(data.slip.advice)
        // setcount((c)=>c+1);
    }
    function handleClick(){
        getAdvice();
        setcount((c)=>c+1);
    }
    useEffect(() => {
        handleClick()
}, []);
  return (
    
    <div className="advice-container">
        <h2>Advice App</h2>
      <h3>{advice}</h3>
      <button onClick={handleClick}>Advice</button>
      <p>You have read <b>{count}</b> picece of Advice</p>
    </div>
  )
}

export default AdviceApp
