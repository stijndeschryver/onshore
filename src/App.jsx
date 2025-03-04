import './App.css';
import { Header } from './components/Header.jsx';
import { Home } from './components/Home';
import { Cases } from './components/Cases';
import { About } from './components/About';
import { Contact } from './components/Contact';

export const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Cases />
      <About />
      <Contact />
    </>
  );
};
