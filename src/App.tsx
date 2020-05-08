import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

const Home  = lazy(() => import('./js/components/Home/Home'))
const Recipe  = lazy(() => import('./js/components/Recipe/Recipe'))
const Experimental  = lazy(() => import('./js/components/Experimental/Experimental'))
const About  = lazy(() => import('./js/components/About/About'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipe">Recipe</Link>
          </li>
          <li>
            <Link to="/experimental">Experimental</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/recipe">
          <Recipe />
        </Route>
        <Route path="/experimental">
          <Experimental />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
