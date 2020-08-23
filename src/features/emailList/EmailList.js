import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {
  getEmails,
} from './emailSlice';
// import styles from './Counter.module.css';

const EmailListWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export function EmailList() {
  const emails = useSelector(getEmails);
//   const dispatch = useDispatch();
//   const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <EmailListWrapper>
        {emails.map(email => (
            <div>{email.subject}</div>
        ))}
    </EmailListWrapper>
  );
}
