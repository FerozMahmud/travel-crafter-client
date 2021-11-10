import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router';
import useAuth from '../Hooks/useAuth';
import './Login.css'


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div className='login'>
            <h2>Login</h2>
            <form>
                <input type="email" name="" id="" placeholder="Your Email" />
                <br />
                <input type="password" name="" id="" placeholder="Password" />
                <br />
                <button className="signin-btn px-5" type="submit" value="Submit">Submit</button>
            </form>
            <div>
                <p>New to Travel Crafter? <Link to="/login">Create Account</Link></p>
                <div><p>or</p></div>
                <button className="signin-btn" onClick={handleGoogleLogin}>Google Sign In</button>
            </div>
        </div>
    );

};
export default Login;