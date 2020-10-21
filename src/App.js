import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Display from "./Display";
import Form from "./Form";

function App() {
  const url = "https://bandsbackend.herokuapp.com/";
  const [bands, setBands] = React.useState([]);
  const emptyBand = {
    name: "",
    genre: "",
    img: "",
    artist: "",
  };
  //select a dog to update
  const [selectedBand, setSelectedBand] = React.useState(emptyBand);

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

  //handleCreate Function for creating dogs
  const handleCreate = (newBand) => {
    fetch(url + "/band/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBand),
    }).then((response) => getBands());
  };

  //handleUpdate to update a dog when form is clicked
  const handleUpdate = (band) => {
    fetch(url + "/band/" + band._id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(band),
    }).then((response) => getBands());
  };

  //selectDog which selects a dog
  const selectBand = (band) => {
    setSelectedBand(band);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <img src="https://i.pinimg.com/originals/d4/f1/e7/d4f1e7305596c3255c56d52d13515309.gif" />
        </p>
        <p>This is my homepage</p>
        <Link to="/create">
          <button>Add Band</button>
        </Link>
      </header>
      <main>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={(rp) => (
                <Display {...rp} bands={bands} selectBand={selectBand} />
              )}
            />
            <Route
              exact
              path="/create"
              render={(rp) => (
                <Form
                  {...rp}
                  label="create"
                  band={emptyBand}
                  handleSubmit={handleCreate}
                />
              )}
            />
            <Route
              exact
              path="/edit"
              render={(rp) => (
                <Form
                  {...rp}
                  label="update"
                  dog={selectedBand}
                  handleSubmit={handleUpdate}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
