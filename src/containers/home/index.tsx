
import * as React from 'react';
import Form from '../../components/Form'

interface HomeProps { };
interface HomeState {
  messages: any[];
};

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: any){
    super(props)
    this.state = {messages: []}
    this.AddMessage = this.AddMessage.bind(this)
  }

  AddMessage(message: any) {
    console.log(message)
    this.setState({messages: this.state.messages.concat(message)})
  }

  render() {
    return (
      <div id="form-container">
        <Form AddMessage={(message) => this.AddMessage(message)} />
      </div>
    );
  }
}


export default Home
