import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const navigate = useNavigate();

    return (
        <aside className='login-form-data'>
            <h1>Welcome Back!</h1>
            <p>Login to access your account</p>

            <form className="login-form">
                <label htmlFor="email">Email/ Mobile Number</label>
                <input type="text" id="email" placeholder="Email/ Mobile number" />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="6 characters, 1 Capital Letter" />

                <div className="form-footer">
                    <div>
                        <input type="checkbox" id="terms" className='terms' />
                        <label htmlFor="terms">I agree to the <a href="#">Terms & Policy</a></label>
                    </div>
                    <a href="/forgot-password" onClick={() => navigate('/forgot-password')} className="forgot-password">Forgot Password?</a>
                </div>

                <button type="submit" className="login-button">Login</button>

                <div className="social-login">
                    <button className="social-btn google"> <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="google icon" /> Login with Google</button>
                    <button className="social-btn apple"> <img src="https://img.icons8.com/?size=100&id=30840&format=png&color=000000" alt="apple logo" /> Login with Apple</button>
                </div>

                <p className="signup-text">Don't have an account? <a href="#">Sign Up</a></p>
            </form>
        </aside>
    )
}

export default LoginForm