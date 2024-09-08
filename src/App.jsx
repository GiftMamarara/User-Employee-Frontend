import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Users from './components/users/User';
import Employees from './components/employees/Employe';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/users" element={<Users />} />
        <Route path='/employees' element={<Employees />} />
      </Routes>
    </Router>
  );
}
