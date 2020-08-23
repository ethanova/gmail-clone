import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   selectCount,
// } from './counterSlice';
// import styles from './Counter.module.css';

const MenuWrapper = styled.div`
    width: 256px;
    height: 100%;
`;

export function Menu() {
//   const count = useSelector(selectCount);
//   const dispatch = useDispatch();
//   const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <MenuWrapper>
        <Button variant="contained">Compose</Button>
        <div>Inbox</div>
        <div>Snoozed</div>
        <div>Important</div>
        <div>Sent</div>
        <div>Drafts</div>
        <div>All Mail</div>
        <div>Spam</div>
        <div>Trash</div>
        <div>Label 1...</div>
        <div>...Label N</div>
    </MenuWrapper>
  );
}
