import React from "react";

const ViewFeedbacks = ()=>{
    return(
        <div>
            <h1>Customer Feedbacks</h1>
            <table>
                <thead>
                    <tr>
                        <th>Feedback Id</th>
                        <th>Feedback Text</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {/* render feedbacks here */}
                </tbody>
            </table>
        </div>
    )
}
export default ViewFeedbacks;