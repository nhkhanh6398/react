import { connect } from "react-redux";
import { useState, useEffect } from "react";
import Box from "./Box";
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Dashboard = ({ login, questions, users }) => {

    // Initial useState
    const [statusView, setStatusView] = useState("newQuestions");
    const [newQuestionList, setNewQuestionList] = useState([]);
    const [answerQuestionList, setAnswerQuestionList] = useState([]);
    const location = useLocation();
    if (login === undefined || login === null || questions === undefined || questions === null || users === undefined || users === null ) {
        <Navigate to={`/login`} replace state={{ path: location.pathname }} />;
    }
    useEffect(() => {
        // Process set list view new question
        setNewQuestionList(
            questions.filter((question) => !question.optionOne.votes.includes(login.id)
                && !question.optionTwo.votes.includes(login.id))
        )
        // Process set list view answer question
        setAnswerQuestionList(
            questions.filter((question) => question.optionOne.votes.includes(login.id)
                || question.optionTwo.votes.includes(login.id))
        )
    }, [questions]);

    // Process set status to show list question
    const handleChangeStatusView = (event) => {
        setStatusView(event.target.value);
    }

    return (
        <div>
            <h1 className="text-center">Dashboard</h1>
            <select className="form-control mt-2 mb-2 col-4" onChange={handleChangeStatusView} defaultValue="all">
                <option value="all">All</option>
                <option value="newQuestions">New Questions</option>
                <option value="answeredQuestions">Answered Questions</option>
            </select>
            {(statusView === 'newQuestions' || statusView === 'all') &&
                (
                    <div className="border rounded mb-5">
                        <h2 className="text-center border border-light">New Questions Unanswered</h2>
                        {
                            newQuestionList.length > 0 ?
                                <div className="row row-cols-1 row-cols-md-4 pl-3 pr-3">
                                    {
                                        newQuestionList.map((question, key) => (
                                            <div className="col mb-4" key={key}>
                                                <div className="card h-100">
                                                    <Box question={question} user={users[question.author]} />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                :
                                <div className="text-center">No polls available</div>
                        }
                    </div>
                )
            }
            {(statusView === 'answeredQuestions'|| statusView === 'all') &&
                (
                    <div className="border rounded mb-5">
                        <h2 className="text-center border border-light">Done</h2>
                        {
                            answerQuestionList.length > 0 ?
                                <div className="row row-cols-1 row-cols-md-4 pl-3 pr-3">
                                    {
                                        answerQuestionList.map((question, key) => (
                                            <div className="col mb-4" key={key}>
                                                <div className="card h-100">
                                                    <Box question={question} user={users[question.author]} />
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                :
                                <div className="text-center">No answered available</div>
                        }
                    </div>
                )
            }
        </div>
    );
}

const mapStateToProps = ({ login, questions, users }) => ({
    login,
    // Sort from the most recently created (top) to the least recently created (bottom)
    questions: Object.values(questions).sort(
        (a, b) => b.timestamp - a.timestamp
    ),
    users
});

export default connect(mapStateToProps)(Dashboard);