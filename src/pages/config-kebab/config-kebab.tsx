import React, { useState } from 'react'
import { Redirect, Route } from "react-router-dom";
import BreadsSelector from './selector/breads-selector';
import FillingsSelector from './selector/fillings-selector';
import MeatsSelector from './selector/meats-selector';
import SaucesSelector from './selector/sauces-selector';

const ConfigKebab = (props: {}) => {
  const [kebab, setKebab] = useState({});

  return (
    <>
      <Route exact path="/config-kebab" render={() => <Redirect to="/config-kebab/breads" />} />

      <Route path="/config-kebab/breads" component={() => <BreadsSelector />} />
      <Route path="/config-kebab/meats" component={() => <MeatsSelector />} />
      <Route path="/config-kebab/fillings" component={() => <FillingsSelector />} />
      <Route path="/config-kebab/sauces" component={() => <SaucesSelector />} />
    </>
  )
}

export default ConfigKebab
