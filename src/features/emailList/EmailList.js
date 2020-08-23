import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Checkbox } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {
  getEmails,
} from './emailSlice';
// import styles from './Counter.module.css';

const EmailListItemWrapper = styled.div`
    display: flex;
    height: 20px;
    padding: 4px 0;
    align-items: center;
`;

function EmailListItem({ email }) {
    const date = new Date(email.date);
    const dateStr = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().substring(1, 3)}`;
    return (
        <EmailListItemWrapper>
            <div style={{ width: '20px', height: '20px', padding: '0 10px 0 14px', display: 'flex', alignItems: 'center' }}>
                <Checkbox
                    checked={email.selected}
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                    size="small"
                    style={{ padding: '0'}}
                />
            </div>
            {/* <div style={{ width: '20px', paddingRight: '10px' }}> */}
                <StarBorderIcon fontSize="small" style={{ width: '20px', paddingRight: '10px' }} />
            {/* </div> */}
            <div style={{ width: '168px', paddingRight: '32px' }}>
                {email.sender}
            </div>
            <div style={{ flex: '1 1 auto', paddingRight: '10px', textAlign: 'left' }}>
                {email.subject}
            </div>
            <div style={{ flexBasis: '56px', paddingRight: '16px' }}>
                {dateStr}
            </div>
        </EmailListItemWrapper>
    );
}

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
        {emails.map(email => <EmailListItem email={email} />)}
    </EmailListWrapper>
  );
}
