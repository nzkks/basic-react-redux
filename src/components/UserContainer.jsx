import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      {userData.loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>Users List</h2>
          {userData && userData.users && userData.users.map((user, index) => <div key={index}>{user.name}</div>)}
        </div>
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    userData: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
