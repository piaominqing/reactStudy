import React from 'react';
import './App.css';
import ContextPage from './pages/ContextPage'
import ReduxPage from './pages/ReduxPage';
import MyReduxPage from './pages/MyReduxPage';

function App() {
  return (
    <div className="App">
      {/* <ContextPage/> 
      <ReduxPage/> */}
      <MyReduxPage/>
    </div>
  );
}

export default App;
