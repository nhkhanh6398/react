import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { useLocation } from 'react-router-dom';

// Component check authend login
// If not login return url page login (component Login)
// Other, return children url
const Directional = ({ children, loggedIn}) => {
    const location = useLocation();
    const statusReLogin = localStorage.getItem('reLogin');

    if (loggedIn && statusReLogin === 'true') {
        localStorage.setItem('reLogin', 'false');
        return children;
    } else {
        return <Navigate to={`/login`} replace state={{ path: location.pathname }} />;
    }
};

const mapStateToProps = ({ login }) => ({
    loggedIn: !!login
});

export default connect(mapStateToProps)(Directional);