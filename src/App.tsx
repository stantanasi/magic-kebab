import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/footer/footer';
import Header from './components/header/header';
import ConfigKebab from './pages/config-kebab/config-kebab';
import Home from './pages/home/home';
import Kebab from './pages/kebab/kebab';
import { Kebab as IKebab } from './data/kebabs.data';
import OrderValidate from './pages/order-validate/order-validate';

function App() {
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
          <Route path={`${process.env.PUBLIC_URL}/`} exact component={() => <Home
            cart={cart} />} />
          <Route path={`${process.env.PUBLIC_URL}/kebabs/config`} component={(props: any) => <ConfigKebab
            {...props} onOrder={handleOnOrder} />} />
          <Route path={`${process.env.PUBLIC_URL}/kebabs/:name`} component={(props: any) => <Kebab
            {...props} onOrder={handleOnOrder} />} />

          <Route path={`${process.env.PUBLIC_URL}/order-validate`} component={OrderValidate} />
        </Switch>
      </Router>

      <Footer />
    </main>
  );
}

export default App;
