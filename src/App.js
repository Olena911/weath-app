import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York"/>
 <footer className="coder">
                * Coded by Olena Azulay and <a href="https://github.com/Olena911/weath-app" target="_blank" rel="noreferrer">open sourced on GitHub</a> and hosted on <a href="https://www.netlify.com/" rel="noreferrer" target="_blank"> Netlify</a>
            </footer>
    </div>
    </div>
  );
}

export default App;
