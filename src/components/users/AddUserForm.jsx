const AddUserForm = ({ newUser, setNewUser, handleAddUser, editUserId }) => {
    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{editUserId ? "Edit User" : "Add a New User"}</h2>
        <form onSubmit={handleAddUser}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="contacts">
              Contacts
            </label>
            <input
              type="text"
              id="contacts"
              value={newUser.contacts}
              onChange={(e) => setNewUser({ ...newUser, contacts: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="age">
              Age
            </label>
            <input
              type="number"
              id="age"
              value={newUser.age}
              onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="is_active">
              Active Status
            </label>
            <select
              id="is_active"
              value={newUser.is_active}
              onChange={(e) => setNewUser({ ...newUser, is_active: e.target.value === "true" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-indigo-500"
          >
            {editUserId ? "Update User" : "Add User"}
          </button>
        </form>
      </div>
    );
  };
  
  export default AddUserForm;
  