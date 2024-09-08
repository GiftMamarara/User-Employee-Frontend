const AddEmployeeForm = ({ newEmployee, setNewEmployee, handleAddEmployee, editEmployeeId }) => {
    return (
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{editEmployeeId ? "Edit Employee" : "Add a New Employee"}</h2>
        <form onSubmit={handleAddEmployee}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={newEmployee.name}
              onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="employee_code">
              Employee code
            </label>
            <input
              type="text"
              id="employee_code"
              value={newEmployee.employee_code}
              onChange={(e) => setNewEmployee({ ...newEmployee, employee_code: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="salary">
              Salary
            </label>
            <input
              type="text"
              id="salary"
              value={newEmployee.salary}
              onChange={(e) => setNewEmployee({ ...newEmployee, salary: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
  
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-indigo-500"
          >
            {editEmployeeId ? "Update Employee" : "Add Employee"}
          </button>
        </form>
      </div>
    );
  };
  
  export default AddEmployeeForm;
  