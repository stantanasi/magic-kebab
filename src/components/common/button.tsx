import React from 'react'
import styled from 'styled-components'

interface Props {
  name: string;
  onClick: () => void;
}

const Button = (props: Props) => {
  return (
    <ButtonWrapper onClick={props.onClick}>
      {props.name}
    </ButtonWrapper>
  )
}

export default Button

const ButtonWrapper = styled.button`
  background: #4D0302;
  border: 1px solid #4D0302;
  border-radius: 8px;
  color: var(--main-bg-color);
  padding: 1rem 2rem;
  cursor: pointer;
`;
