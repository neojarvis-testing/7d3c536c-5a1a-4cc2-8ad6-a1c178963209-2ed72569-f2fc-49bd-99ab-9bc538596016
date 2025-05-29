import React, { useEffect, useState } from "react";
import {getAllFeedbacks } from '../apiConfig';
const ViewFeedback = ()=>{
    const [feedbacks, setFeedbacks] = useState();
    useEffect(()=>{
        const fecthFeedbacks = async()=>{
            try{
                const response = await getAllFeedbacks();
                setFeedbacks(response.data);
            }catch(err){
                console.log('erro detching feedbacks: ',err);
            }
        };
        fecthFeedbacks();
    },[]);
    return(
        <div>
            <h1>Customer Feedbacks</h1>
            <table>
                <thead>
                    <tr>
                        <th>Feedback Id</th>
                        <th>Feedback Text</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbacks.map(feedback=>(
                        <tr key={feedback.feedbackId}>
                            <td>{feedback.feedbackId}</td>
                            <td>{feedback.feedbackText}</td>
                            <td>{feedback.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ViewFeedback;