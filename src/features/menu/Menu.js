import React from 'react';
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
  MenuItem,
  MenuWrapper,
  FoldersWrapper,
} from './Menu.styled';
import {
  getLabels,
} from '../emailList/emailSlice';
import { goTo, routes, getRoute } from './menuSlice';
// import styles from './Counter.module.css';

function Label({ children }) {
  return (
    <MenuItem className="label-link">
      <LabelIcon style={{ color: 'grey' }} />
      <span>
        &nbsp;
        {children}
      </span>
    </MenuItem>
  );
}

export default function Menu() {
  const labels = useSelector(getLabels);
  const currentRoute = useSelector(getRoute);
  const dispatch = useDispatch();

  return (
    <MenuWrapper>
      <Button style={{ margin: '10px 0' }} variant="contained">Compose</Button>
      <FoldersWrapper>
        <MenuItem isCurrentRoute={currentRoute === routes.INBOX} onClick={() => dispatch(goTo(routes.INBOX))}>
          <InboxIcon style={{ color: 'rgb(100, 100, 100)' }} />
          &nbsp;Inbox
        </MenuItem>
        <MenuItem>
          <WatchLaterIcon style={{ color: 'grey' }} />
          &nbsp;Snoozed
        </MenuItem>
        <MenuItem>
          <LabelImportantIcon style={{ color: 'grey' }} />
          &nbsp;Important
        </MenuItem>
        <MenuItem>
          <TrendingFlatIcon style={{ color: 'grey' }} />
          &nbsp;Sent
        </MenuItem>
        <MenuItem>
          <InsertDriveFileIcon style={{ color: 'grey' }} />
          &nbsp;Drafts
        </MenuItem>
        <MenuItem>
          <EmailIcon style={{ color: 'grey' }} />
          &nbsp;All Mail
        </MenuItem>
        <MenuItem isCurrentRoute={currentRoute === routes.SPAM} onClick={() => dispatch(goTo(routes.SPAM))}>
          <ReportIcon style={{ color: 'rgb(100, 100, 100)' }} />
          &nbsp;Spam
        </MenuItem>
        <MenuItem isCurrentRoute={currentRoute === routes.TRASH} onClick={() => dispatch(goTo(routes.TRASH))}>
          <DeleteIcon style={{ color: 'rgb(100, 100, 100)' }} />
          &nbsp;Trash
        </MenuItem>
        {labels.map((label) => (<Label key={label}>{label}</Label>))}
      </FoldersWrapper>
    </MenuWrapper>
  );
}
