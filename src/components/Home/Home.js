import React from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from '../../config/config';
import Banner from '../Common/Banner';
import SearchOption from '../Common/SearchOption';
import ContentBody from '../Common/ContentBody';
import MovieThumbnail from '../Common/MovieThumbnail';
import Loader from '../Common/Loader';
import ShowMore from '../Common/ShowMore';
import './Home.css';

class Home extends React.Component {
    state = {
        movies: [],
        bannerImage: null,
        searchText: '',
        currentPage: 0,
        totalPages: 0,
        showLoader: false
    }

    componentDidMount() {
        this.setState({showLoader: true});
        const url = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        this.getMovies(url);
        
    }

    getMovies = async (url) => {
        try{
            const response = await fetch(url);
            if(response.ok){
                const moviesdata = await response.json();
                this.setState({
                    movies: [...this.state.movies, ...moviesdata.results],
                    bannerImage: moviesdata.results[0],
                    currentPage: moviesdata.page,
                    totalPages: moviesdata.total_pages,
                    showLoader: false
                })
            }
            else{
                console.log('http error : ' ,response.status);
            }
        }
        catch(err){
            console.log('Error while fetching movies data: ',err);
        }
        
    }

    showMoreMovies = () => {
        this.setState({showLoader: true});
        let url = ''
        if(this.state.searchText !== ''){
            url = `${API_URL}search/movie?api_key=${API_KEY}&query=${this.state.searchText}&language=en-US&page=${this.state.currentPage + 1}`;
        }
        else{
            url = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;            
        }
        
        this.getMovies(url);
    }

    searchMovie = (searchText) => {
        this.setState({
            movies: [],
            showLoader: true,
            searchText: searchText            
        })

        let url = '';
        if(searchText !== ''){
            url = `${API_URL}search/movie?api_key=${API_KEY}&query=${this.state.searchText}&language=en-US`;
        }else{
            url = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        }

        this.getMovies(url);
    }

    render() {
        return ( 
            <div className="home"> 
                {this.state.bannerImage 
                    ? <Banner bannerImage = {this.state.bannerImage} />
                    : null
                }
                <SearchOption callSearchMovie = {this.searchMovie}/>
                <div className="home-grid">
                    <ContentBody header={this.state.searchText ? 'Search Result' : 'Popular Movies'} loading={this.state.showLoader}>
                    {this.state.movies.map((element, index)=>{
                        return <MovieThumbnail 
                            key={index} 
                            clickable={true}
                            image= {element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}/${element.poster_path}` : './images/no_image.jpg'}
                            movieId={element.id}
                            movieName={element.original_title}
                         />
                    })
                    }
                    </ContentBody>
                    {this.state.showLoader ? <Loader /> : null}
                    {(this.state.currentPage <= this.state.totalPages && !this.state.showLoader)
                        ? <ShowMore showMoreMovies={this.showMoreMovies} text="Show More" /> : null
                    }
                </div>
            </div>
        )
    }
}

export default Home