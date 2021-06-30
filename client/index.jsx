import React from 'react';
import ReactDOM from 'react-dom';
import { MuxProvider } from '@manulife/mux';
import App from './App';

import './index.scss';

ReactDOM.render(
  <MuxProvider>
    <App />
  </MuxProvider>,
  document.getElementById('root')
);
