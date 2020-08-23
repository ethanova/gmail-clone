import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
// import {
//     anyEmailSelected,
// } from './emailSlice';
import { EmailListActionBar } from './EmailListActionBar';
// import styles from './Counter.module.css';

const ActionBarWrapper = styled.div`
    width: 100%;
    height: 48px;
`;

export function ActionBar() {
//   const show = useSelector(anyEmailSelected);
//   const dispatch = useDispatch();
//   const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <ActionBarWrapper>
        {/** Implement react router for separate action bar per list vs single email */}
        <EmailListActionBar />
        {/* <SingleEmailActionBar /> */}
    </ActionBarWrapper>
  );
}
