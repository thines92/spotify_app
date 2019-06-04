import React, { Component } from 'react';

import Header from '../Header';

// import *filename* from '../foldername'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Component /> */}
        <main>
            <Header />
        </main>
        {/* <Component /> */}
      </React.Fragment>
    );
  }
}

export default App;