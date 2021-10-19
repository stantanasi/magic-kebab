import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Footer from './components/footer/footer';
import Header from './components/header/header';
import ConfigKebab from './pages/config-kebab/config-kebab';
import Home from './pages/home/home';
import Kebab from './pages/kebab/kebab';
import { Kebab as IKebab } from './data/kebabs.data';

function App() {
  const history = useHistory();
  const [cart, setCart] = useState([] as {
    kebab: IKebab,
    quantity: number,
  }[]);

  const handleOnOrder = (kebab: IKebab) => {
    setCart(cart.concat({ kebab: kebab, quantity: 1 }))
  }

  return (
    <main>
      <Header />

      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home
            cart={cart} />} />
          <Route path="/kebabs/config" component={(props: any) => <ConfigKebab
            {...props} onOrder={handleOnOrder} />} />
          <Route path="/kebabs/:name" component={(props: any) => <Kebab
            {...props}  onOrder={handleOnOrder} />} />
        </Switch>
      </Router>

      <Footer />
    </main>
  );
}

export default App;
