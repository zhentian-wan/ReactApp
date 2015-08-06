/**
 * Created by Answer1215 on 8/6/2015.
 */
var React = require('react'),
    Router = require('react-router');

//{this.props.username} username is getting from profile.js <UserProfile username={username} bio={this.state.bio}/>
//profile.js is parent, UserProfile.js is child, the child receive the state from parent by props
var UserProfile = React.createClass({
    render: function(){
        return (
            <div>
                USER PROFILE<br/>
                username: {this.props.username}<br/>
                bio: {this.props.bio}<br/>
            </div>
        )
    }
});

module.exports = UserProfile;

