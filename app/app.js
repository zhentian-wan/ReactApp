/**
 * Created by Answer1215 on 8/6/2015.
 */

var React = require('react'),
    Router = require('react-router'),
    routers = require('./config/routes');

Router.run(routers, function(Root) {
    React.render(<Root />, document.getElementById('app'));
});