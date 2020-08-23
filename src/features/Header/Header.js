import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   selectCount,
// } from './counterSlice';
// import styles from './Counter.module.css';

const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
`;

export function Header() {
//   const count = useSelector(selectCount);
//   const dispatch = useDispatch();
//   const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <HeaderWrapper>
      <div><DehazeIcon /></div>
      <div>Gmail Icon</div>
      <div><TextField id="filled-basic" label="Search" variant="filled" /></div>
      <div>help buttons</div>
    </HeaderWrapper>
  );
}
