import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import './apply.css';

const Apply = () => {
    let [job, setJob] = useState({})

    const handleJobChange = e => {
        const name = e.target.name
        const value = e.target.value
        // job ={
        //     name:"",
        //     company: "",
        //     description:"",
        //     roles: "",
        //     tags: ""
        // }
        setJob({ ...job, [name]: value }) 
    }

    const handleSubmit = async e => {
        e.preventDefault()

        // modify the job object tags property to be an array of
        // job ={
        //     name:"",
        //     company: "",
        //     description:"",
        //     roles: "",
        //     tags: [ { name: "" } ]
        // }
        Object.assign(job, { tags: [{ name: job.tags }] })

        await fetch("http://localhost:8080/v1/users/II4a31D3z2s/job-listings", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(job)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                // setJobs({ jobs: response?.content })
            }).catch(err => console.log(err))
    }

    return (<div className="wrapper">
        <form className="container" onSubmit={handleSubmit}>
            <div className="upload-title">
                Upload a document (like a Resume or CV) and see the structured data extracted.
            </div>
            <div className="progress upload-progress">
                <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: '20%' }}>
                </div>
            </div>
            <div className="upload-container file-upload">
                <div className="border-container file-upload-wrap">
                    <input className="file-upload-input" type='file' accept="*" />
                    <div className="icons fa-3x">
                        <i className="fa fa-file-image-o" data-fa-transform="shrink-3 down-2 left-6 rotate--45"></i>
                        <i className="fa fa-file-text-o" data-fa-transform="shrink-2 up-4"></i>
                        <i className="fa fa-file-pdf-o" data-fa-transform="shrink-3 down-2 right-6 rotate-45"></i>
                    </div>
                    <div className="drag-text">
                        <h3>Drag and drop files here, or
                            <Link to="#" id="file-browser">browse</Link> your computer.
                        </h3>
                    </div>
                    {/* <!-- <div className="file-upload-content">
                        <div className="file-title-wrap">
                            <button type="button" onclick="removeUpload()" className="remove-image">-<span
                                    className="image-title"></span></button>
                        </div>
                    </div> --> */}
                </div>
            </div>

            <input name="name" placeholder="Enter job name" onChange={handleJobChange} />
            <input name="company" placeholder="Enter company name" onChange={handleJobChange} />
            <input name="description" placeholder="Enter job description" onChange={handleJobChange} />
            <input name="roles" placeholder="Enter job roles" />
            <input name="tags" placeholder="Enter job tags" onChange={handleJobChange} />

            <input type="submit" value="Upload" />
        </form>
    </div>);
}

export default Apply;