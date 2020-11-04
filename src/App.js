import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./containers/Home/Home";
import Contact from "./containers/Contact/Contact";
import Portfolio from "./containers/Portfolio/Portfolio";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

import "./App.css";

function App() {
  return (
    <div className="App">

<div id="page-container">
    <div id="content-wrap">

      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/" component={Home} />
        </Switch>
      
      </Router>

      
    </div>
    <Footer />
  </div>
  
    </div>
  );
}

export default App;
