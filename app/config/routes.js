/**
 * Created by Answer1215 on 8/6/2015.
 */

var React = require('react'),
    Main = require('../components/Main'),
    Home = require('../components/Home'),
    Profile = require('../components/Profile'),
    Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute,
    Route = Router.Route;

//In main route, we may have more routers, if none of those routes match,
//DefaultRoute will be rendered, then Home module will be displayed.
module.exports = (
    <Route name="app" path="/" handler={Main}>
        <Route name="profile" path="profile/:username" handler={Profile} />
        <DefaultRoute handler={Home} />
    </Route>
);
