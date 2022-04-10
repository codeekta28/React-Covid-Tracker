import logo from './logo.svg';
import './App.css';
import CovidList from './Componenets/CovidList';
import StateCard from './Componenets/StateCard';

function App() {
  return (
    <>
       <h1>Covid 19 India Cases</h1>
       <div class="blink_me">Live</div>
       <CovidList/>
       
    </>
  );
}

export default App;
