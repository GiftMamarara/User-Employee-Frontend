# React Project with User and Employee Management

This project is a React application featuring a user and employee management system. It demonstrates how to manage users and employees with functionality to add, edit, delete, and display data fetched from a Node.js API.

## Features

- **User Management**: 
  - Add, edit, and delete users.
  - Display all users in a tabular format.
  - View user details and manage their status.

- **Employee Management**:
  - Add, edit, and delete employees.
  - Display all employees in a tabular format.

- **Routing**:
  - Use React Router for navigation between different views.
  - Implemented routes for Home, Users, and Employees sections.

- **API Integration**:
  - Fetch user and employee data from a Node.js API.
  - Handle CRUD operations through API requests.

## Installation

### Prerequisites

Ensure you have the following installed:
- Node.js 
- npm (Node Package Manager)

### Setup

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**

   Navigate to the project directory and install the required npm packages.

   ```bash
   npm install
   ```

3. **Start the Application**

   ```bash
   npm start
   ```

   The application should now be running at `http://localhost:3000`.

## Project Structure

- `src/`
  - `components/`
    - `Hero.js`: Landing page component with navigation links.
    - `users/`
      - `AddUserForm.js`: Form for adding and editing users.
      - `UserTable.js`: Table displaying all users.
      - `User.js`: Main component for user management.
    - `employees/`
      - `AddEmployeeForm.js`: Form for adding and editing employees.
      - `EmployeeTable.js`: Table displaying all employees.
      - `Employee.js`: Main component for employee management.
  - `App.js`: Main application component with routing.
  - `index.js`: Entry point for the React application.

## API Endpoints

Ensure your Node.js backend is running and accessible at `http://localhost:5000`. The following endpoints are used:

- **Users**
  - `GET /api/users`: Fetch all users.
  - `POST /api/users`: Add a new user.
  - `PUT /api/users/:id`: Update an existing user.
  - `DELETE /api/users/:id`: Delete a user.

- **Employees**
  - `GET /api/employees`: Fetch all employees.
  - `POST /api/employees`: Add a new employee.
  - `PUT /api/employees/:id`: Update an existing employee.
  - `DELETE /api/employees/:id`: Delete an employee.

## Usage

- **Home**: Landing page with links to User and Employee management sections.
- **Users**: Add, edit, delete, and view users. Navigate using the buttons in the navbar.
- **Employees**: Add, edit, delete, and view employees. Navigate using the buttons in the navbar.
