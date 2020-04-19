import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
// import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Wrapper>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/books" component={Saved} />
            <Route exact path="/books/:id" component={Saved} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </Wrapper>
      </>
    </Router>
  );
}

export default App;
