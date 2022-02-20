import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { FaBeer } from 'react-icons/fa';
import { Logo } from './components/logo/Logo';
import { Content } from './components/content/Content';
import { Midsection } from './components/midsection/Midsection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Logo className="App-logo" />
        
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          <Content />
        </p>
     
        <Midsection />
          
          
       
      </header>

 
    </div>
  );
}

export default App;
