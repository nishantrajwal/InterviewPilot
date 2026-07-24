import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Timer({ timeLeft, totalTime }) {
    const percentage = (timeLeft/totalTime)*100
  return (
    <div className='w-20 h-20'>
        <CircularProgressbar
        value={percentage}
        text={`${timeLeft}s`}
        styles={buildStyles({
          textSize: "26px",
          pathColor: "#4F46E5",     // Indigo 600
          trailColor: "#EEF2FF",    // Soft Indigo background
          textColor: "#EF4444",
          strokeLinecap: "round",
        })}
        />
      
    </div>
  )
}

export default Timer
