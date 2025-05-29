import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import {loginUser } from '../apiConfig';

const Login =()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errors,setErrors] = useState('');
    const history = useHistory();

    const handleLogin = async (e) =>{
        e.preventDefault();
        const newErrors = {};
        if(!email) newErrors.email = 'Email is required';
        if(!password) newErrors.password = "Password is required";
        setErrors(newErrors);

        if(Object.keys(newErrors).length === 0){
            try{
                const response = await loginUser({email,password});
                localStorage.setItem('token', response.data.token);
                history.pushState('/'); //redirect to home page
            }catch(err){
                setErrors({...err, login:'Invalid credentials'});
            }
        }
    };

    return(
        <div>
            <h1>
                Login
            </h1>
            <form onSubmit={handleLogin}>
                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
                {errors.email && <p>{errors.email}</p>}
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e)=> setEmail(e.target.value)}
                />
                {errors.password && <p>{errors.password}</p>}
                <button type="submit">Login</button>
                {errors.login && <p>{errors.login}</p>}
            </form>
        </div>
    )

}

export default Login;