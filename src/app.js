import {useState} from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure?')) {
            setFeedback(feedback.filter((item) => item.id !==id)) //basically ther filter takes the array, assign them as item then delete the non compliance to the condition
        }
    } // This function is being pass from Item level all the way up here
    return (
        <>
            <Header text="Hello World"/>   {/*you can pass props into a component*/}
            
            <div className='container'>
                <FeedbackForm />
                <FeedbackStats feedback ={feedback}/>
                <FeedbackList feedback={feedback}
                handleDelete={deleteFeedback}/>
                
            </div>
        </>
    ) //JSX Component must be in 1 main parent component
} //we can create a component like this and use it for exporting

export default App