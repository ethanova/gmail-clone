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
} from './EmailListActionBar.styled';
import {
  anyEmailSelected,
  addLabelToSelectedActions,
  toggleSelectedEmailsReadStatus,
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
  return (
    <>
      <CheckBoxButton />
      <IconGroup>
        <ArchiveIcon style={{ color: 'grey' }} />
        <ReportIcon style={{ color: 'grey' }} />
        <DeleteIcon style={{ color: 'grey' }} />
      </IconGroup>
      <IconGroup>
        <button type="button" data-testid="toggle-unread" aria-label="Toggle Unread" onClick={handleReadStatusBtnClick}><DraftsIcon style={{ color: 'grey' }} /></button>
        <WatchLaterIcon style={{ color: 'grey' }} />
        <PlaylistAddCheckIcon style={{ color: 'grey' }} />
      </IconGroup>
      <FolderIcon style={{ color: 'grey' }} />
      <button type="button" data-testid="add-label" aria-label="Add Label" onClick={promptUserForLabel}><LabelIcon style={{ color: 'grey' }} /></button>
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
