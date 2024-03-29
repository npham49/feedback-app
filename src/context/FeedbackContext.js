
import {createContext, useState, useEffect} from 'react'



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
        const response = await fetch('https://np-feedback-app-db.herokuapp.com/feedback?_sort=id&_order=desc')
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch('https://np-feedback-app-db.herokuapp.com/feedback', {
            method:'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newFeedback),
        })
        
        const data = await response.json()


        setFeedback([data, ...feedback]) //This is a very interesting way to add everything already in the list into the new copy
    }
    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`https://np-feedback-app-db.herokuapp.com/feedback/${id}`, {
            method:'PUT',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(updItem)
        })
        const data = await response.json()

        setFeedback(feedback.map((item)=> (item.id === id? {...item, ...data} : item)))
    }

    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure?')) {
            await fetch(`https://np-feedback-app-db.herokuapp.com/feedback/${id}`, {method:'DELETE'})

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