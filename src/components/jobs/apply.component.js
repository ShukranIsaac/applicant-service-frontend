import React from 'react';

import { Link } from 'react-router-dom'

import './apply.css';

const Apply = () => {
    return (<div class="wrapper">
        <form class="container">
            <div class="upload-title">
                Upload a document (like a Resume or CV) and see the structured data extracted.
            </div>
            <div class="progress upload-progress">
                <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: '20%' }}>
                </div>
            </div>
            <div class="upload-container file-upload">
                <div class="border-container file-upload-wrap">
                    <input class="file-upload-input" type='file' accept="*" />
                    <div class="icons fa-3x">
                        <i class="fa fa-file-image-o" data-fa-transform="shrink-3 down-2 left-6 rotate--45"></i>
                        <i class="fa fa-file-text-o" data-fa-transform="shrink-2 up-4"></i>
                        <i class="fa fa-file-pdf-o" data-fa-transform="shrink-3 down-2 right-6 rotate-45"></i>
                    </div>
                    <div class="drag-text">
                        <h3>Drag and drop files here, or
                            <Link to="#" id="file-browser">browse</Link> your computer.
                        </h3>
                    </div>
                    {/* <!-- <div class="file-upload-content">
                        <div class="file-title-wrap">
                            <button type="button" onclick="removeUpload()" class="remove-image">-<span
                                    class="image-title"></span></button>
                        </div>
                    </div> --> */}
                </div>
            </div>
        </form>
    </div>);
}

export default Apply;