import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { FaBeer } from 'react-icons/fa';
import { Logo } from './components/logo/Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" />
        
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          
        </p>
     
          < FaBeer />
          <Navbar />
       
      </header>

      <Navbar />
    </div>
  );
}

export default App;
