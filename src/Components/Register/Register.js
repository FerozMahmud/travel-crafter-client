import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Register = () => {


    const { handleEmailChange, handlePasswordChange } = useAuth();

    return (
        <div>
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have a account? <Link to="/login">Login</Link></p>
                <div>---------------or-----------------</div>
                <button className="btn-primary">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;