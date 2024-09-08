import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeTable from "./EmployeeTable";
import AddEmployeeForm from "./AddEmployee";

const Employee = () => {
  const [view, setView] = useState("home");
  const [employees, setEmployees] = useState([]);
  const [editEmployeeId, setEditEmployeeId] = useState(null);
  const [newEmployee, setNewEmployee] = useState({
    name: "", employee_code: "", salary: "",
  });
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate();

  const fetchEmployees = async () => {
    const response = await fetch("http://localhost:5000/api/employees");
    const data = await response.json();
    setEmployees(data);
  };

  const handleAddEmployee = async (e) => {
    e.preventDefault();
    const response = editEmployeeId
      ? await fetch(`http://localhost:5000/api/employees/${editEmployeeId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newEmployee),
        })
      : await fetch("http://localhost:5000/api/employees", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newEmployee),
        });

    if (response.ok) {
      setMessage(editEmployeeId ? "Employee updated successfully!" : "Employee added successfully!");
      setNewEmployee({ name: "", employee_code: "", salary: "" });
      setEditEmployeeId(null);
      fetchEmployees();
      setView("display");
    }
  };

  const handleDeleteEmployee = async (id) => {
    const response = await fetch(`http://localhost:5000/api/employees/${id}`, { method: "DELETE" });
    if (response.ok) {
      setMessage("Employee deleted successfully!");
      fetchEmployees();
    }
  };

  const handleEditEmployee = (employee) => {
    setEditEmployeeId(employee.id);
    setNewEmployee({
      name: employee.name, employee_code: employee.employee_code, salary: employee.salary,
    });
    setView("add");
  };

  useEffect(() => {
    if (view === "display") {
      fetchEmployees();
    }
  }, [view]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 py-8">
      <nav className="bg-gray-800 p-4 mb-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-white font-bold text-xl">Employees</h1>
          <div className="flex space-x-4">
            <button onClick={() => navigate("/")} className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">
              Home
            </button>
            <button onClick={() => { setView("add"); setEditEmployeeId(null); setNewEmployee({ name: "", employee_code: "", salary: "" }); }} className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">
              Add Employee
            </button>
            <button onClick={() => { setView("display"); fetchEmployees(); }} className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">
              Display All Employees
            </button>
          </div>
        </div>
      </nav>

      {message && <div className="max-w-lg mx-auto bg-green-100 text-green-800 p-4 mb-4 rounded-lg">{message}</div>}

      {view === "home" && (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Welcome to the Users Section</h2>
          <p className="text-gray-700">Use the navbar to navigate to different actions.</p>
        </div>
      )}

      {view === "add" && (
        <AddEmployeeForm
          newEmployee={newEmployee}
          setNewEmployee={setNewEmployee}
          handleAddEmployee={handleAddEmployee}
          editEmployeeId={editEmployeeId}
        />
      )}

      {view === "display" && (
        <EmployeeTable
          employees={employees}
          handleEditEmployee={handleEditEmployee}
          handleDeleteEmployee={handleDeleteEmployee}
        />
      )}
    </div>
  );
};

export default Employee;
