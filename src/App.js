import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Reservations from './components/Reservations';
function App() {
  return (
    <Router>
      <div className='body'>
        <Header className='header' />
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/Reservations' element={<Reservations/>} />
        </Routes>
        <Footer className='footer' />
      </div>
    </Router>
  );
}

export default App;
