import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {defaultImage} from './App';

const Box = (props) => {
    const { question, user } = props

    // format date itme
    const formatDateTime = () => {
        const date = new Date(question.timestamp);
        const hours = date.getHours() % 12;
        const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
        const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        return `${hours}:${minutes} ${ampm} | ${day}-${month}-${year}`;
    };

    const setLogin = () => {
        localStorage.setItem('reLogin', 'true');
    }

    return (
            <>
                <div className="card-body text-center">
                    <img src={user.avatarURL ? user.avatarURL : defaultImage} height={128}/>
                    <h5 className="card-title">{user.name}</h5>
                    
                </div>
                <div className="card-footer text-center">
                    <p className="card-text">{formatDateTime()}</p>
                    <Link to={'questions/' + question.id} onClick={() => {setLogin()}} className="btn btn-outline-success w-100">
                        Show
                    </Link>
                </div>
            </>
    );
}

export default connect()(Box);