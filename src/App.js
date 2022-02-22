import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Apply from './components/jobs/apply.component';
import JobListing from './components/jobs/list.jobs';
import UserList from './components/users';

const App = () => {
    return (<div className="container mt-2">
        <Router>
            <Routes>
                <Route exact path="/" element={<JobListing />} />
                <Route exact path="/apply" element={<Apply />} />
                <Route exact path="/users" element={<UserList />} />
                <Route exact path="/users/:uid" element={<UserList />} />
            </Routes>
        </Router>
    </div>)
}

export default App;
