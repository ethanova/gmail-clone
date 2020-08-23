import React, { useState } from 'react';
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
} from '../emailList/emailSlice';
// import styles from './Counter.module.css';

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
            <RefreshIcon />
            <MoreVertIcon />
        </>
    );
}

function EmailActions() {
    return (
        <>
            <CheckBoxButton />
            <div style={{ borderRight: '1px solid black', paddingRight: '8px', marginRight: '20px' }}>
                <ArchiveIcon />
                <ReportIcon />
                <DeleteIcon />
            </div>
            <div style={{ borderRight: '1px solid black', paddingRight: '8px', marginRight: '20px' }}>
                <DraftsIcon />
                <WatchLaterIcon />
                <PlaylistAddCheckIcon />
            </div>
            <FolderIcon />
            <LabelIcon />
            <MoreVertIcon />
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
