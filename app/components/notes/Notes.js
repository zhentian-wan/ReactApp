/**
 * Created by Answer1215 on 8/6/2015.
 */
var React = require('react'),
    Router = require('react-router');

var Notes = React.createClass({
    render: function(){
        return (
            <div>
                NOTES<br/>
                username: {this.props.username}<br/>
                notes: {this.props.notes}<br/>
            </div>
        )
    }
});

module.exports = Notes;