import Loadable from 'react-loadable';
import {Route, Switch} from "react-router-dom";
import React from "react";
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

export default function () {
    return(
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
    <Route path='/news' component={News}/>
    )
}