import './App.css';
import Education from './components/Education';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Technologies from './components/Technologies';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Education />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
