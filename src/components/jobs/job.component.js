import React from 'react';
import { Link } from 'react-router-dom'

const Job = (props) => {
    return (<div class="card bg-light flex w-60 list-group-item flex-fill align-items-center">
        <div class="flex d-flex justify-content-between">
            <div class="text-muted flex mb-3 d-flex pull-left">Part Time</div>
            <div class="text-muted flex mb-3 d-flex pull-right">Posted Last Week</div>
        </div>
        <a href="./employer-details.html" class="flex d-flex mb-3 justify-content-center">
            <img class="company-logo" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
        </a>
        <a href="./employer-details.html" class="flex d-flex justify-content-center">University of Malawi</a>
        <p class="flex d-flex text-muted justify-content-center">Chirunga Road, Box 280, Zomba</p>
        <p class="paragraph flex d-flex flex-wrap justify-content-center">
            <b>Job Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam velit,
            imperdiet varius augue dapibus, pretium efficitur tortor. Cras eu nisi sit amet ante iaculis semper.
            Praesent et sollicitudin urna, et cursus tellus. Cras faucibus tempor tempor. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Proin dapibus nunc augue, eget tempor arcu pharetra at. In
            libero massa, tincidunt in risus in, porta lobortis sem.
        </p>
        <Link type="button" to="/apply"
            class="btn btn-primary flex d-flex justify-content-center">Apply</Link>
    </div>);
}

export default Job;