import React from 'react';
import Router from 'react-router';
import NoteList from './Noteslist';
import AddNote from './AddNote';

class Note extends React.Component{
    render(){
        return (
            <div>
                <h3>Notes for {this.props.username}</h3>
                username={this.props.username}
                addNote={this.props.addNote}/>
                <NoteList notes={this.props.notes}/>
            </div>
        )
    }
}

Note.propTypes = {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
};

export default Note;
