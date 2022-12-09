import logo from './logo.svg';
import './App.css';
import Intro from './Components/Intro/Intro';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Header from './Components/Header/Header';
import { AiFillProject } from 'react-icons/ai';
import { GrContact } from 'react-icons/gr';

function App() {
  return (
    <div className="App" data-theme="cupcake">
      <Header></Header>
      <Intro></Intro>
      <div className='lg:flex justify-around mt-11 gap-4'>
        <About></About>
        <Skills></Skills>
      </div>
      <h2 className='text-2xl font-bold mt-24 flex items-center justify-center gap-3'>My Projects <AiFillProject /></h2>
      <Projects></Projects>

      <h2 className='text-2xl font-bold mt-24 flex justify-center items-center gap-3'>Contact Me <GrContact /></h2>
      <Contact></Contact>

    </div>
  );
}

export default App;
