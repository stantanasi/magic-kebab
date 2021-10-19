import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/footer/footer';
import Header from './components/header/header';
import ConfigKebab from './pages/config-kebab/config-kebab';
import Home from './pages/home/home';
import Kebabs from './pages/kebabs/kebabs';

function App() {
  return (
    <main>
      <Header />

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/kebabs/:name" component={Kebabs} />
          <Route path="/config-kebab" component={ConfigKebab} />
        </Switch>
      </Router>

      <Footer />
    </main>
  );
}

export default App;
