import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Loadable from 'react-loadable';
const Loading = () => <div>Loading...</div>;
const Home = Loadable({
    loader: () => import('./../views/home'),
    loading: Loading,
});
const About = Loadable({
    loader: () => import('./../views/about'),
    loading: Loading,
});
const News = Loadable({
    loader: () => import('./../views/news'),
    loading: Loading,
});
const Routers = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/news' component={News}/>
        </Switch>
    </Router>
)

export default Routers;