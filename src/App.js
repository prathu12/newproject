import {BrowserRouter ,Route, Routes } from 'react-router-dom';
import Education from './components/Education';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Technologies from './components/Technologies';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/Education' element={<Education />} />
          <Route path='/Technologies' element={<Technologies />} />
          <Route path='/Projects' element={<Projects />} />
        </Routes>




      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
