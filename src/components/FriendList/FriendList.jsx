import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({friends}) => {
    return (
      <>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline}  />;
        })}
      </>
    );
  };


