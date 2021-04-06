import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Jumbotron from "./components/Jumbotron"
import Search from "./pages/Search"
//import Saved from "./pages/Saved"
import Footer from "./components/Footer"


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Jumbotron />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Search />
          </Route>
          {/* <Route exact path="/saved">
            <Saved />
          </Route>  */}
        </Switch> 
        <Footer />
      </div>
    </Router>
  );
}


export default App;
