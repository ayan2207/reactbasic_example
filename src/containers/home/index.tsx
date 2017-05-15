
import * as React from 'react';
import Form from '../../components/Form'
import NotesList from '../../components/NotesList'

declare var require: any;
const styles = require('./style.css')

interface HomeProps { };
interface HomeState {
  notes: any[];
};


// The main app container holding the state of all notes 
// created.
class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: any) {
    super(props)

    // Component state
    this.state = { notes: [] }

    // Local function bindings
    this.AddNote = this.AddNote.bind(this)
    this.RemoveNote = this.RemoveNote.bind(this)
  }

  // Adds a new note object to the state
  AddNote(message: any) {
    this.setState({ notes: this.state.notes.concat(message) })
  }

  // Removes a note object from the state
  RemoveNote(index) {
    var newnotes = this.state.notes;
    newnotes.splice(index, 1);
    this.setState({ notes: newnotes })
  }
  
  render() {
    return (
      <div className={styles.container}>
        <Form AddNote={(note) => this.AddNote(note)} />
        <NotesList notes={this.state.notes} RemoveNote={(index) => this.RemoveNote(index)} />
      </div>
    );
  }
}

export default Home
