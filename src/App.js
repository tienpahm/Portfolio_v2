import "./App.css";
import Home from "./page/Home/Home";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Project from "./page/Project/Project";
import Footer from "./page/Footer/Footer";
import ContactMenu from "./page/ContactMenu/ContactMenu";
import Modal from "./Component/ModalContent/Modal";
import Test from "./Component/PageNotFound/PageNotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/project" component={Project} /> */}
          <Route path="*" exact={true} component={Test} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
