import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="container h-full mx-auto">
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path='/Login' element={<LoginPage />}></Route>
        <Route path='/Register' element={<RegisterPage />}></Route>
        <Route path='/Landing' element={<LandingPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
