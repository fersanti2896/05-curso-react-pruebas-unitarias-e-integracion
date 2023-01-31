
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';

import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      {/* <FirstApp title={ '¡Bienvenido al curso React!' } subTitle={ 'Primeros pasos en React' } /> */}
      <CounterApp value={ 10 }></CounterApp>
    </React.StrictMode>,
);