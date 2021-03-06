import './App.css';
// import LineGraph from './components/chart';
// import Row from "./components/upperrow"
import Country from "./components/countries"
// import Dashboard from "./components/Dashboard"

function App() {
  return (
    <div className="App">
      <h1>Covid-19 Global Trend</h1>
      <Country/>
      {/* <LineGraph/> */}
       {/* <Dashboard /> */}

    </div>
  );
}

export default App;
