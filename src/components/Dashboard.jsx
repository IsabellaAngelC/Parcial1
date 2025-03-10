import React from 'react';
import UserList from './UserList';

const Dashboard = ({ dashboard, onRemoveFromDash}) => {
    return (
        <div className="Dashboard">
        <h2>Usuarios</h2>
        {dashboard.length === 0 ? (
          <p>No hay usuarios registrados</p>
        ) : (
          <ul>
            {dashboard.map((user) => (
              <li key={user.id}>
                <div>
                  <button onClick={() => onRemoveFromDash(user.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
    
}


export default Dashboard;