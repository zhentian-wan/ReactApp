/**
 * Created by Answer1215 on 8/5/2015.
 */

var React = require('react'),
    RouteHandler = require('react-router').RouteHandler,
    SearchGithub = require('./SearchGithub');

//<RouteHandler /> will be swapped out, replace with whatever going to be passed in
//it is just like ng-view in AngularJS
var Main = React.createClass({
    render: function(){
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
                        <SearchGithub />
                    </div>
                </nav>
                <div className="container">
                    <RouteHandler />
                </div>
            </div>
        )
    }
});

module.exports = Main;