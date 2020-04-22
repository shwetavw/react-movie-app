import React from 'react';
import FontAwesome from 'react-fontawesome';
import MovieThummbnail from './MovieThumbnail';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config/config';
import { getConvertedTime, getConvertedMoney } from '../../utils/utils';
import '../Style/MovieDetail.css';

const MovieDetail = (props) => (
  <React.Fragment>
    <div className="moviedetail"
      style={{
        background: props.movie.backdrop_path ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.movie.backdrop_path}')` : '#000'
      }}
    >
      <div className="moviedetail-content">
        <div className="moviedetail-thumb">
          <MovieThummbnail
            image={props.movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}` : './images/no_image.jpg'}
            clickable={false}
          />
        </div>
        <div className="moviedetail-text">
          <h1>{props.movie.title}</h1>
          <h3>PLOT</h3>
          <p>{props.movie.overview}</p>
          <h3>IMDB RATING</h3>
          <div className="rating">
            <meter min="0" max="100" optimum="100" low="40" high="70" value={ props.movie.vote_average * 10}></meter>
            <p className="score">{props.movie.vote_average}</p>
          </div>
          {props.directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}
          {props.directors.map( (director, index) => {
            return <p key={index} className="director">{director.name}</p>
          })}
        </div>
      </div>
    </div>
    <div className="moviedetailstrip">
    <div className="moviedetailstrip-content">
      <div className="moviedetailstrip-content-col">
        <FontAwesome className="fa-time" name="clock-o" size="2x" />
        <span className="moviedetailstrip-info">Running time: {getConvertedTime(props.time)}</span>
      </div>
      <div className="moviedetailstrip-content-col">
        <FontAwesome className="fa-budget" name="money" size="2x" />
        <span className="moviedetailstrip-info">Budget: {getConvertedMoney(props.budget)}</span>
      </div>
      <div className="moviedetailstrip-content-col">
        <FontAwesome className="fa-revenue" name="ticket" size="2x" />
        <span className="moviedetailstrip-info">Revenue: {getConvertedMoney(props.revenue)}</span>
      </div>
    </div>
  </div>
  </React.Fragment>
  )

export default MovieDetail

