import React, { useState } from 'react';
import Navigation  from './navigation/Navigation';

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Navigation/>
    );
  }
}

export default App;

