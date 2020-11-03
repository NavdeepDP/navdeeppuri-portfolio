import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./containers/Home/Home";
import Contact from "./containers/Contact/Contact";
import Portfolio from "./containers/Portfolio/Portfolio";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
