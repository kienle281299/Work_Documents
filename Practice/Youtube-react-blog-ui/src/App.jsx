import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Settings from "./pages/settings/Settings";

import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>

        <Route path="/post">

        </Route>
        <Route path="/write"> <Write /> </Route>
        <Route path="/settings">
        <Settings /> 
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
