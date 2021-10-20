import React, { useState } from 'react'
import Button from '../../../components/common/button';
import Card from '../../../components/common/card';
import meats, { Meat } from '../../../data/meats.data'
import * as Styled from './selector.styled';

interface Props {
  onProceed: (meat: Meat) => void;
}

const MeatsSelector = (props: Props) => {
  const [selectedMeat, setSelectedMeat] = useState('');

  return (
    <Styled.SelectorWrapper>
      <h1>Plutôt viande ou tofu ?</h1>

      <Styled.ElementWrapper>
        {meats.map((meat, index) => (
          <Card
            key={index}
            title={meat.name}
            image={meat.image}
            isSelected={meat.slug === selectedMeat}
            onSelect={(isSelected) => setSelectedMeat(isSelected ? meat.slug : '')} />
        ))}
      </Styled.ElementWrapper>

      <Button
        name="Continuer"
        onClick={() => props.onProceed(meats.find(meat => meat.slug === selectedMeat)!!)} />

    </Styled.SelectorWrapper>
  )
}

export default MeatsSelector
