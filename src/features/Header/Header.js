import React from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';

const HeaderWrapper = styled.div`
    width: 100%;
    height: 48px;
    padding: 8px;
    display: flex;
    align-items: center;
`;

const MenuIcon = styled.div`
    height: 24px;
    width: 24px;
    padding: 12px;
    margin: 0 4px;
`;

export function Header() {
  return (
    <HeaderWrapper>
      <MenuIcon><DehazeIcon /></MenuIcon>
      <div style={{ paddingRight: '30px' }}>Gmail Icon</div>
      <div style={{ display: 'flex', flex: '1 1 auto' }}><TextField id="filled-basic" label="Search" variant="filled" style={{ flex: '1 1 auto', maxWidth: '770px' }} /></div>
      <div style={{ marginRight: '30px' }}>help buttons</div>
    </HeaderWrapper>
  );
}
