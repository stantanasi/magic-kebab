import React, { useState } from 'react'
import { Route } from "react-router-dom";
import BreadsSelector from './selector/breads-selector';
import FillingsSelector from './selector/fillings-selector';
import MeatsSelector from './selector/meats-selector';
import SaucesSelector from './selector/sauces-selector';

const ConfigKebab = (props: {}) => {
  const [kebab, setKebab] = useState({});

  return (
    <div>
      <Route path="/config-kebab/breads" component={() => <BreadsSelector />} />
      <Route path="/config-kebab/meats" component={() => <MeatsSelector />} />
      <Route path="/config-kebab/fillings" component={() => <FillingsSelector />} />
      <Route path="/config-kebab/sauces" component={() => <SaucesSelector />} />
    </div>
  )
}

export default ConfigKebab
