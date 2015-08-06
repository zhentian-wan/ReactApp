/**
 * Created by Answer1215 on 8/6/2015.
 */
var React = require('react'),
    Router = require('react-router'),
    UserProfile = require('./Github/UserProfile'),
    Repos = require('./Github/Repos'),
    Notes = require('./notes/Notes');

var Profile = React.createClass({
    //What a mix-in does is it basically takes your component state and adds some properties to it.
    mixins: [Router.State], //Router.state is going to allow us to query the route parameter and get that specific username that we're wanting.
    getInitialState: function() {
        return {
            notes: ['note1', 'note2'],
            bio: {name: 'zhentian'},
            repos: [1,2,3,4]
        }
    },
    render: function() {
        var username = this.getParams().username;
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={username} bio={this.state.bio}/>
                </div>
                <div className="col-md-4">
                    <Repos username={username} repos={this.state.repos} />
                </div>
                <div className="col-md-4">
                    <Notes username={username} notes={this.state.notes} />
                </div>
             </div>
        )
    }
});

module.exports = Profile;