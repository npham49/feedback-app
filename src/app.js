import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'


function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback]) //This is a very interesting way to add everything already in the list into the new copy
    }
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure?')) {
            setFeedback(feedback.filter((item) => item.id !==id)) //basically ther filter takes the array, assign them as item then delete the non compliance to the condition
        }
    } // This function is being pass from Item level all the way up here
    return (
        <Router>
            <Header text="Hello World"/>   {/*you can pass props into a component*/}
            
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={
                        <>
                        <FeedbackForm handleAdd= {addFeedback}/>
                        <FeedbackStats feedback ={feedback}/>
                        <FeedbackList feedback={feedback}
                        handleDelete={deleteFeedback}/>
                        </>
                    }/>

                    <Route path='/about' element={<AboutPage/>} />
                </Routes>            
            </div>
        </Router>
    ) //JSX Component must be in 1 main parent component
} //we can create a component like this and use it for exporting

export default App