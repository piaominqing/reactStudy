import React from 'react';
import './App.css';
import HocPage from './pages/HocPage'
import DecoretorPage from './pages/DecoretorPage'
import AntdFomPage from './pages/AntdFomPage'
import MyFomPage from './pages/MyFomPage'
import DialogPage from './pages/DialogPage'
function App() {
  return (
    <div className="App">
      {/* <HocPage/>
      <DecoretorPage/> 
      <AntdFomPage/>
      <DialogPage/>
      */}
      <MyFomPage/>
    </div>
  );
}

export default App;
