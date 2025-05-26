import React,{useState} from 'react';

const Login =()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errors,setErrors] = useState('');

    const handleLogin = (e) =>{
        e.preventDefault();
        const newErrors = {};
        if(!email) newErrors.email = 'Email is required';
        if(!password) newErrors.password = "Password is required";
        setErrors(newErrors);

        if(Object.keys(newErrors).length === 0){
            //call login app
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
            </form>
        </div>
    )

}

export default Login;