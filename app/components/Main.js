/**
 * Created by Answer1215 on 8/5/2015.
 */

var React = require('react');

var Main = React.createClass({
    render: function(){
        return (
            <div>
                Hello World
            </div>
        )
    }
});

React.render(<Main />, document.getElementById('app'));