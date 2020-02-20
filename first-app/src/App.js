import React from 'react';
import logo from './logo.svg';
import './App.css';
import SetStatePage from './component/SetStatePage'
import LifeCycle from './component/LifeCycle'
import FunctionComponent from './component/FunctionComponent'
import {DefaultSlot, NametSlot} from './component/Slot'
import Redux from './component/Redux'
function App() {
  return (
    <div className="App">
      <SetStatePage/>
      <LifeCycle/>
      <FunctionComponent/>
      <DefaultSlot>DefaultSlot</DefaultSlot>
      <NametSlot>{
        {
          content: (
            <h3>NametSlot</h3>
          ),
          txt:'NametSlot'
        }
      }</NametSlot>
      <Redux/>
    </div>
  );
}

export default App;
