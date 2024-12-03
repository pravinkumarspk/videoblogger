import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ViewBlog from './components/ViewBlog'; // Import your new ViewBlog component
import StaffLogin from './components/StaffLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/view" element={<ViewBlog />} />
        <Route path="/staff-login" element={<StaffLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
