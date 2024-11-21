import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "containers/main";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/company" component={Main} />
        <Route exact path="/product" component={Main} />
        <Route exact path="/news" component={Main} />
        <Route exact path="/contact" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
