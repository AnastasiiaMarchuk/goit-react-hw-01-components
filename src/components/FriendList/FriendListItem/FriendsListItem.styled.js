import styled from 'styled-components';

export const FriendContainer = styled.li`
  margin: 10px auto;
  width: 320px;
  display: flex;
  gap: 15px;
  background-color: #f0ffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px rgba(7, 52, 82, 1);
  padding: 10px;
`;

export const FriendAvatar = styled.img`
  width: 100px;
  margin-right: 20px;
`;

export const FriendName = styled.p`
  margin-bottom: 6px;
  font-size: 32px;
  font-weight: 700;
  color: #073452;
`;

export const Status = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? '#073452' : '#f0ffff';
  }};
  border: ${props => {
    return props.isOnline ? 'none' : '1px solid #073452';
  }};
`;
