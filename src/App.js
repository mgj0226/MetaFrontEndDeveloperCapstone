import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Reservations from './components/Reservations';
import Confirmed from './components/Reservations/Confirmed';
function App() {
  return (
    <Router>
      <div className='body'>
        <Header className='header' />
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/Reservations' element={<Reservations/>} />
          <Route path='/Confirmed' element={<Confirmed/>} />
        </Routes>
        <Footer className='footer' />
      </div>
    </Router>
  );
}

export default App;
