import React, { useState } from 'react';
import Navigation  from './navigation/Navigation';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import Reducer from './store/Contato-Reducer';


const rootReducer = combineReducers({
  contatos: Reducer
});


const store = createStore(rootReducer, applyMiddleware(reduxThunk));

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Provider store={store}>
          <Navigation/>
      </Provider>
    );
  }
}

export default App;

