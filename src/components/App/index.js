import React, { Component } from 'react';

import Header from '../Header';
import Login from '../Login';

// import *filename* from '../foldername'

class App extends Component {
  render() {
    return (
        <div className="App">
            <main>
                <Header />
                <Login />
            </main>
        </div>
    );
  }
}

export default App;