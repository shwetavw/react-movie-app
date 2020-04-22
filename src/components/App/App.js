import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import Home from '../Home/Home';
import PageNotFound from '../Common/PageNotFound';
import Movie from '../Movie/Movie';

const App = () => {
    return (
        <Router>
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/:movieId" component={Movie} />
                    <Route component={PageNotFound} />
                </Switch> 
                <Footer />           
            </React.Fragment>
        </Router>
    )    
}

export default App