import { Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Error from './components/pages/Error';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
