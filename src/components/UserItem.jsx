import React from 'react';
import { users } from '../data/data';

const UserItem = ({user}) => {
{users.map((user) => 
    <li key={user.id}>
        </li>
)}

  return (
    <div className="UserItem">
        <h3>Nombre:{user.name}</h3>
        <p>Correo:{user.correo}</p>
        <p>Rol: {user.rol}</p>
      </div>
    
  );
};

export default UserItem;