import logo from "./logo.svg";
import "./App.css";
import Home from "./page/Home/Home";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Project from "./page/Project/Project";
import Footer from "./page/Footer/Footer";
import ContactMenu from "./page/ContactMenu/ContactMenu";
import Modal from "./Component/ModalContent/Modal";

function App() {
  return (
    <Router>
      <div className="App">
        <Modal />

        <ContactMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/project" component={Project} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
