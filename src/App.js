import React
//,{Suspense, lazy}
  from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import 'antd-mobile/dist/antd-mobile.css';

import './App.css'

import Index from "./pages/index";

import Chiron from "./pages/chiron";
import Egoista from "./pages/egoista";
import Akylone from "./pages/akylone";
import Mclaren570s from "./pages/mclaren570s";
import Senna from "./pages/senna";
import Sin from "./pages/sin";
import Aperta from "./pages/aperta";

// code spliting
//
// const Chiron=lazy(()=>import('./pages/chiron'))
// const Egoista=lazy(()=>import('./pages/egoista'))
// const Akylone=lazy(()=>import('./pages/akylone'))
// const Mclaren570s=lazy(()=>import('./pages/mclaren570s'))
// const Senna=lazy(()=>import('./pages/senna'))
// const Sin=lazy(()=>import('./pages/sin'))


class App extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return <Router basename='/a9pack'>
      <div>
        {/*<Suspense fallback=''>*/}
        <Switch>

          <Route path="/" exact>
            <Index/>
          </Route>
          <Route path="/aperta">
            <Aperta/>
          </Route>
          <Route path="/sin">
            <Sin/>
          </Route>
          <Route path="/senna">
            <Senna/>
          </Route>
          <Route path="/chiron">
            <Chiron/>
          </Route>
          <Route path="/egoista">
            <Egoista/>
          </Route>
          <Route path="/akylone">
            <Akylone/>
          </Route>
          <Route path="/m570s">
            <Mclaren570s/>
          </Route>
        </Switch>
        {/*</Suspense>*/}
      </div>
    </Router>
  }
}


export default App;
