import React from 'react';
import styled from 'styled-components';
import Header from './features/Header/Header';
import Menu from './features/menu/Menu';
import EmailList from './features/emailList/EmailList';
import ActionBar from './features/actionBar/ActionBar';
import './App.css';

const ContentContainer = styled.div`
  display: 'flex';
  flexDirection: 'column';
  width: 100%;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex' }}>
        <Menu />
        <ContentContainer>
          <ActionBar />
          <EmailList />
          {/* <Email /> */}
        </ContentContainer>
      </div>
    </div>
  );
}

export default App;
