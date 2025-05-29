import React, { useState } from "react";
import {getAllSavingsPlans } from '../apiConfig';

const PlanApproval = ()=>{
    const [plans, setPlans] = useState();
    useEffect(()=>{
        const fecthPlans = async()=>{
            try{
                const response = await getAllSavingsPlans();
                setPlans(response.data);
            }catch(err){
                console.log('erro fetching plans: ',err);
            }
        };
        fecthPlans();
    },[]);
    return(
        <div>
            <h1>Savings Plans</h1>
            <table>
                <thead>
                    <tr>
                        <th>Plan Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {plans.map(plan=>(
                        <tr key={plan.savingsPlanId}>
                            <td>{plan.name}</td>
                            <td>{plan.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default PlanApproval;