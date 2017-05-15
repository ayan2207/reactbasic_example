import * as React from 'react';

declare var require: any;
const styles = require('./style.css')

interface Note {
    title: string,
    text: string
}

interface NoteProps {
    note: Note;
    index: number;
    RemoveNote: any;
};

interface NoteState {
    showNote: boolean;
};

// This component renders a single Note object. 
class Note extends React.Component<NoteProps, NoteState> {

    constructor(props: any) {
        super(props)
        // We set the default state of the note to be hidden
        this.state = { showNote: false }
    }

    // Once component mounts we display the note causing the
    // css transition to fade in.
    componentDidMount() {
        var that = this;
        setTimeout(function () {
            that.setState({ showNote: true })
        }, 100);
    }

    render() {
        const { note } = this.props
        return (
            <div>
                <div style={{ opacity: (this.state.showNote) ? 1 : 0 }} className={styles.noteWrapper}>
                    <div className={styles.title}>{note.title}</div>
                    <div className={styles.text}>{note.text}</div>
                    <div onClick={(index) => this.props.RemoveNote(this.props.index)} className={styles.bin}>X</div>
                </div>
            </div>
        );
    }
}

export default Note;