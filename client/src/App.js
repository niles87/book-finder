import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <Route exact path="/" component={Search} />
        <Route exact path="/books" component={Saved} />
        <Route exact path="/books/:id" component={Saved} />
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default App;
