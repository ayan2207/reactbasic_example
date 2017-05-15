import * as React from 'react';

import Note from './Note'

declare var require: any;
const styles = require('./style.css')

interface NoteListProps {
    notes: Array<any>
    RemoveNote: any
};

// This component is used to render the list of notes
// passed down from the parent
const NoteList = (props: NoteListProps) => {

    // Extracting the props into a constant (same as this.props.name)
    const { notes } = props

    // Map function which returns a <Note/> component for each
    // Note item in the list
    const notesMapper = notes.map((note: any, index: any) => (
        <Note key={index} note={note} index={index} RemoveNote={(index) => props.RemoveNote(index)} />
    ));

    return (
        <div>
            <p>Notes: ({notes.length})</p>

            {/* Inline if statement to either render the notes or show a message*/}
            {
                (notes.length == 0) ?
                    <div className={styles.info}>No Notes to display</div> :
                    <div>{notesMapper}</div>
            }
        </div>
    );
}

export default NoteList