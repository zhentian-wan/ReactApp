/**
 * Created by Answer1215 on 8/6/2015.
 */
var React = require('react'),
    Router = require('react-router');

var Repos = React.createClass({
    render: function(){
        return (
            <div>
                REPOS<br/>
                username: {this.props.username}<br/>
                repos: {this.props.repos}<br/>
            </div>
        )
    }
});

module.exports = Repos;