import React from "react";

const InquiryDetails = ()=>{
    return(
        <div>
            <h1>My Inquiries</h1>
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
export default InquiryDetails;