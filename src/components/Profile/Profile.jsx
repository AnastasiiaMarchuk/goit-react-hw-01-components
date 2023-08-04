import user from 'data/user.json';

export const Profile = ({username}) => {
    return (
      <div
        // style={{
        //   height: '100vh',
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   fontSize: 40,
        //   color: '#010101'
        // }}
      >
        <h1>Profile</h1>
        <p>Name: {user.username}</p>
      </div>
    );
  };