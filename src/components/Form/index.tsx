import * as React from 'react';

declare var require: any;
const styles = require('./style.css')

interface BoxProps {
    AddNote: any;
};

interface BoxState {
    title?: string,
    text?: string,
};

// This component renders the form to create a note
class Form extends React.Component<BoxProps, BoxState> {

    constructor(props: any) {
        super(props)

        // We control the values of the fields from the state
        // also known as "Controlled Components"
        this.state = { title: '', text: '' }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Set the value of the name filed
    handleNameChange(event: any) {
        this.setState({ title: event.target.value })
    }

    // Set the value of the text filed
    handleMessageChange(event: any) {
        this.setState({ text: event.target.value })
    }

    // On form submit call the AddNote function of the <Home /> component
    handleSubmit(event) {
        event.preventDefault();
        this.props.AddNote({ title: this.state.title, text: this.state.text })
        this.setState({ title: '', text: '' })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Title" value={this.state.title} onChange={this.handleNameChange} required />
                    <textarea placeholder="Note" value={this.state.text} onChange={this.handleMessageChange} required />
                    <div className={styles.buttonContainer}>
                        <button type="submit">Add</button>
                    </div>
                </form>


            </div>
        );
    }
}

export default Form;