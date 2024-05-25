import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleAddQuestion } from "../actions/questions";
import { SET_ITEM_NAV, HOME } from "../actions/shared";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreatePoll = ({ dispatch  }) => {
    const navigate = useNavigate();

    // Initial useState
    const [optionOne, setOptionOne] = useState("");
    const [optionTwo, setOptionTwo] = useState("");
    const [invalidOptionOne, setInvalidOptionOne] = useState('');
    const [invalidOptionTwo, setInvalidOptionTwo] = useState('');

    // Process handle submit form
    const handleForSubmit = (e) => {
        e.preventDefault();
        if (!optionOne || !optionTwo) {
            setInvalidOptionOne(optionOne ? '' : 'is-invalid');
            setInvalidOptionTwo(optionTwo ? '' : 'is-invalid');
            return;
        }
        dispatch(handleAddQuestion(optionOne, optionTwo));
        dispatch({ type: SET_ITEM_NAV, itemNav: HOME });
        localStorage.setItem('reLogin', 'true');
        navigate("/");
        toast("You created optionOne: " + optionOne + " And OptionTwo: " + optionTwo);
    };

    return (
        <div>
            <h1 className="d-flex justify-content-center">Would You Rather</h1>
            <h2 className="d-flex justify-content-center">Create Your Own Poll?</h2>
            <form className="needs-validation" onSubmit={handleForSubmit} noValidate>
                <ToastContainer />
                <div className="form-row">
                    <div className="col-md mb-3">
                        <label htmlFor="optionOne">First Option</label>
                        <input value={optionOne} onChange={(e) => { setOptionOne(e.target.value) }} type="text"
                            name="optionOne" id="optionOne" className={"form-control " + invalidOptionOne} data-testid="optionOne" />
                        {(invalidOptionOne === 'is-invalid') &&
                            <div className="invalid-feedback">
                                Can not be empty!
                            </div>
                        }
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md mb-3">
                        <label htmlFor="optionTwo">Second Option</label>
                        <input value={optionTwo} onChange={(e) => { setOptionTwo(e.target.value) }} type="text"
                            name="optionTwo" id="optionTwo" className={"form-control " + invalidOptionTwo} data-testid="optionTwo" />
                        {(invalidOptionTwo === 'is-invalid') &&
                            <div className="invalid-feedback">
                                Can not be empty!
                            </div>
                        }
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <button type="submit" className="btn btn-primary" data-testid="submit"> Submit </button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = (login) => ({
    isLogin: !!login
});

export default connect(mapStateToProps)(CreatePoll);