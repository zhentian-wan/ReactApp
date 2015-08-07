/**
 * Created by Answer1215 on 8/6/2015.
 */
var React = require('react'),
    Router = require('react-router'),
    UserProfile = require('./Github/UserProfile'),
    Repos = require('./Github/Repos'),
    Notes = require('./notes/Notes'),
    ReactFireMixin = require('reactfire'),
    Firebase = require('firebase'),
    Helpers = require('../utils/Halper');

var Profile = React.createClass({
    //What a mix-in does is it basically takes your component state and adds some properties to it.
    mixins: [Router.State, ReactFireMixin], //Router.state is going to allow us to query the route parameter and get that specific username that we're wanting.
    getInitialState: function() {
        return {
            notes: ['note1', 'note2'],
            bio: {name: 'zhentian'},
            repos: [1, 2, 3, 4]
        }
    },
    init: function() {
        var childRef = this.ref.child(this.getParams().username);
        this.bindAsArray(childRef, 'notes');

        Helpers.getGithubInfo(this.getParams().username)
            .then(function(data) {
                this.setState({
                    bio: data.bio,
                    repos: data.repos
                })
            }.bind(this)); //func.bind()
    },
    handleAddNote: function(newNote) {
        this.ref.child(this.getParams().username).set(this.state.notes.concat([newNote]));
    },
    componentDidMount: function() {
        //Here is where you're going to want to do all your AJAX requests.
        // It's where you're going to want to set up all your Firebase listeners.
        this.ref = new Firebase('https://github-note-taker.firebaseio.com/');
        this.init();
    },
    componentWillReceiveProps: function() {
        this.unbind('notes'); //Do not listen to the old notes
        this.init();
    },
    componentWillUnmount: function() {
        this.unbind('notes');
    },
    render: function() {
        var username = this.getParams().username;
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={username} bio={this.state.bio}/>
                </div>
                <div className="col-md-4">
                    <Repos username={username} repos={this.state.repos}/>
                </div>
                <div className="col-md-4">
                    <Notes
                        username={username}
                        notes={this.state.notes}
                        addNote={this.handleAddNote}/>
                </div>
            </div>
        )
    }
});

module.exports = Profile;