import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogout } from "../actions/login";
import { defaultImage } from "./App";
import { useEffect, useState } from "react";
import { HOME } from "../actions/shared";
import { Navigate } from "react-router-dom";

export const LEADERBOARD = "leaderboard";
export const ADD = "add";
const Navbar = ({ dispatch, login, avatarURL, itemNav }) => {

    // Initial useState
    const [activeItem, setActiveItem] = useState(HOME); 
    const location = useLocation();

    if(login === undefined || login === null || itemNav === undefined || itemNav === null) {
        <Navigate to={`/login`} replace state={{ path: location.pathname }} />;
    }

    useEffect(() => {
        setActiveItem(itemNav);
        
    }, [itemNav]);

    const logout = () => {
        dispatch(handleLogout());
    };

    const setItemNav = (itemName) => {
        localStorage.setItem('reLogin', 'true');
        dispatch({type: 'SET_ITEM_NAV', itemNav: itemName});
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className={activeItem === 'home' ? 'nav-item active' : 'nav-item'}>
                        <Link to="/" onClick={() => {setItemNav(HOME)}} className="nav-link font-weight-bold">Home</Link>
                    </li>
                    <li className={activeItem === 'leaderboard' ? 'nav-item active' : 'nav-item'}>
                        <Link to="/leaderboard" onClick={() => {setItemNav(LEADERBOARD)}} className="nav-link font-weight-bold">Leaderboard</Link>
                    </li>
                    <li className={activeItem === 'add' ? 'nav-item active' : 'nav-item'}>
                        <Link to="/add" onClick={() => {setItemNav(ADD)}} className="nav-link font-weight-bold">Regist Poll</Link>
                    </li>
                </ul>
                <img src={avatarURL ? avatarURL : defaultImage} className="rounded-circle avatar" alt={`Avatar of ${login}`} />
                <span className="nav-link" data-testid="user-information" id="user-information">{login}</span>
                <button onClick={logout} className="btn btn-warning img-fluid">Logout</button>
            </div>
        </nav>
    );
};

const mapStateToProps = ({ login, nav }) => ({
    login: login.id,
    avatarURL: login.avatarURL,
    itemNav: nav.itemNav
});


export default connect(mapStateToProps)(Navbar);