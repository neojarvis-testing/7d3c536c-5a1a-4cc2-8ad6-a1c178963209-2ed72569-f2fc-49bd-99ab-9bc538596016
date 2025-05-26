import React,{useState} from 'react';

const PlanApplicationForm =()=>{
    const [appliedAmount,setAppliedAmount] = useState('');
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        
    };

    return(
        <div>
            <h1>
                Plan Application Form
            </h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='number'
                    placeholder='Applied Amount'
                    value={appliedAmount}
                    onChange={(e)=> setAppliedAmount(e.target.value)}
                />
               
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default PlanApplicationForm;