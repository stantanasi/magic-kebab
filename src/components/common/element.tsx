import React, { useState } from 'react'
import styled from 'styled-components';

interface Props {
  index: number;
  title: string;
  image: string;
  onSelect: (isSelected: boolean, index: number) => boolean;
}

const Element = (props: Props) => {
  const [isSelected, setSelected] = useState(false);

  return (
    <ElementWrapper
      isChecked={isSelected}
      onClick={() => setSelected(props.onSelect(!isSelected, props.index))}
    >
      <div>
        <img src={props.image} alt={props.title} />
        <p>{props.title}</p>
      </div>
      {isSelected && <img src="/assets/checked.png" alt="Is checked" />}
    </ElementWrapper>
  )
}

export default Element

const ElementWrapper = styled.div<{ isChecked: boolean }>`
  outline: ${props => props.isChecked ? '4px solid #4D0302' : '1px solid rgba(77, 3, 2, 0.24)'};
  border-radius: 16px;
  padding: 1rem;
  display: grid;

  > * {
    grid-column: 1;
    grid-row: 1;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  img {
    margin-left: auto;
  }
`;
