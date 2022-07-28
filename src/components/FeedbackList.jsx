import React from 'react'
import { useContext } from 'react'
import FeedBackItem from './FeedBackItem'
import Spinner from './share/Spinner'
import {motion, AnimatePresence} from 'framer-motion'
import FeedbackContext from '../context/FeedbackContext'



function FeedbackList() {
    const {feedback, isLoading} = useContext(FeedbackContext)


    if (!isLoading && (!feedback || feedback.length ===0 )) {
        return (
            <p> There are no feedbacks.</p>
        )
    }
    return isLoading ? (<Spinner/>) : (
        <div className='feedback-list'>
            <AnimatePresence>{feedback.map((item)=>(
                <motion.div 
                    key ={item.id}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                >
                        <FeedBackItem key={item.id} item={item}/>
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    )
    
}
//   return (
//     <div className='feedback-list'>
//         {feedback.map((item)=>(
//             <FeedBackItem key={item.id} item={item}
//             handleDelete={handleDelete}/>
//         ))}
//     </div>
//   )
// }

export default FeedbackList