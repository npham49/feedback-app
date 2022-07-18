import React from 'react'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)
    //Calculate Rating average

    let average = feedback.reduce((acc,cur) => {
        return acc + cur.rating
    }, 0)
    //round the average
    average = (Math.round((average/feedback.length)*10)/10)
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
