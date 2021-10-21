import React from 'react'
import styled from 'styled-components';

interface Props {
  title: string | string[];
  image: string | string[];
  isSelected: boolean;
  onSelect: (isSelected: boolean) => void;
}

const Card = (props: Props) => {
  return (
    <ElementWrapper
      isChecked={props.isSelected}
      onClick={() => props.onSelect(!props.isSelected)}
    >
      <div>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          {Array.isArray(props.image)
            ? props.image.map((image, index) => (
              <img key={index} src={image} alt={Array.isArray(props.title) ? props.title[index] : props.title} />
            ))
            : <img src={props.image} alt={Array.isArray(props.title) ? props.title.join(' & ') : props.title} />}
        </div>
        <p>{Array.isArray(props.title) ? props.title.join(' & ') : props.title}</p>
      </div>
      {props.isSelected && <img src={`${process.env.PUBLIC_URL}/assets/checked.png`} alt="Is checked" />}
    </ElementWrapper>
  )
}

export default Card

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
    justify-content: center;
  }

  > div img {
    width: 120px;
  }

  > img {
    margin-left: auto;
  }
`;
