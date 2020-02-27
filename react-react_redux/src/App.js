import React, {useState} from 'react';
import './App.css';
import ReactReduxPage from './pages/ReactReduxPage';

function App() {
  const {num} = useState(100)
  return (
    <div className="App">
      <h1>APP</h1>
      <ReactReduxPage num = {num}/>
    </div>
  );
}

export default App;
