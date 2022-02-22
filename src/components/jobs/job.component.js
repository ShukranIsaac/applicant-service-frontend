import React from 'react';
import { Link } from 'react-router-dom'

const Job = ({ job }) => {
    // const { job } = props;

    return (<div className="card bg-light flex w-60 list-group-item flex-fill align-items-center">
        <div className="flex d-flex justify-content-between">
            <div className="text-muted flex mb-3 d-flex pull-left">Part Time</div>
            <div className="text-muted flex mb-3 d-flex pull-right">Posted Last Week</div>
        </div>
        <a href="./employer-details.html" className="flex d-flex mb-3 justify-content-center">
            <img className="company-logo" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
        </a>
        <a href="./employer-details.html" className="flex d-flex justify-content-center">University of Malawi</a>
        <p className="flex d-flex text-muted justify-content-center">Chirunga Road, Box 280, Zomba</p>
        <p className="paragraph flex d-flex flex-wrap justify-content-center">
            <b>Job Title:</b>{ job?.name }</p>
        <p className="paragraph flex d-flex flex-wrap justify-content-center">
            <b>Job Description:</b>{ job?.description }
        </p>
        <Link type="button" to="/apply"
            className="btn btn-primary flex d-flex justify-content-center">Apply</Link>
    </div>);
}

export default Job;