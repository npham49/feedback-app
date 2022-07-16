import React from 'react'
import { useState } from 'react'
import Card from './share/Card'
import Button from './share/Button'
function FeedbackForm() {
    const [text,setText] = useState('')
    const [btnDisabled,setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    //if consition to check if the text isn currently above 10 characters to activate the button
    const handleTextChange = (e) =>{
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage("Text must be at leats 10 characters.")
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }
  return (
    <Card>
        <form>
            <h2> How would you rate the page? </h2>
            <div className='input-group'>
                <input onChange={handleTextChange} type='text' placeholder='Write a review' value={text}/>
                <Button type='submit' isDisabled={btnDisabled}> Send </Button>
            </div>

            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm