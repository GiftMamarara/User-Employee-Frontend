const EmployeeTable = ({ employees, handleEditEmployee, handleDeleteEmployee }) => {
    return (
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Employees List</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 text-left">Name</th>
              <th className="py-2 text-left">Employee code</th>
              <th className="py-2 text-left">Salary</th>
              <th className="py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="border-t">
                <td className="py-2">{employee.name}</td>
                <td className="py-2">{employee.employee_code}</td>
                <td className="py-2">{employee.salary}</td>
                <td className="py-2">
                  <button
                    onClick={() => handleEditEmployee(employee)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteEmployee(employee.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default EmployeeTable;
  