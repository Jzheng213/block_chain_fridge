import React from 'react';

const NavWelcome = ({ currentUser, users }) => {
  return (
    <React.Fragment>
      {
      currentUser ?
        <h4 className="navWelcome">Welcome {users[currentUser].first_name}</h4> :
        <h4 className="navWelcome">Hello Guest</h4>
      }
    </React.Fragment>
  );
};

export default NavWelcome;
