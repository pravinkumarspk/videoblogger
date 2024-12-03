import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ViewBlog from './components/ViewBlog'; 
import StaffLogin from './components/StaffLogin';
import CreateBlog from './components/CreateBlog';
import Viewing from './components/Viewing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/view" element={<ViewBlog />} />
        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path='/viewing' element={<Viewing/>} />
      </Routes>
    </Router>
  );
}

export default App;
