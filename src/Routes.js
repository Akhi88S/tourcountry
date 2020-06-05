import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page from './Page';
import Search from './Search';

//import history from './history';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                  <Route path="/" exact component={Search} />
                    <Route path="/page" exact component={Page} />
                    <Route path="*" component={Search} />
                    <Route path='/page/online' component={() => { 
     window.location.href = 'https://www.google.com'; 
     return null;
}}/>       
                </Switch>
            </Router>
        );
    }
}
export default Routes;
