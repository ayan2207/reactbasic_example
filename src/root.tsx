import * as React from 'react';
import Home from './containers/Home'

interface AppProps { };
interface AppState { };

class App extends React.Component<AppProps, AppState> {
  render() {
    return (<Home />);
  }
}

export default App;