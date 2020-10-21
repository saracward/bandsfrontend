import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Display from "./Display";

function App() {
  const url = "http://localhost:4000";
  const [bands, setBands] = React.useState([]);
  // const [selectedBand, setSelectedBand] = React.useState(emptyBand);

  //function to fetch bands
  const getBands = () => {
    fetch(url + "/bands/")
      .then((response) => response.json())
      .then((data) => {
        setBands(data);
      });
  };

  //get dogs on page load
  React.useEffect(() => getBands(), []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <img src="https://i.pinimg.com/originals/d4/f1/e7/d4f1e7305596c3255c56d52d13515309.gif" />
        </p>
        <p>This is my homepage</p>
        <Link to="/create">
          <button>Add Artist</button>
        </Link>
      </header>
      <main>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={(rp) => <Display {...rp} bands={bands} />}
            />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
