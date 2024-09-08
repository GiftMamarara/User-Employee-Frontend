import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserTable from "./UserTable";
import AddUserForm from "./AddUserForm";

const Users = () => {
  const [view, setView] = useState("home");
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [newUser, setNewUser] = useState({
    name: "", email: "", password: "", contacts: "", age: "", is_active: true,
  });
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate();

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:5000/api/users");
    const data = await response.json();
    setUsers(data);
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    const response = editUserId
      ? await fetch(`http://localhost:5000/api/users/${editUserId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        })
      : await fetch("http://localhost:5000/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        });

    if (response.ok) {
      setMessage(editUserId ? "User updated successfully!" : "User added successfully!");
      setNewUser({ name: "", email: "", password: "", contacts: "", age: "", is_active: true });
      setEditUserId(null);
      fetchUsers();
      setView("display");
    }
  };

  const handleDeleteUser = async (id) => {
    const response = await fetch(`http://localhost:5000/api/users/${id}`, { method: "DELETE" });
    if (response.ok) {
      setMessage("User deleted successfully!");
      fetchUsers();
    }
  };

  const handleEditUser = (user) => {
    setEditUserId(user.id);
    setNewUser({
      name: user.name, email: user.email, password: user.password,
      contacts: user.contacts, age: user.age, is_active: user.is_active,
    });
    setView("add");
  };

  useEffect(() => {
    if (view === "display") {
      fetchUsers();
    }
  }, [view]);

  return (
    
    // Navbar starts
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 py-8">
      <nav className="bg-gray-800 p-4 mb-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-white font-bold text-xl">Users</h1>
          <div className="flex space-x-4">
            <button onClick={() => navigate("/")} className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">
              Home
            </button>
            <button onClick={() => { setView("add"); setEditUserId(null); setNewUser({ name: "", email: "", password: "", contacts: "", age: "", is_active: true }); }} className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">
              Add User
            </button>
            <button onClick={() => { setView("display"); fetchUsers(); }} className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">
              Display All Users
            </button>
          </div>
        </div>
      </nav>

      {/* Navbar ends */}
      
      {message && <div className="max-w-lg mx-auto bg-green-100 text-green-800 p-4 mb-4 rounded-lg">{message}</div>}
      {/* Message that will be displayed if nothing is being clicked */}
      {view === "home" && (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Welcome to the Users Section</h2>
          <p className="text-gray-700">Use the navbar to navigate to different actions.</p>
        </div>
      )}

      {view === "add" && (
        <AddUserForm
          newUser={newUser}
          setNewUser={setNewUser}
          handleAddUser={handleAddUser}
          editUserId={editUserId}
        />
      )}

      {view === "display" && (
        <UserTable
          users={users}
          handleEditUser={handleEditUser}
          handleDeleteUser={handleDeleteUser}
        />
      )}
    </div>
  );
};

export default Users;
