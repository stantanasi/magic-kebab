import React, { useState } from 'react'
import { Route, useHistory } from "react-router-dom";
import { Kebab as IKebab } from '../../data/kebabs.data';
import Kebab from '../kebab/kebab';
import BreadsSelector from './selector/breads-selector';
import FillingsSelector from './selector/fillings-selector';
import MeatsSelector from './selector/meats-selector';
import SaucesSelector from './selector/sauces-selector';

interface Props {
  match: {
    path: string;
    url: string;
  }
  onOrder: (kebab: IKebab) => void;
}

const ConfigKebab = (props: Props) => {
  const history = useHistory();
  const [kebab, setKebab] = useState({
    price: 6.00,
  } as IKebab);

  return (
    <>
      <Route exact path={props.match.url} component={() => <Kebab
        kebab={kebab}
        onOrder={props.onOrder} />} />


      <Route path={`${props.match.url}/breads`} component={() => <BreadsSelector
        onProceed={(bread) => {
          setKebab({ ...kebab, bread: bread });
          history.push(`${props.match.url}/meats`);
        }} />} />

      <Route path={`${props.match.url}/meats`} component={() => <MeatsSelector
        onProceed={(meat) => {
          setKebab({ ...kebab, meat: meat });
          history.push(`${props.match.url}/fillings`);
        }} />} />

      <Route path={`${props.match.url}/fillings`} component={() => <FillingsSelector
        onProceed={(fillings) => {
          setKebab({ ...kebab, fillings: fillings });
          history.push(`${props.match.url}/sauces`);
        }} />} />

      <Route path={`${props.match.url}/sauces`} component={() => <SaucesSelector
        onProceed={(sauces) => {
          setKebab({ ...kebab, sauces: sauces });
          history.push(`${props.match.url}`);
        }} />} />
    </>
  )
}

export default ConfigKebab
