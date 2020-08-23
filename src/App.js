import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Header } from './features/Header/Header';
import { Menu } from './features/menu/Menu';
import { EmailList } from './features/emailList/EmailList';
import { ActionBar } from './features/actionBar/ActionBar';
import './App.css';
import emails from './emails';

function App() {
  console.log(emails);
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
