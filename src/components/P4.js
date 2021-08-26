import React from 'react';
import Resume from '../assets/Resume2.pdf'

function P4() {
    return (
        <div className="P4 rounded">
            <h2>Socials</h2>

            <div className="row mt-4">
                <div className="col-md-4">
                    Github: <a href="https://github.com/AsherPappas" target="blank">
                        <img className="icon"
                            src="#" alt="..." />
                    </a>
                </div>
                <div className="col-md-4">

                    LinkedIn: <a href="https://www.linkedin.com/in/asherpappas" target="blank">
                        <img className="icon"
                            src="#" alt="..." />
                    </a>
                </div>
                <div className="col-md-4">
                    {/* Email */}
                 Email: <a href="mailto:ashpap.codes@gmail.com" target="blank">
                        <img className="icon"
                            src="#" alt="..." />
                    </a>
                </div>
            </div>
            <div className="mt-2">
            <h4><a href={Resume} download={Resume} className="text-info">Download My Resume Here</a></h4>
            </div>

        </div>
    )
}

export default P4;