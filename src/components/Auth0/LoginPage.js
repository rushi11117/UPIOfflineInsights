// LoginPage.js
import React, { useState } from 'react';
import { useAuth } from './authContext';

const LoginPage = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        // Perform authentication logic here (e.g., API call to authenticate user)
        try {
            // Simulating a login process - replace with your actual authentication logic
            if (username === 'demo' && password === 'password') {
                login(); // Call the login function from the authContext
            } else {
                setError('Invalid credentials');
            }
        } catch (error) {
            setError('An error occurred during login');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
