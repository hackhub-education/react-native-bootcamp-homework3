import React from 'react';

import { Provider } from 'react-redux';
import store from './src/store';
import App from './src';

const EnhancedApp = () => 
(<Provider store={store}>
  <App />
</Provider>);

export default EnhancedApp