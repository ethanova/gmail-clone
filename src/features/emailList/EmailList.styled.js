import styled from 'styled-components';

export const EmailListItemWrapper = styled.tr`
    display: flex;
    height: 20px;
    padding: 5px 0;
    align-items: center;
    font-weight: ${(props) => (props.read ? 'normal' : 'bold')};
    background: ${(props) => (props.selected ? '#c2dbff' : '')};
    border-bottom: 1px solid gray;

    :hover {
        box-shadow: 0 2px 4px grey;
    }
`;

export const Label = styled.div`
    margin-right: 5px;
    padding: 2px 5px;
    background: gray;
    border-radius: 10px;
    font-size: 12px;
    font-weight: normal;
`;

export const CheckboxContainer = styled.td`
    width: 20px;
    height: 20px;
    padding: 0 10px 0 14px;
    display: flex;
    alignItems: center;
`;

export const StarIconTd = styled.td`
    display: flex;
`;

export const SenderCol = styled.td`
    width: 168px;
    padding-right: 32px;
`;

export const SubjectCol = styled.td`
    flex: 1 1 auto;
    padding-right: 10px;
    text-align: left;
    display: flex;
`;

export const Labels = styled.div`
    display: flex;
`;

export const DateCol = styled.td`
    flex-basis: 56px;
    padding-right: 16px;
`;

export const EmailListWrapper = styled.table`
    width: 100%;
    height: 100%;
`;
