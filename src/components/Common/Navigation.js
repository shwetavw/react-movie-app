import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Navigation.css'

const Navigation = (props) => {
    return(
        <div className="navigation">
            <div className="navigation-content">
                <Link to="/"><p>Home</p></Link>
                <p>/</p>
                <p>{props.movie}</p>
            </div>
        </div>
    )
}

export default Navigation