import React, { Component } from 'react';
import LeftNav from './components/leftNav/leftNav';
import MainContent from './components/MainContent/MainContent'


class App extends Component {
  render() {
    return (
      <div className='app_container '>
        <LeftNav/>
        <MainContent/>
      </div>
    );
  }
}

export default App;
