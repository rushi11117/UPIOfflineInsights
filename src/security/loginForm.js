import React, { useEffect, useState } from 'react';
import SecondaryButton from '../components/micro-component/secondaryButton';
import { useNavigate } from 'react-router-dom'
import { login, checkLogin } from '../components/Utils/loginUtils'; // Consolidate imports

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (sessionStorage.getItem('isLoggedIn') === 'true') {
            navigate('/UPIOfflineInsights');
        }
    }, [navigate]);

    const handleLogin = () => {
        if (username === 'admin' && password === '') {
            sessionStorage.setItem('isLoggedIn', 'true');
            navigate('/UPIOfflineInsights');
        }
    }

    return (
        <div className="container col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="row justify-content-center mt-5">
                <div className="col-md-4">
                    <form onSubmit={handleLogin}>
                        <h2>Login</h2>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <SecondaryButton buttonText={"Login"} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
