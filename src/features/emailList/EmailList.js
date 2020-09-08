import React from 'react';
import { Checkbox } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {
  EmailListItemWrapper,
  Label,
  CheckboxContainer,
  SenderCol,
  SubjectCol,
  DateCol,
  EmailListWrapper,
} from './EmailList.styled';
import {
  getEmails,
  select,
  deselect,
} from './emailSlice';

function Tag({ tag }) {
  return (
    <Label>
      {tag}
    </Label>
  );
}

function EmailListItem({ email }) {
  const dispatch = useDispatch();
  const date = new Date(email.date);
  const dateStr = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().substring(2, 4)}`;

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      dispatch(select({ emailId: email.id }));
    } else {
      dispatch(deselect({ emailId: email.id }));
    }
  };

  return (
    <EmailListItemWrapper read={email.read} selected={email.selected}>
      <CheckboxContainer>
        <Checkbox
          data-testid={`email-${email.id}-checkbox`}
          checked={email.selected}
          color="default"
          inputProps={{ 'aria-label': 'checkbox with default color' }}
          size="small"
          style={{ padding: '0' }}
          onChange={handleCheckboxChange}
        />
      </CheckboxContainer>
      <td>
        <StarBorderIcon fontSize="small" style={{ width: '20px', paddingRight: '10px' }} />
      </td>
      <SenderCol>
        {email.sender}
      </SenderCol>
      <SubjectCol>
        {email.tags.map((tag) => <Tag key={tag} tag={tag} />)}
        {' '}
        {email.subject}
      </SubjectCol>
      <DateCol>
        {dateStr}
      </DateCol>
    </EmailListItemWrapper>
  );
}

export default function EmailList() {
  const emails = useSelector(getEmails);

  return (
    <EmailListWrapper data-testid="email-list">
      <tbody>
        {emails.map((email) => <EmailListItem key={email.id} email={email} />)}
      </tbody>
    </EmailListWrapper>
  );
}
