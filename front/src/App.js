import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div>
      <Route component={HomePage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={ProfilePage} path="/profile" />
      <Route component={RegisterPage} path="/register" />
    </div>
  );
}

export default App;
