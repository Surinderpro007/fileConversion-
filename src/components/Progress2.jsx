import React from 'react'
import Progress from './Progress'

const Progress2 = () => {
    let bars = [0, 5,10,20,40,60,80,100]
  return (
    <div>
      
      <h1>This is Progress Bar </h1>

      {
        bars.map((idx, val)=>{
            return <Progress key={val}  progress={idx}/>
        })
      }
      
    </div>
  )
}

export default Progress2
