import {AppRegistry} from 'react-native';
import App from './src';
import React, { Component } from 'react';
import {name as appName} from './app.json';

import { Tester, TestHookStore } from 'cavy';
import CharactersSpecs from './specs/CharactersSpecs';

const testHookStore = new TestHookStore();

class AppWrapper extends Component {
   render() {
       return (
           <Tester specs={[CharactersSpecs]} store={testHookStore}>
               <App /> 
           </Tester>
       )
   }
}

AppRegistry.registerComponent(appName, () => AppWrapper);