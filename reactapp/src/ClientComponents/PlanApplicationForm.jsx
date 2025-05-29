import React,{useState} from 'react';
import {addSavinsPlan } from '../apiConfig';

const PlanApplicationForm =()=>{
    const [appliedAmount,setAppliedAmount] = useState('');
    const [planId,setPlanId] = useState('');
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const requestBody = {
            appliedAmount: appliedAmount,
            savingsPlan: {savingsPlanId : planId},
            status : 'Pending',
            applicationDate : new Date().toISOString(),
            remarks : 'Applying for the savings plan. '            
        };
        try{
            const reponse = await addSavinsPlan (requestBody);
            console.log("plan application submitted...: ", reponse.data);
           }catch(err){
            console.error("error submitting the plan.... : ",err);
           }
        
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
                <input
                    type='number'
                    placeholder='Savings Plan Id'
                    value={planId}
                    onChange={(e)=> setPlanId(e.target.value)}
                />
               
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default PlanApplicationForm;