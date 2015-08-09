import React from 'react';

class AddNote extends React.Component {
    handleSubmit() {
        var newNote = this.refs.note.getDOMNode().value;
        this.refs.note.getDOMNode().value = '';
        this.props.addNote(newNote);
    }

    /*
    * one tricky thing that we need to do is when you're using react.createclass, that this keyword is automatically autobound to the correct context for you, which makes it really convenient. But one gotcha you're going to have over and over again with ES6 classes in react is that this keyword is not autobound.
    * */
    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" ref="note" placeholder="Add New Note"/>
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button" onClick={this.handleSubmit.bind(this)}> Submit
                  </button>
                </span>
            </div>
        )
    }
}

AddNote.propTypes = {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
};

export default AddNote;