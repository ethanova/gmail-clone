import React from 'react';
import { Header } from './features/Header/Header';
import { Menu } from './features/menu/Menu';
import { EmailList } from './features/emailList/EmailList';
import { ActionBar } from './features/actionBar/ActionBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex' }}>
        <Menu />
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <ActionBar />
          <EmailList />
          {/* <Email /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
