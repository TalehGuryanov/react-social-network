import './App.css';

import Profile from './components/Prolife';
import Nav from './components/Nav';
import Header from './components/Header';


function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Nav/>
      <Profile/>
    </div>
  );
}

export default App;
