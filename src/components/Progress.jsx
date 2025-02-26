import React, { useEffect, useState } from 'react'

const Progress = ({progress}) => {

    const [animatedProgress , setAnimatedProgress] = useState(0) 
    useEffect(()=>{

        setTimeout(() => {
            setAnimatedProgress(progress)    
        }, 500);

    },[progress])
  return (
    <div>
      <div className="outer">
        <div className="inner"  
         style={{
            // width:`${progress}%`, 
            width:`${animatedProgress}%`, 
            // transform: `translateX(${animatedProgress - 100}%)`,
        color: progress < 10?"black":"white"}} role='progressbar'
         aria-valuemax={progress} aria-valuemin={0} aria-valuenow={progress}>
            {progress}% 
        </div>
      </div>
    </div>
  )
}

export default Progress
