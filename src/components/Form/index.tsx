import * as React from 'react';

declare var require: any;
const styles = require('./style.css')

interface BoxProps {
    AddMessage: any;
};

interface BoxState {
    name?: string,
    message?: string,
};

class Form extends React.Component<BoxProps, BoxState> {

    constructor(props: any) {
        super(props)
        this.state = { name: '', message: '' }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event: any) {
        this.setState({ name: event.target.value })
    }

    handleMessageChange(event: any) {
        this.setState({ message: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.AddMessage({name: this.state.name, message: this.state.message})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: 
                        <input value={this.state.name} onChange={this.handleNameChange} />
                    </label><br/>
                    <label>Message: 
                        <input value={this.state.message} onChange={this.handleMessageChange} />
                    </label>
                    <button type="submit"></button>
                </form>
            </div>
        );
    }
}

export default Form;