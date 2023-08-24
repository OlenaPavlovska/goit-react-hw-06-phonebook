import React from 'react';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import './index.css';
import { createRoot } from 'react-dom/client';
import {store } from 'redux/store';

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
<Provider store = {store}>
<App />
</Provider>

);
