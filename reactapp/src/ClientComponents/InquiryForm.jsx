import React,{useState} from 'react';

const InquiryForm =()=>{
    const [message,setMessage] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        //handle inquiry submission logic
    };

    return(
        <div>
            <h1>
                Submit your Inquiry
            </h1>
            <form onSubmit={handleSubmit}>
                <textarea placeholder='you Inquiry'
                value={message}
                onChange={(e)=> setMessage(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default InquiryForm;