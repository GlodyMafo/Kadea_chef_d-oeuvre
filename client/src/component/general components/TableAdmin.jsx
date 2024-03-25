import React, { useState } from "react";

const UserTable = ({ users, onDeleteUser, onSendEmail }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDeleteUser = () => {
    onDeleteUser(selectedUser);
    setSelectedUser(null);
    alert(
      "Voulez-vous supprimer cet utilisateur ? \n cela entrenera la suppression de son compte."
    );
  };

  const handleSendEmail = () => {
    onSendEmail(selectedUser);
    setSelectedUser(null);
  };

  return (
    <div className="container mx-auto mt-4">
      {selectedUser && (
        <div className="pt-4 mb-8">
          <p className="text-xl font-semibold pb-2">
            Utilisateur sélectionné: {selectedUser.username}
          </p>
          <button
            onClick={handleDeleteUser}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Supprimer
          </button>
          <button
            onClick={handleSendEmail}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Envoyer un e-mail
          </button>
        </div>
      )}
      <table className="min-w-full bg-white border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2">Nom d'utilisateur</th>
            <th className="px-4 py-2">Adresse e-mail</th>
            <th className="px-4 py-2">Type d'utilisateur</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="border px-4 py-2 text-gray-500">
                {user.username}
              </td>
              <td className="border px-4 py-2 text-gray-500">{user.email}</td>
              <td className="border px-4 py-2 text-gray-500">
                {user.userType}
              </td>
              <td className="border px-4 py-2 text-gray-500">
                <button onClick={() => setSelectedUser(user)}>
                  Sélectionner
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
