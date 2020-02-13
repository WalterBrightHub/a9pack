import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'antd-mobile/dist/antd-mobile.css';

import './App.css'
// import Akylone from "./pages/akylone";
//import Mclaren570s from "./pages/mclaren570s";

import Index from "./pages/index";

import Chiron from "./pages/chiron488";
import Egoista from "./pages/egoista";
import Akylone from "./pages/akylone";
import Mclaren570s from "./pages/mclaren570s";
import Senna from "./pages/senna";

//import Egoista from './pages/egoista'


class App extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return <Router basename='/a9pack'>
      <div>

        <Switch>

          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/senna">
            <Senna />
          </Route>
          <Route path="/chiron">
            <Chiron />
          </Route>
          <Route path="/egoista">
            <Egoista />
          </Route>
          <Route path="/akylone">
            <Akylone />
          </Route>
          <Route path="/m570s">
            <Mclaren570s />
          </Route>
        </Switch>
      </div>
    </Router>
  }
}


export default App;
