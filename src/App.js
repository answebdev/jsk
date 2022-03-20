import { Routes, Route } from 'react-router-dom';
// import Navigation from './components/layout/Navigation';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Photos from './components/pages/Photos';
import Videos from './components/pages/Videos';
import Contact from './components/pages/Contact';
import Error from './components/pages/Error';
import './App.css';

// Examples:
// https://www.format.com/magazine/galleries/photography/model-portfolio-website-examples
// https://www.wix.com/blog/2018/07/model-portfolio-examples/
// https://dribbble.com/tags/model_portfolio

function App() {
  return (
    <div className='App'>
      {/* <Navigation /> */}
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/photos' element={<Photos />} />
        <Route exact path='/videos' element={<Videos />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
