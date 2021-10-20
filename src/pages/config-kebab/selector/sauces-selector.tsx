import React, { useState } from 'react'
import Button from '../../../components/common/button';
import Card from '../../../components/common/card';
import sauces, { Sauce } from '../../../data/sauces.data'
import * as Styled from './selector.styled';

interface Props {
  onProceed: (sauces: Sauce[]) => void;
}

const SaucesSelector = (props: Props) => {
  const [selectedSauces, setSelectedSauces] = useState([] as string[]);

  return (
    <Styled.SelectorWrapper>
      <h1>Quelques sauces ?</h1>

      <Styled.ElementWrapper>
        {sauces.map((sauce, index) => (
          <Card
            key={index}
            title={sauce.name}
            image={sauce.image}
            isSelected={selectedSauces.includes(sauce.slug)}
            onSelect={(isSelected) => {
              if (isSelected) {
                if (selectedSauces.length < 3) {
                  setSelectedSauces(selectedSauces.concat(sauce.slug));
                }
              } else {
                setSelectedSauces(selectedSauces.filter(s => s !== sauce.slug));
              }
            }} />
        ))}
      </Styled.ElementWrapper>

      <Button
        name="Continuer"
        onClick={() => props.onProceed(sauces.filter(sauce => selectedSauces.includes(sauce.slug)))} />

    </Styled.SelectorWrapper>
  )
}

export default SaucesSelector
