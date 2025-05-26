import React,{useState} from 'react';

const PlanApplicaationForm =()=>{
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
                {errors.email && <p>{errors.email}</p>}
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e)=> setEmail(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default PlanApplicaationForm;