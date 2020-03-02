import React from 'react';
import './App.css';
import ReactRouterPage from './pages/ReactRouterPage'
import RouteChildrenPage from './pages/RouteChildrenPage';

function App() {
  return (
    <div className="App">
      <ReactRouterPage/>
      <RouteChildrenPage/> 
    </div>
  );
}

export default App;
