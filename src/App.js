import VendingMachine from "./VendingMachine"
import Soda from './Soda'
import Chips from './Chips'
import Chocolate from './Chocolate'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <VendingMachine />
          </Route>
          <Route exact path="/soda">
            <Soda />
          </Route>
          <Route exact path="/chips">
            <Chips />
          </Route>
          <Route exact path="/chocolate">
            <Chocolate />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
