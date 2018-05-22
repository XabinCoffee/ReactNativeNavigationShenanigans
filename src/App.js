import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { createStore } from 'redux';
import reducers from './reducers';


class App extends Component {

  componentWillMount() {
    const config = {
      // get rekt
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
