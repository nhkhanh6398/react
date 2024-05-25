import { useEffect, Fragment } from 'react';
import '../App.css';
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Directional from "./Directional";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import Poll from "./Poll";
import CreatePoll from "./CreatePoll";
import NotFound from './NotFound';

export const defaultImage = 'https://png.pngtree.com/png-vector/20190820/ourlarge/pngtree-no-avatar-vector-isolated-on-white-background-png-image_1694546.jpg';

function App({ dispatch, isLogin }) {
  useEffect(() => {
    dispatch(handleInitialData());
  });

  return (
    <Fragment>
      <div className="container">
        {isLogin && <Navbar />}
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/*" element={<Directional><Dashboard /></Directional>} />
          <Route path="/leaderboard" exact element={<Directional><Leaderboard /></Directional>} />
          <Route path="/questions/:id" element={<Directional><Poll /></Directional>} />
          <Route path="/add" exact element={<Directional><CreatePoll /></Directional>} />
          <Route path="/notFound" exact element={<NotFound />} />
        </Routes>
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ login }) => ({
  isLogin: !!login,
});

export default connect(mapStateToProps)(App);