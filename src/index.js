import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import {addPost, updateNewPostText} from './redux/state';
import {renderDom} from './render';

renderDom(state, addPost, updateNewPostText);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
