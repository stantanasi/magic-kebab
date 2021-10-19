import React, { useState } from 'react'
import { Redirect, Route, useHistory } from "react-router-dom";
import { Kebab } from '../../data/kebabs.data';
import BreadsSelector from './selector/breads-selector';
import FillingsSelector from './selector/fillings-selector';
import MeatsSelector from './selector/meats-selector';
import SaucesSelector from './selector/sauces-selector';

interface Props {
  match: {
    path: string;
    url: string;
  }
}

const ConfigKebab = (props: Props) => {
  const history = useHistory();
  const [kebab, setKebab] = useState({} as Kebab);

  console.log(kebab)

  return (
    <>
      <Route exact path={props.match.url} render={() => <Redirect to={`${props.match.url}/breads`} />} />


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
          console.log("Done");
        }} />} />
    </>
  )
}

export default ConfigKebab
