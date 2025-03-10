import { users } from '../data/data';
import React from 'react';
import UserItem from './UserItem';

const UserList = ({ users, onAddToDash }) => {
  return (
    <div>
      <h2>Usuarios Registrados</h2>
      {users.map((user) => (
        <UserItem key={user.id} user={user} onAddToDash={onAddToDash} />
      ))}
    </div>
  );
};

export default UserList;