import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Button from '../../../components/common/button';
import Element from '../../../components/common/element';
import fillings from '../../../data/fillings.data'
import * as Styled from './selector.styled';

interface Props {

}

const FillingsSelector = (props: Props) => {
  const history = useHistory();
  const [selectedFillings, setSelectedFillings] = useState([] as string[]);

  return (
    <Styled.SelectorWrapper>
      <h1>Salade, tomate, oignons ?</h1>

      <Styled.ElementWrapper>
        {fillings.map((filling, index) => (
          <Element
            key={index}
            title={filling.name}
            image={filling.image}
            isSelected={selectedFillings.includes(filling.slug)}
            onSelect={(isSelected) => setSelectedFillings(isSelected ? selectedFillings.concat(filling.slug) : selectedFillings.filter(f => f !== filling.slug))} />
        ))}
      </Styled.ElementWrapper>

      <Button
        name="Continuer"
        onClick={() => history.push("/kebabs/config/sauces")} />

    </Styled.SelectorWrapper>
  )
}

export default FillingsSelector
