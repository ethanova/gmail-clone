import React from 'react';
import styled from 'styled-components';
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
    anyEmailSelected,
    addLabelToSelectedActions,
    toggleSelectedEmailsReadStatus,
} from '../emailList/emailSlice';

const EmailListActionBarWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

function CheckBoxButton() {
    return (
        <div style={{ padding: '0 10px 0 14px' }}>
            <Checkbox
                checked={false}
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
                size="small"
                style={{ padding: '0'}}
            />
        </div>
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
        const newLabel = window.prompt("What label would you like to add?");
        dispatch(addLabelToSelectedActions({ label: newLabel }));
    }
    const handleReadStatusBtnClick = () => dispatch(toggleSelectedEmailsReadStatus());
    return (
        <>
            <CheckBoxButton />
            <div style={{ borderRight: '1px solid black', paddingRight: '8px', marginRight: '20px' }}>
                <ArchiveIcon style={{ color: 'grey' }} />
                <ReportIcon style={{ color: 'grey' }} />
                <DeleteIcon style={{ color: 'grey' }} />
            </div>
            <div style={{ borderRight: '1px solid black', paddingRight: '8px', marginRight: '20px' }}>
                <button onClick={handleReadStatusBtnClick}><DraftsIcon style={{ color: 'grey' }} /></button>
                <WatchLaterIcon style={{ color: 'grey' }} />
                <PlaylistAddCheckIcon style={{ color: 'grey' }} />
            </div>
            <FolderIcon style={{ color: 'grey' }} />
            <button onClick={promptUserForLabel}><LabelIcon style={{ color: 'grey' }} /></button>
            <MoreVertIcon style={{ color: 'grey' }} />
        </>
    )
}

export function EmailListActionBar() {
  const showEmailActions = useSelector(anyEmailSelected);
//   const dispatch = useDispatch();
//   const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <EmailListActionBarWrapper>
        { showEmailActions ? <EmailActions /> : <DefaultActions /> }
    </EmailListActionBarWrapper>
  );
}
