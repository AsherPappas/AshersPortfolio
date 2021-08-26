import React from 'react';
import Resume from '../assets/Resume2.pdf'

function Footer() {
    return (
        <div className="container Footer">
            <div className="row mt-4">
                <div className="col-md-3">
                    Github: <a href="https://github.com/AsherPappas" target="blank">
                        <img className="icon"
                            src="#" alt="..." />
                    </a>
                </div>
                <div className="col-md-3">

                    LinkedIn: <a href="www.linkedin.com/in/asherpappas" target="blank">
                        <img className="icon"
                            src="#" alt="..." />
                    </a>
                </div>
                <div className="col-md-3">
                    {/* Email */}
                 Email: <a href="mailto:ashpap.codes@gmail.com" target="blank">
                        <img className="icon"
                            src="#" alt="..." />
                    </a>
                </div>
                <div className="col-md-3">

                <a href={Resume} download={Resume} className="text-white">Download My Resume Here</a>

                </div>
            </div>
        </div>
    )
}
export default Footer; 