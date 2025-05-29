import React,{useState} from 'react';
import {addFeedback } from '../apiConfig';
const CustomerPostFeedback =()=>{
    const [feedbackText,setFeedbackText] = useState('');
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const requestBody = {
            feedbackText: feedbackText,
            date : new Date().toISOString(),
            userId : 1,/////replace this            
        };
        try{
            const reponse = await addFeedback (requestBody);
            console.log("feedback submitted...: ", reponse.data);
           }catch(err){
            console.error("error submitting the feedback.... : ",err);
           }
    };

    return(
        <div>
            <h1>
                Submit you feedback
            </h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder='Your Feedback'
                    value={feedbackText}
                    onChange={(e)=> setFeedbackText(e.target.value)}
                />
               
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default CustomerPostFeedback;