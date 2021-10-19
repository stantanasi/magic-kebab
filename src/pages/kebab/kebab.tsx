import React from 'react'
import * as Styled from './kebab.styled';
import Button from '../../components/common/button';
import Element from '../../components/common/element';
import breads from '../../data/breads.data';
import kebabs from '../../data/kebabs.data';
import { ContainerWrapper } from '../../components/common/container.styled';
import meats from '../../data/meats.data';
import fillings from '../../data/fillings.data';
import sauces from '../../data/sauces.data';

interface Props {
  match: {
    params: {
      name: string;
    }
  }
}

const Kebab = (props: Props) => {
  const kebab = kebabs.find(kebab => kebab.slug === props.match.params.name);
  const summary = {
    bread: breads.find(bread => bread.slug === kebab?.bread),
    meat: meats.find(meat => meat.slug === kebab?.meat),
    fillings: fillings.filter(filling => kebab?.fillings.includes(filling.slug)),
    sauces: sauces.filter(sauce => kebab?.sauces.includes(sauce.slug)),
  };

  return (
    <ContainerWrapper>
      <h1>On récapitule</h1>

      <Styled.SummaryElementWrapper>

        <Element
          title={summary.bread?.name ?? ''}
          image={summary.bread?.image ?? ''}
          isSelected={false}
          onSelect={() => { }} />

        <h2>+</h2>

        <Element
          title={summary.meat?.name ?? ''}
          image={summary.meat?.image ?? ''}
          isSelected={false}
          onSelect={() => { }} />

        <h2>+</h2>

        <Element
          title={summary.fillings.map(filling => filling.name)}
          image={summary.fillings.map(filling => filling.image)}
          isSelected={false}
          onSelect={() => { }} />

        <h2>+</h2>

        <Element
          title={summary.sauces.map(sauce => sauce.name)}
          image={summary.sauces.map(sauce => sauce.image)}
          isSelected={false}
          onSelect={() => { }} />

      </Styled.SummaryElementWrapper>

      <Button
        name="Commander"
        onClick={() => console.log('Commander')} />

    </ContainerWrapper>
  )
}

export default Kebab
