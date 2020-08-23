import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
// icons
import LabelIcon from '@material-ui/icons/Label';
import InboxIcon from '@material-ui/icons/Inbox';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import EmailIcon from '@material-ui/icons/Email';
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';

import {
  getLabels,
} from '../emailList/emailSlice';
// import styles from './Counter.module.css';

const MenuWrapper = styled.div`
    width: 256px;
    height: 100%;
`;

const FoldersWrapper = styled.div`
    text-align: left;
`;

const MenuItem = styled.a`
    padding: 0 8px 0 26px;
    display: flex;
`;

function Label(props) {
    return (
        <MenuItem>
            <LabelIcon />
            <span>&nbsp;{props.children}</span>
        </MenuItem>
    )
}

export function Menu() {
  const labels = useSelector(getLabels);
//   const dispatch = useDispatch();
//   const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <MenuWrapper>
        <Button style={{ margin: '10px 0'}} variant="contained">Compose</Button>
        <FoldersWrapper>
            <MenuItem><InboxIcon />&nbsp;Inbox</MenuItem>
            <MenuItem><WatchLaterIcon />&nbsp;Snoozed</MenuItem>
            <MenuItem><LabelImportantIcon />&nbsp;Important</MenuItem>
            <MenuItem><TrendingFlatIcon />&nbsp;Sent</MenuItem>
            <MenuItem><InsertDriveFileIcon />&nbsp;Drafts</MenuItem>
            <MenuItem><EmailIcon />&nbsp;All Mail</MenuItem>
            <MenuItem><ReportIcon />&nbsp;Spam</MenuItem>
            <MenuItem><DeleteIcon />&nbsp;Trash</MenuItem>
            {labels.map(label => (<Label>{label}</Label>))}
        </FoldersWrapper>
    </MenuWrapper>
  );
}
