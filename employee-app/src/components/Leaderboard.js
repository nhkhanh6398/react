import { connect } from "react-redux";
import { defaultImage } from './App';
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Leaderboard = ({ users }) => {
    const location = useLocation();
    if(users === undefined || users === null) {
        <Navigate to={`/login`} replace state={{ path: location.pathname }} />;
    }

    return (
        <div>
            <h1 className="text-center">Leaderboard</h1>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col" colSpan={2}>User</th>
                        <th scope="col">Answered</th>
                        <th scope="col">Created</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr key={user.id}>
                                <td className="w-0"><img src={user.avatarURL ? user.avatarURL : defaultImage} alt={`avatar of ${user.id}`} className="rounded-circle avatar" /></td>
                                <td>
                                    <div className="font-weight-bold">{user.name}</div>
                                    <div>{user.id}</div>
                                </td>
                                <td>{Object.keys(user.answers).length}</td>
                                <td>{user.questions.length}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
};

const mapStateToProps = ({ users }) => ({
    // Order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked.
    users: Object.values(users).sort((a, b) => Object.keys(b.answers).length + Object.keys(b.questions).length - Object.keys(a.answers).length - Object.keys(a.questions).length),
});

export default connect(mapStateToProps)(Leaderboard);