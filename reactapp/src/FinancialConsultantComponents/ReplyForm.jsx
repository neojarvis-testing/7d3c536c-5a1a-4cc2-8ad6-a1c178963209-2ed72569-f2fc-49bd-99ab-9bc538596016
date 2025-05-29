import React,{useState} from 'react';
import {useParams} from 'react-router-dom';
// import {updateIn } from '../apiConfig';

const ReplyForm =()=>{
    const [reply,setReply] = useState('');

    const handleReply = (e) =>{
        e.preventDefault();
        //handle reply submission logic
    };

    return(
        <div>
            <h1>
                Update Inquiry Status
            </h1>
            <form onSubmit={handleReply}>
                <textarea placeholder='Your Reply'
                value={reply}
                onChange={(e)=> setReply(e.target.value)}
                />
                <button type="submit">Submit Reply</button>
            </form>
        </div>
    )

}

export default ReplyForm;