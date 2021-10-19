import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Button from '../../../components/common/button';
import Element from '../../../components/common/element';
import meats from '../../../data/meats.data'
import * as Styled from './selector.styled';

interface Props {

}

const MeatsSelector = (props: Props) => {
  const history = useHistory();
  const [selectedMeat, setSelectedMeat] = useState('');

  return (
    <Styled.SelectorWrapper>
      <h1>Plutôt viande ou tofu ?</h1>

      <Styled.ElementWrapper>
        {meats.map((meat, index) => (
          <Element
            key={index}
            title={meat.name}
            image={meat.image}
            isSelected={meat.slug === selectedMeat}
            onSelect={(isSelected) => setSelectedMeat(isSelected ? meat.slug : '')} />
        ))}
      </Styled.ElementWrapper>

      <Button
        name="Continuer"
        onClick={() => history.push("/kebabs/config/fillings")} />

    </Styled.SelectorWrapper>
  )
}

export default MeatsSelector
