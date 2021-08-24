import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "components/header";
import Home from "pages/home";

const App = () => {
  return (
    <Router>
      <Header />
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
