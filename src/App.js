import './App.css';
// import LineGraph from './components/chart';
// import Row from "./components/upperrow"
import Country from "./components/countries"
// import Dashboard from "./components/Dashboard"

function App() {
  return (
    <div className="App">
      <div className="whole-app-wrapper">

      <h1 className="h1head"> <span className="text-red">Covid-19</span> Global Trend</h1>
      <Country/>
      </div>
    </div>
  );
}

export default App;
