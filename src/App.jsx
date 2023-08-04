import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, StarsCanvas, Work } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Work />
        <Experience />
        <div className='relative z-0'>
          <Tech />
          <StarsCanvas />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
