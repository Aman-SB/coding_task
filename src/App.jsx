import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Form from './Components/Form';
import UserData from './Components/UserData';

export default function App() {
  return (
    <BrowserRouter>
      <nav className="bg-gray-800 p-4 fixed w-full top-0 left-0">
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/form"
              className={({ isActive }) =>
                isActive ? 'text-white bg-gray-700 px-3 py-2 rounded-md' : 'text-gray-300 hover:text-white px-3 py-2 rounded-md'
              }
            >
              Task 2: Form
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user-data"
              className={({ isActive }) =>
                isActive ? 'text-white bg-gray-700 px-3 py-2 rounded-md' : 'text-gray-300 hover:text-white px-3 py-2 rounded-md'
              }
            >
              Task 3: User Data
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/user-data" element={<UserData />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}
