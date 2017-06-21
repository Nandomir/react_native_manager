import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router.js';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC7vl2QJ5Rsuz_P_kiobr5N8KsqlI0ccFk',
      authDomain: 'manager-84979.firebaseapp.com',
      databaseURL: 'https://manager-84979.firebaseio.com',
      projectId: 'manager-84979',
      storageBucket: 'manager-84979.appspot.com',
      messagingSenderId: '847841665012'
    };

    firebase.initializeApp(config);
  }


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    // 2nd argument ({}) is for any initial state, 3rd one is a store enhancer
    // because it adds extra property to the store

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
