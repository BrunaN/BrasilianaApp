import React, { Component } from 'react';
import Routes from './routes';
import './config/StatusBarConfig';
import { Provider } from 'react-redux';

import store from './store';

import { Tester, TestHookStore } from 'cavy';

const testHookStore = new TestHookStore();

export default class AppWrapper extends Component {
   render() {
       return (
           <Tester specs={[]} store={testHookStore}>
               <Provider store={store}><Routes /></Provider>
           </Tester>
       )
   }
}