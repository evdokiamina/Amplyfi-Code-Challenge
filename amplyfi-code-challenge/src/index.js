import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/main';
import Header from './components/header';
import * as serviceWorker from './serviceWorker';
import './assets/scss/styles.scss';
import data from './data/JSON/232.json';
import data2 from './data/JSON/545.json';

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <Main data={data} />
      <Main data={data2} />
      <Header />
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
