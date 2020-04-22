import React from 'react';
import {Link} from 'react-router-dom';
import '../Style/MovieThumbnail.css';

const MovieThumbnail = (props) => {
    return(
        <div className="moviethumbnail">
            {props.clickable ?
                <Link to={{ pathname:`/${props.movieId}`, movieName:`${props.movieName}` }}>
                    <img className="clickable" src={props.image} alt="movie thumb" />
                </Link>
                :
                <img src={props.image} alt="movie thumb" />
            }
        </div>
    )
}

export default MovieThumbnail
