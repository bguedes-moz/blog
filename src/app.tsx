import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "pages/home";

const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
