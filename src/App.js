import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className='body'>
      <Header className='header' />
      <Main className='main' />
      <Footer className='footer' />
    </div>
  );
}

export default App;
