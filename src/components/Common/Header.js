import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import '../Style/Header.css';

const Header = () => {
    return ( 
        <div className="header">
            <div className="header-content">
                <Link to="/">
                    <FontAwesome className="header-logo-left fa-film" name="film" size="5x" />
                </Link>
                <img className="header-logo-right" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="The Movie Database (TMDb)" width="130" height="94" />
            </div>
        </div>
        
    )
}

export default Header