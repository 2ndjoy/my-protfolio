import logo from './logo.svg';
import './App.css';
import Intro from './Components/Intro/Intro';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App" data-theme="cupcake">
      <p>Lorem ipsum dolor sit amet.</p>
      <Intro></Intro>
      <div className='lg:flex justify-around mt-11 gap-4'>
        <About></About>
        <Skills></Skills>
      </div>
      <h2 className='text-2xl font-bold mt-24'>My Projects</h2>
      <Projects></Projects>

      <h2 className='text-2xl font-bold mt-24'>Contact Me</h2>
      <Contact></Contact>

    </div>
  );
}

export default App;
