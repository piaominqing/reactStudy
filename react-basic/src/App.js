import React from 'react';
import './App.css';
import SetStatePage from './component/SetStatePage'
import LifeCycle from './component/LifeCycle'
import FunctionComponent from './component/FunctionComponent'
import {DefaultSlot, NametSlot} from './component/Slot'
import Redux from './component/Redux'
import ReactRedux from './component/ReactRedux'
import ReactRouter from './component/ReactRouter'
import PureComponentPage,{ComponentPage} from './component/PureComponentPage'
import MyHook from './component/MyHook'
import UseMemo from './component/UseMemo'
function App() {
  return (
    <div className="App">
      {/* <SetStatePage/>
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
      <ReactRedux/>
      <ReactRouter/>
      <PureComponentPage/>
      <ComponentPage/>
      <MyHook/> */}
      <UseMemo/>
    </div>
  );
}

export default App;
