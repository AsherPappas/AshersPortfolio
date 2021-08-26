import React from 'react';
import {Link} from 'react-router-dom'

function P3 () {
    return(
        <div className="P3 rounded">
           <h2><Link className="text-white px-2" to="/Portfolio"> Here's some of my work</Link></h2>
           <h5 className="d-none d-md-block">My portfolio includes some projects of mine</h5>
        </div>
        )
}

export default P3;