import './App.css';

import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';


function App(props) {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper__content'>
          <Route path="/profile" render={() => <Profile postsData={props.postsData}/>}/>
          <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
          <Route path="/news" render={() => <News />}/>
          <Route path="/music" render={() => <Music />}/>
          <Route path="/settings" render={() => <Settings />}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
