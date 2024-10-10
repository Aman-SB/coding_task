import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './Components/Form';
import UserData from './Components/UserData';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form" element={<Form/>}></Route>
        <Route path="/userdata" element={<UserData/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
