import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {id: 1, message:'HI', likesCount: 15},
  {id: 2, message:'my first post', likesCount: 50},
  {id: 3, message:'my second post', likesCount: 23},
]

let dialogs = [
  {id: 1, name:'Anna'},
  {id: 2, name:'Liza'},
  {id: 3, name:'Luiz'},
  {id: 4, name:'Marsaskus'},
  {id: 5, name:'Dani'},
  {id: 6, name:'Viki'}
]

let messages = [
  {id: 1, message:'HI'},
  {id: 2, message:'How are you?'},
  {id: 3, message:'By'},
]


ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
