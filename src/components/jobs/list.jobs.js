import React, { useState, useEffect } from 'react'
import JobItem from './job.component'

export const JobListing = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/v1/users/II4a31D3z2s/job-listings", { method: 'GET' })
            .then(response => response.json())
            .then(response => setJobs(response.content))
            .catch(err => console.log(err))
    }, [])

    return (<div className="card-columns">
        { jobs.map((job, index) => <JobItem key={index} job={job} />) }
    </div>)
}

export default JobListing