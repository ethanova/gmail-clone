import React from 'react';
import { Checkbox } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
// icons
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArchiveIcon from '@material-ui/icons/Archive';
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';
import DraftsIcon from '@material-ui/icons/Drafts';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import FolderIcon from '@material-ui/icons/Folder';
import LabelIcon from '@material-ui/icons/Label';

import {
  EmailListActionBarWrapper,
  CheckboxContainer,
  IconGroup,
  ActionBtn,
} from './EmailListActionBar.styled';
import {
  anyEmailSelected,
  addLabelToSelectedActions,
  toggleSelectedEmailsReadStatus,
  deleteSelectedEmails,
  markSelectedEmailsAsSpam,
} from '../emailList/emailSlice';

function CheckBoxButton() {
  return (
    <CheckboxContainer>
      <Checkbox
        checked={false}
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
        size="small"
        style={{ padding: '0' }}
      />
    </CheckboxContainer>
  );
}

function DefaultActions() {
  return (
    <>
      <CheckBoxButton />
      <RefreshIcon style={{ color: 'grey' }} />
      <MoreVertIcon style={{ color: 'grey' }} />
    </>
  );
}

function EmailActions() {
  const dispatch = useDispatch();
  const promptUserForLabel = () => {
    const newLabel = window.prompt('What label would you like to add?');
    dispatch(addLabelToSelectedActions({ label: newLabel }));
  };
  const handleReadStatusBtnClick = () => dispatch(toggleSelectedEmailsReadStatus());
  const handleDeleteClick = () => dispatch(deleteSelectedEmails());
  const handleReportSpamClick = () => dispatch(markSelectedEmailsAsSpam());
  return (
    <>
      <CheckBoxButton />
      <IconGroup>
        <ActionBtn type="button" aria-label="Archive Email">
          <ArchiveIcon style={{ color: 'grey' }} />
        </ActionBtn>
        <ActionBtn type="button" aria-label="Mark Email as Spam" onClick={handleReportSpamClick}>
          <ReportIcon style={{ color: 'rgb(100, 100, 100)' }} />
        </ActionBtn>
        <ActionBtn type="button" aria-label="Delete Email" onClick={handleDeleteClick}>
          <DeleteIcon style={{ color: 'rgb(100, 100, 100)' }} />
        </ActionBtn>
      </IconGroup>
      <IconGroup>
        <ActionBtn type="button" data-testid="toggle-unread" aria-label="Toggle Unread" onClick={handleReadStatusBtnClick}><DraftsIcon style={{ color: 'rgb(100, 100, 100)' }} /></ActionBtn>
        <ActionBtn type="button" aria-label="Snooze Email"><WatchLaterIcon style={{ color: 'grey' }} /></ActionBtn>
        <ActionBtn type="button" aria-label="Add Email to List"><PlaylistAddCheckIcon style={{ color: 'grey' }} /></ActionBtn>
      </IconGroup>
      <ActionBtn type="button" aria-label="Move Email to Folder"><FolderIcon style={{ color: 'grey' }} /></ActionBtn>
      <ActionBtn type="button" data-testid="add-label" aria-label="Add Label" onClick={promptUserForLabel}><LabelIcon style={{ color: 'rgb(100, 100, 100)' }} /></ActionBtn>
      <MoreVertIcon style={{ color: 'grey' }} />
    </>
  );
}

export default function EmailListActionBar() {
  const showEmailActions = useSelector(anyEmailSelected);
  //   const dispatch = useDispatch();
  //   const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <EmailListActionBarWrapper data-testid="email-list-action-bar">
      { showEmailActions ? <EmailActions /> : <DefaultActions /> }
    </EmailListActionBarWrapper>
  );
}
