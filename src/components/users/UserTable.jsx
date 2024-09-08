const UserTable = ({ users, handleEditUser, handleDeleteUser }) => {
    return (
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">All Users</h2>
        {users.length > 0 ? (
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Contacts</th>
                <th className="px-4 py-2">Age</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t border-gray-200">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.contacts}</td>
                  <td className="px-4 py-2">{user.age}</td>
                  <td className="px-4 py-2">{user.is_active ? "Active" : "Inactive"}</td>
                  <td className="px-4 py-2 flex space-x-2">
                    <button
                      onClick={() => handleEditUser(user)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-400"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-400"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-700">No users found.</p>
        )}
      </div>
    );
  };
  
  export default UserTable;
  