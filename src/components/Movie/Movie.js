import React from 'react'
import Navigation from '../Common/Navigation';
import MovieDetail from '../Common/MovieDetail'
import MovieCastDetails from '../Common/MovieCastDetails';
import ContentBody from '../Common/ContentBody';
import Loader from '../Common/Loader';
import { API_URL, API_KEY } from '../../config/config';
import './Movie.css';

class Movie extends React.Component{
    state = {
        movie: null,
        showLoader: false,
        actors: null,
        directors: []
    }

    componentDidMount(){
        this.setState({ showLoader: true})

        let url = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
        this.getMovies(url);
    }

    getMovies = async (url) => {
        try{
            const response = await fetch(url);
            if(response.ok){
                const moviedata = await response.json();
                this.setState({ movie: moviedata }, async () => {
                    // ... then fetch actors in the setState callback function
                    url = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
                    const result = await fetch(url);
                    if(result.ok){
                        const resultInJson = await result.json();
                        const directors = resultInJson.crew.filter( (member) => member.job === "Director");

                        this.setState({
                            actors: resultInJson.cast,
                            directors,
                            showLoader: false
                          })
                    }
                })

                // console.log(this.state.actors)
                // console.log(this.state.directors)
            }
            else{
                this.setState({showLoader: false})
                console.log('http error : ' ,response.status);
            }
        }
        catch(err){
            console.log('Error while fetching movies data: ',err);
        }
        
    }

    render(){
        return(
            <div className="movie">
                {this.state.movie ?
                <React.Fragment>
                    <Navigation movie={this.props.location.movieName} />
                    <MovieDetail movie={this.state.movie} directors={this.state.directors} time={this.state.movie.runtime} budget={this.state.movie.budget} revenue={this.state.movie.revenue} />
                </React.Fragment>
                : null }
                {this.state.actors ?
                <div className="movie-grid">
                <ContentBody header={'Actors'}>
                    {this.state.actors.map( (element, index) => (
                    <MovieCastDetails key={index} actor={element} />
                    ))}
                </ContentBody>
                </div>
                : null }
                {!this.state.actors && !this.state.showLoader ? <h1>No movie found</h1> : null }
                {this.state.showLoader ? <Loader /> : null}
            </div>
        )
    }
}

export default Movie
