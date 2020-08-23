import React from 'react';
import styled from 'styled-components';
import { EmailListActionBar } from './EmailListActionBar';

const ActionBarWrapper = styled.div`
    width: 100%;
    height: 48px;
`;

export function ActionBar() {
//   const show = useSelector(anyEmailSelected);
//   const dispatch = useDispatch();
//   const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <ActionBarWrapper>
        {/** Implement react router for separate action bar per list vs single email */}
        <EmailListActionBar />
        {/* <SingleEmailActionBar /> */}
    </ActionBarWrapper>
  );
}
