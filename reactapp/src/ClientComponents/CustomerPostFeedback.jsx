import React,{useState} from 'react';

const CustomerPostFeedback =()=>{
    const [feedbackText,setFeedbackText] = useState('');
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        //handle logic
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