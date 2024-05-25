import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { handleAddAnswer } from "../actions/questions";
import { useEffect, useState } from "react";
import { defaultImage } from './App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Poll = ({ dispatch, login, questions }) => {

    // Initial
    const { id } = useParams();
    const navigate = useNavigate();
    const [question, setQuestion] = useState();
    const [voteoptionOne, setVoteoptionOne] = useState(false);
    const [voteoptionTwo, setVoteoptionTwo] = useState(false);
    const location = useLocation();

    console.log(questions);
    if(login === undefined || login === null || questions === undefined || questions === null) {
        <Navigate to={`/login`} replace state={{ path: location.pathname }} />;
    }

    useEffect(() => {
        // Process get question with user login
        const qes = Object.values(questions).find((qes) => qes.id === id)
        if (qes) {
            setQuestion({
                id: qes.id,
                author: qes.author,
                timestamp: qes.timestamp,
                optionOne: {
                    votes: qes.optionOne.votes,
                    text: qes.optionOne.text,
                },
                optionTwo: {
                    votes: qes.optionTwo.votes,
                    text: qes.optionTwo.text,
                },
            });
            setVoteoptionOne(qes.optionOne.votes.includes(login.id));
            setVoteoptionTwo(qes.optionTwo.votes.includes(login.id));
        } else {
            localStorage.setItem('reLogin', 'false');
            navigate('/notFound');
        }
    }, [questions])

    // Process handle vote option
    const handleOption = (option) => {
        localStorage.setItem('reLogin', 'true');
        console.log(question.id);
        console.log(option);
        dispatch(handleAddAnswer(question.id, option));
        toast("Vote " + option);
    };

    // Process get total vote
    const handleVote = (option) => {
        const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
        switch (option) {
            case "optionOne":
                return question.optionOne.votes.length + "/" + totalVotes;
            case "optionTwo":
                return question.optionTwo.votes.length + "/" + totalVotes;
            default:
                return "";
        }
    };

    return (
        <div>
            {question && (
                <div>
                    <ToastContainer />
                    <h1 className="d-flex justify-content-center">Poll by {login.name}</h1>
                    <div className="d-flex justify-content-center">
                        <img src={login.avatarURL ? login.avatarURL : defaultImage} alt={`avatar of ${login.id}`} className="avatar-poll" />
                    </div>
                    <h1 className="d-flex justify-content-center">Would You Rather</h1>
                    <div className="d-flex justify-content-center">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <button onClick={() => { handleOption('optionOne') }} disabled={voteoptionOne || voteoptionTwo} className="w-100 p-2">
                                        <div className={voteoptionOne ? "text-success" : ""}>
                                            <p className="">{question.optionOne.text}</p>
                                            {
                                                voteoptionOne || voteoptionTwo ?
                                                    <div>Votes: {question.optionOne.votes.length} ({handleVote("optionOne")})</div>
                                                    :
                                                    <div className="bg-success">Click</div>
                                            }
                                        </div>
                                    </button>
                                </div>
                                <div className="col">
                                    <button onClick={() => { handleOption('optionTwo') }} disabled={voteoptionOne || voteoptionTwo} className="w-100 p-2">
                                        <div className={voteoptionTwo ? "text-success" : ""}>
                                            <p className="">{question.optionTwo.text}</p>
                                            {
                                                voteoptionOne || voteoptionTwo ?
                                                    <div>Votes: {question.optionTwo.votes.length} ({handleVote("optionTwo")})</div>
                                                    :
                                                    <div className="bg-success">Click</div>
                                            }
                                        </div>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }

        </div>

    );
};

const mapStateToProps = ({ login, questions }) => ({
    login,
    questions
});

export default connect(mapStateToProps)(Poll);