import React, { useEffect, useState } from "react";
import {getAllSavingsPlan } from '../apiConfig';
const ViewAllSavingsPlan = ()=>{
    const [plans, setPlans] = useState();
    useEffect(()=>{
        const fecthPlan = async()=>{
            try{
                const response = await getAllSavingsPlan();
                setPlans(response.data);
            }catch(err){
                console.log('erro detching savings plans: ',err);
            }
        };
        fecthPlan();
    },[]);
    return(
        <div>
            <h1>Available Savings Plans</h1>
            <table>
                <thead>
                    <tr>
                        <th>Plan Name</th>
                        <th>Goal Amount</th>
                        <th>Time Frame</th>
                        <th>Risk Level</th>
                    </tr>
                </thead>
                <tbody>
                    {plans.map(plan=>(
                        <tr key={plan.savingsPlanId}>
                            <td>{plan.name}</td>
                            <td>{plan.goalAmount}</td>
                            <td>{plan.timeFrame}</td>
                            <td>{plan.riskLevel}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ViewAllSavingsPlan;