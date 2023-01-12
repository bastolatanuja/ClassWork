//import React, { Component } from 'react'

//import PropTypes from 'prop-types'
//import React, { memo } from 'react'
import {useState} from "react";
const Button = (props) => {
    const{handleClick,text} = props
    return (
        <button onClick={handleClick}>{text} </button>
    )
}


const Statistics = (props) => {
    const{ good,neutral, bad} = props

    return(
        <div>
         <p> good {good}</p>
        <p> neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all{good+neutral+bad} </p>
        <p>average {(good-neutral)/(good+bad+neutral)}</p>
        <p>positive {((good+bad+neutral)/3) * 100}</p>
        </div>
    )
}
function Feedback () {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    
   // const [all, setAll] = useState(0)
function goClick (){
    return setGood(good+1)

    //console.log(`rendering ${counter}`)
}

function goNeutral (){
    return setNeutral(neutral+1)

    //console.log(`rendering ${counter}`)
}

function goBad (){
    return setBad(bad+1)

    //console.log(`rendering ${counter}`)
}

  const ResetClick = () => {
    setBad(0)
    setGood(0)
    setNeutral(0)
  }

  //const all =() => good+ bad + neutral




  return (
    <div>
        <h1> Give Feedback</h1>
        
        <Button handleClick= {goClick} text = {'good'}> </Button>
        <Button handleClick= {goNeutral} text = {'neutral'}> </Button>
        <Button handleClick= {goBad} text = {'bad'}></Button>
        {/* <button onClick={goClick}> good</button>
        <button onClick={goNeutral}> neutral</button>
        <button onClick={goBad}> bad</button> */}
        <Button handleClick={ResetClick} text={'Reset all'}> </Button>
        <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
       
        
        </div>
       
  )
  }

export default Feedback