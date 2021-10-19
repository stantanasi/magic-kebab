import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Button from '../../../components/common/button'
import Element from '../../../components/common/element'
import breads from '../../../data/breads.data'
import * as Styled from './selector.styled';

interface Props {
}

const BreadsSelector = (props: Props) => {
  const history = useHistory();
  const [selectedBread, setSelectedBread] = useState('');

  return (
    <Styled.SelectorWrapper>
      <h1>Pain ou galette ?</h1>

      <Styled.ElementWrapper>
        {breads.map((bread, index) => (
          <Element
            key={index}
            index={index}
            title={bread.name}
            image={bread.image}
            isSelected={bread.slug === selectedBread}
            onSelect={(isSelected) => setSelectedBread(isSelected ? bread.slug : '')} />
        ))}
      </Styled.ElementWrapper>

      <Button 
        name="Continuer"
        onClick={() => history.push("/config-kebab/meats")}/>

    </Styled.SelectorWrapper>
  )
}

export default BreadsSelector
