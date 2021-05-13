import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ContextNeki from './components/ContextNeki';

function App() {
  return (
    <ContextNeki>
      <NavBar/>
    </ContextNeki>
    
  );
}

export default App;
