import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import '../Style/SearchOption.css';

class SearchOption extends Component {
    state = {
        inputValue: ''
    }

    timeout = null
    searchMovie = (event) => {
        this.setState({
            inputValue: event.target.value
        })
        clearTimeout(this.timeout)

        this.timeout = setTimeout(()=>{
            this.props.callSearchMovie(this.state.inputValue)
        },1000)
    }

    render(){
        return(
            <div className="searchoption">
                <div className="searchoption-content">
                    <input type="text" value={this.state.inputValue}  placeholder="Search" className="searchoption-input" onChange={this.searchMovie} />
                    <FontAwesome name="search" size="2x" className="searchoption-fa-search" />
                </div>
            </div>
        )
    }
}

export default SearchOption