import React from 'react';
import '../Style/ShowMore.css';

const ShowMore = (props) => {
    return(
        <div className="showmorebtn" onClick={props.showMoreMovies}>
            <p>{props.text}</p>
        </div>
    )
}

export default ShowMore