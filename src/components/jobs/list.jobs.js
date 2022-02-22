import React from 'react';
import Job from './job.component';

export class JobListing extends React.Component {
    constructor() {
        super()
        this.state = {
            jobs: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/v1/users/YiieW1xVVxI/job-listings")
            .then(response => response.json())
            .then(response => {
                // console.log(response)
                this.setState({ jobs: response.content })
            })
            .catch(err => console.log(err))
    }

    render() {
        const { jobs } = this.state

        return (<div className="card-columns">
            {
                jobs.map(job => {
                    return <Job key={job.uid} job={job} />
                })
            }
        </div>)
    }
}

export default JobListing