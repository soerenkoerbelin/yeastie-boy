import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

const Home = lazy(() => import("./js/components/Home/Home"));
const Recipe = lazy(() => import("./js/components/Recipe/Recipe"));
const Experimental = lazy(() =>
  import("./js/components/Experimental/Experimental")
);
const Calculator = lazy(() => import("./js/components/Calculator/Calculator"));
const KnowledgeBase = lazy(() => import("./js/components/KnowledgeBase/KnowledgeBase"));
const About = lazy(() => import("./js/components/About/About"));
const Header = lazy(() => import("./js/components/Header/Header"));
const Footer = lazy(() => import("./js/components/Footer/Footer"));

function App() {
  return (
    <div className="container">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <header>
            <Header />
          </header>
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/recipe">
                <Recipe />
              </Route>
              <Route exact path="/experimental">
                <Experimental />
              </Route>
              <Route exact path="/calculator">
                <Calculator />
              </Route>
              <Route exact path="/knowledge-base">
                <KnowledgeBase />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </main>
          <footer>
            <Footer />
          </footer>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
