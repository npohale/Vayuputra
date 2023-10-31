import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SlideCarousel from './components/SlideCarousel';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <SlideCarousel/>
    </BrowserRouter>
     
   
  );
}

export default App;
