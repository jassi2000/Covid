import './App.css';
// import LineGraph from './components/chart';
// import Row from "./components/upperrow"
import Country from "./components/countries"
// import Dashboard from "./components/Dashboard"

function App() {
  return (
    <div className="App">
      <h1 className="h1head"> <span>Covid-19</span> Global Trend</h1>
      <Country/>

    </div>
  );
}

export default App;
