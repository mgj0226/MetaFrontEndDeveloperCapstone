import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <div className='body'>
        <Header className='header' />
        <Routes>
          <Route path='/' element={<Main/>} />
        </Routes>
        <Footer className='footer' />
      </div>
    </Router>
  );
}

export default App;
