import { connect } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { handleLogin, handleLogout } from "../actions/login";


const Login = ({ dispatch, loggedIn }) => {

    // Initial useState
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { state } = useLocation();
    const statusReLogin = localStorage.getItem('reLogin');

    // Navigate when login success
    if (loggedIn && statusReLogin === 'true') {
        return <Navigate to={state ? state.path : "/"} />;
    } else {
        dispatch(handleLogout());
    }

    // Process handle submit form
    const handleForSubmit = (e) => {
        e.preventDefault();
        dispatch(handleLogin(username, password));
        // Clear form after submit
        setUsername("");
        setPassword("");
    };

    return (
        <div className="pb-4">
            <h1 className="d-flex justify-content-center">Employee Polls App</h1>
            <div className="d-flex justify-content-center">
                <img src='https://img.freepik.com/premium-vector/people-woman-man-character_24908-31549.jpg?w=740' alt="img login" />
            </div>
            <br/>
            <h2 className="d-flex justify-content-center" data-testid="login-heading">Login</h2>
            <form onSubmit={handleForSubmit}>
                <div className="form-outline mb-4">
                    <label htmlFor="username">Username: </label>
                    <div className="mt-1">
                        <input value={username} onChange={(e) => {setUsername(e.target.value)}} type="text" name="username" 
                            id="username" className="form-control" data-testid="username"/>
                    </div>
                </div>
                <div className="form-outline mb-4">
                    <label htmlFor="password">Password :</label>
                    <div className="mt-1">
                        <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" name="password" 
                            id="password" className="form-control" data-testid="password"/>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-success btn-lg w-50" data-testid="submit">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = ({ login }) => ({
    loggedIn: !!login
});

export default connect(mapStateToProps)(Login);