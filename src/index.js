import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let renderDom = () => {

  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App 
          store={store}
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );

}

renderDom();

store.subscribe(renderDom);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

