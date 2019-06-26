import React from 'react';
import Routes from './routes';
import './config/StatusBarConfig';
import { Provider } from 'react-redux';

import store from './store';

const App = () => <Provider store = {store}><Routes /></Provider>;

export default App;