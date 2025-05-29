import axios from 'axios';

const API_URL= "http://localhost:8080/api";

const apiClient =  axios.create({
    baseURL: API_URL,
    headers:{
        'Content-Type':'application/json',
    },
});

export const registerUser = (userData)=>{
    return apiClient.post('/users/register', userData);
}
    
export const loginUser = (credentials)=>{
    return apiClient.post('/users/login', credentials);
}
//savings
export const addSavinsPlan = (savingsPlan)=>{
    return apiClient.post('/savingsPlans', savingsPlan);
}

export const getAllSavingsPlans = ()=>{
    return apiClient.get('/savingsPlans');
}

export const getSavingsPlanById = (id)=>{
    return apiClient.get(`/savingsPlans/${id}`);
}

export const updateSavingsPlan = (id,savingsPlan)=>{
    return apiClient.put(`/savingsPlans/${id}`,savingsPlan);
}

//feature
export const addFeedback = (feedback)=>{
    return apiClient.post('/feedback', feedback);
}

export const getAllFeedbacks = ()=>{
    return apiClient.get('/feedback');
}

export const getFeedbackByUserId = (userId)=>{
    return apiClient.get(`/feedback/user/${userId}`);
}

//Inquiry
export const addInquiry = (inquiry)=>{
    return apiClient.post('/inquiry', inquiry);
}

export const getAllInquiries = ()=>{
    return apiClient.get('/inquires');
}

export const getInquiryById = (id)=>{
    return apiClient.get(`/inquires/${id}`);
}


// export const updateInquiry = (id,inquiry)=>{
//     return apiClient.put(`/savingsPlans/${id}`,savingsPlan);
// }