import React from 'react';
import { IMAGE_BASE_URL } from '../../config/config';
import '../Style/MovieCastDetails.css';

const MovieCastDetails = (props) => {
    const POSTER_SIZE = "w154";
  
    return (
      <div className="moviecastdetails">
        <img
          src={props.actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.actor.profile_path}` : './images/no_image.jpg'}
          alt="actorthumb"
        />
        <span className="moviecastdetails-name">{props.actor.name}</span>
        <span className="moviecastdetails-character">{props.actor.character}</span>
      </div>
    )
  }

export default MovieCastDetails