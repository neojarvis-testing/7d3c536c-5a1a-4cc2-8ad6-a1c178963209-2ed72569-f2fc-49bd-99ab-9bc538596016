import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {registerUser } from '../apiConfig';
const Signup=()=>{
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors,setErrors] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e)=>{
        e.preventDefault();
        const newErrors = {};
        if(!username) newErrors.username = 'User Name is required';
        if(!email) newErrors.email = 'Email is required';
        if(!mobileNumber) newErrors.mobileNumber = "Mobile Number is required";
        if(!password) newErrors.password = "Password is required";
        if(!confirmPassword) newErrors.confirmPassword = "Confirm Password is required";
        if(password !== confirmPassword) newErrors.passwordMisMatch = "Password do not match";
        setErrors(newErrors);

        if(Object.keys(newErrors).length === 0){
           try{
            await registerUser ({username, email, mobileNumber, password});
            navigate('/login'); //redirect to login page
           }catch(err){
            setErrors({...err, signup:'Registration failed '});
           }
        }
    };

    return(
        <div>
            <h1>
                Register
            </h1>
            <form onSubmit={handleSignup}>
                <input
                    type='text'
                    placeholder='User Name'
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                />
                {errors.username && <p>{errors.username}</p>}
                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
                {errors.email && <p>{errors.email}</p>}
                <input
                    type='text'
                    placeholder='Mobile Number'
                    value={mobileNumber}
                    onChange={(e)=> setMobileNumber(e.target.value)}
                />
                {errors.mobileNumber && <p>{errors.mobileNumber}</p>}
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />
                {errors.password && <p>{errors.password}</p>}
                <input
                    type='password'
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e)=> setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                {errors.passwordMisMatch && <p>{errors.passwordMisMatch}</p>}
                <button type="submit">Register</button>
                {errors.signup && <p>{errors.signup}</p>}
            </form>
        </div>
    )



}

export default Signup;