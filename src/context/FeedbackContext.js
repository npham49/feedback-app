import {createContext, useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()


export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback,setFeedback] = useState([])

    const [feedbackEdit,setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    const fetchFeedback = async() => {
        const response = await fetch('http://localhost:3001/feedback?_sort=id&_order=desc')
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback]) //This is a very interesting way to add everything already in the list into the new copy
    }
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item)=> (item.id === id? {...item, ...updItem} : item)))
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure?')) {
            setFeedback(feedback.filter((item) => item.id !==id)) //basically ther filter takes the array, assign them as item then delete the non compliance to the condition
        }
    }
    //set itemn to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    return <FeedbackContext.Provider value ={{
        feedback,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext