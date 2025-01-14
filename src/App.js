import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUpCheck from './components/SignUpCheck';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/" element={<SignUp />} >
          <Route path='check' element={<SignUpCheck />} /></Route>
        <Route />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
