import React from 'react';
import { TextField } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
import {
  HeaderWrapper,
  MenuIcon,
  GmailIcon,
  SearchContainer,
  HelpBtns,
} from './Header.styled';

export default function Header() {
  return (
    <HeaderWrapper>
      <MenuIcon><DehazeIcon /></MenuIcon>
      <GmailIcon>Gmail Icon</GmailIcon>
      <SearchContainer><TextField id="filled-basic" label="Search" variant="filled" style={{ flex: '1 1 auto', maxWidth: '770px' }} /></SearchContainer>
      <HelpBtns>help buttons</HelpBtns>
    </HeaderWrapper>
  );
}
