
import {useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import {FeedbackProvider} from './context/FeedbackContext'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    
    
    return (
        <FeedbackProvider>
            <Router>
                <Header text="FeedBackApp"/>   {/*you can pass props into a component*/}
                
                <div className='container'>
                    <Routes> {/* With version 6 of react-router-dom all <Route> have to be in <Routes>*/}
                        <Route exact path='/' element={
                            <>
                            <FeedbackForm/>
                            <FeedbackStats/>
                            <FeedbackList />
                            </>
                        }/>

                        <Route path='/about' element={<AboutPage/>} />
                    </Routes>
                    <AboutIconLink/>            
                </div>
            </Router>
        </FeedbackProvider>
    ) //JSX Component must be in 1 main parent component
} //we can create a component like this and use it for exporting

export default App