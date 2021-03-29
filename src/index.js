import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab,fas);

const myApp = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

ReactDOM.render(myApp,
  document.getElementById('root')
);

reportWebVitals();
