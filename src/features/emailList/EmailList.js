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
  StarIconTd,
  Labels,
} from './EmailList.styled';
import {
  getInboxEmails,
  getSpamEmails,
  getTrashEmails,
  select,
  deselect,
} from './emailSlice';
import { getRoute, routes } from '../menu/menuSlice';

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
      <StarIconTd>
        <StarBorderIcon fontSize="small" style={{ width: '20px', paddingRight: '10px' }} />
      </StarIconTd>
      <SenderCol>
        {email.sender}
      </SenderCol>
      <SubjectCol>
        <Labels className="labels">
          {email.tags.map((tag) => <Tag key={tag} tag={tag} />)}
        </Labels>
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
  const route = useSelector(getRoute);
  // const emails = [];
  let selector = getInboxEmails;
  if (route === routes.SPAM) {
    selector = getSpamEmails;
  } else if (route === routes.TRASH) {
    selector = getTrashEmails;
  }
  const emails = useSelector(selector);

  return (
    <EmailListWrapper data-testid="email-list">
      <tbody>
        {emails.map((email) => <EmailListItem key={email.id} email={email} />)}
      </tbody>
    </EmailListWrapper>
  );
}
