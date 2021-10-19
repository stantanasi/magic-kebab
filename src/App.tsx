import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/footer/footer';
import Header from './components/header/header';
import ConfigKebab from './pages/config-kebab/config-kebab';
import Home from './pages/home/home';
import Kebab from './pages/kebab/kebab';

function App() {
  return (
    <main>
      <Header />

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/kebabs/config" component={ConfigKebab} />
          <Route path="/kebabs/:name" component={Kebab} />
        </Switch>
      </Router>

      <Footer />
    </main>
  );
}

export default App;
