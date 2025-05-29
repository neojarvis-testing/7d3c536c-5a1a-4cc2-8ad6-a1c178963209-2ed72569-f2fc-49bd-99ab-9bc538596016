import React,{useState} from 'react';
import {addInquiry } from '../apiConfig';
const InquiryForm =()=>{
    const [message,setMessage] = useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const requestBody = {
            message: message,
            replied : "",// replace
            userId : 1,/////replace this            
        };
        try{
            const reponse = await addInquiry (requestBody);
            console.log("Inquiry submitted...: ", reponse.data);
           }catch(err){
            console.error("error submitting the Inquiry.... : ",err);
           }
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