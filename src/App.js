import './App.css';

import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';


function App(props) {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar sidebar={props.store.getState().sidebar}/>
      <div className='app-wrapper__content'>
        <Route path="/profile" 
          render={() => 
            <Profile 
              store={props.store}
            />}
        />
        <Route path="/dialogs" 
          render={() => 
            <Dialogs 
              messagesPage={props.store.getState().messagesPage} 
            />}
        />
        <Route path="/news" render={() => <News />}/>
        <Route path="/music" render={() => <Music />}/>
        <Route path="/settings" render={() => <Settings />}/>
      </div>
    </div>
  );
}

export default App;
