import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Apply from './components/jobs/apply.component';
import JobListing from './components/jobs/list.jobs';

function App() {
    return (
        <div class="container mt-2">
            <Router>
                <Routes>
                    <Route path="/" element={<JobListing />} />
                    <Route path="/apply" element={<Apply />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
