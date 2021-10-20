import React, { useState } from 'react'
import Button from '../../../components/common/button';
import Card from '../../../components/common/card';
import fillings, { Filling } from '../../../data/fillings.data'
import * as Styled from './selector.styled';

interface Props {
  onProceed: (fillings: Filling[]) => void;
}

const FillingsSelector = (props: Props) => {
  const [selectedFillings, setSelectedFillings] = useState([] as string[]);

  return (
    <Styled.SelectorWrapper>
      <h1>Salade, tomate, oignons ?</h1>

      <Styled.ElementWrapper>
        {fillings.map((filling, index) => (
          <Card
            key={index}
            title={filling.name}
            image={filling.image}
            isSelected={selectedFillings.includes(filling.slug)}
            onSelect={(isSelected) => setSelectedFillings(isSelected ? selectedFillings.concat(filling.slug) : selectedFillings.filter(f => f !== filling.slug))} />
        ))}
      </Styled.ElementWrapper>

      <Button
        name="Continuer"
        onClick={() => props.onProceed(fillings.filter(filling => selectedFillings.includes(filling.slug)))} />

    </Styled.SelectorWrapper>
  )
}

export default FillingsSelector
