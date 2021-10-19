import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Button from '../../../components/common/button';
import Element from '../../../components/common/element';
import sauces from '../../../data/sauces.data'
import * as Styled from './selector.styled';

interface Props {

}

const SaucesSelector = (props: Props) => {
  const history = useHistory();
  const [selectedSauces, setSelectedSauces] = useState([] as string[]);

  return (
    <Styled.SelectorWrapper>
      <h1>Quelques sauces ?</h1>

      <Styled.ElementWrapper>
        {sauces.map((sauce, index) => (
          <Element
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
        onClick={() => console.log("Done")} />

    </Styled.SelectorWrapper>
  )
}

export default SaucesSelector
