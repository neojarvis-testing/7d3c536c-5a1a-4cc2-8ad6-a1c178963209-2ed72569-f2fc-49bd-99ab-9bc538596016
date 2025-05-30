import React, { useEffect, useState } from "react";
import {getAllInquiries } from '../apiConfig';
const ViewInquiry = ()=>{
    const [inquiries, setInquiries] = useState();
    useEffect(()=>{
        const fecthInquiries = async()=>{
            try{
                const response = await getAllInquiries();
                setInquiries(response.data);
            }catch(err){
                console.log('erro detching inquiries: ',err);
            }
        };
        fecthInquiries();
    },[]);
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
                {inquiries.map(inquiry=>(
                        <tr key={inquiry.inquiryId}>
                            <td>{inquiry.inquiryId}</td>
                            <td>{inquiry.message}</td>
                            <td>{inquiry.replied ? 'Replied' : 'Pending'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ViewInquiry;