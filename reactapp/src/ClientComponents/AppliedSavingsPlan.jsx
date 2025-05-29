import React from "react";

const AppliedSavingsPlan = ()=>{
    return(
        <div>
            <h1>Applied Plans</h1>
            <table>
                <thead>
                    <tr>
                        <th>Plan Name</th>
                        <th>Status</th>
                        <th>Applied Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {/* render applied plans here */}
                </tbody>
            </table>
        </div>
    )
}
export default AppliedSavingsPlan;