import React from "react";

const ViewInquiry = ()=>{
    return(
        <div>
            <h1>View Inquiries</h1>
            <table>
                <thead>
                    <tr>
                        <th>Inquiry Id</th>
                        <th>Message</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* render inquiries here */}
                </tbody>
            </table>
        </div>
    )
}
export default ViewInquiry;