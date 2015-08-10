import React from 'react';
import UserProfile from './Github/UserProfile';
import Repos from './Github/Repos';
import Notes from './notes/Notes';
import Helpers from '../utils/Halper';
import Rebase from 're-base';

var base = Rebase.createClass('https://github-note-taker.firebaseio.com/')

class Profile extends React.Component{
    //In ES5, we use getInitialState, but with ES6, use constructor instead
    constructor(props){
        super(props);
        this.state = {
            notes: [],
            bio: {},
            repos: []
        }
    }
    init(){
        //ES5 this.getParams().useranme
        //ES6 this.router.getCurrentParams().username
        this.ref = base.bindToState(this.router.getCurrentParams().username, {
            context: this,
            asArray: true,
            state: 'notes'
        });

        Helpers.getGithubInfo(this.router.getCurrentParams().username)
            .then(function(data) {
                this.setState({
                    bio: data.bio,
                    repos: data.repos
                })
            }.bind(this)); //func.bind()
    }

    handleAddNote(newNote) {

        base.post(this.router.getCurrentParams().username, {
            data: this.state.notes.concat([newNote])
        });
    }
    componentWillMount(){
        this.router  = this.context.router;
    }
    componentDidMount() {
        //Here is where you're going to want to do all your AJAX requests.
        // It's where you're going to want to set up all your Firebase listeners.
        this.init();
    }
    componentWillReceiveProps() {
        base.removeBinding(this.ref);
        this.init();
    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }
    render() {
        var username = this.router.getCurrentParams().username;
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
                        addNote={this.handleAddNote.bind(this)}/>
                </div>
            </div>
        )
    }
}

Profile.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Profile;