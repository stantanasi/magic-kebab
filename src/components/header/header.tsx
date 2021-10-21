import React from 'react'
import * as Styled from './header.styled'

const Header = (props: {}) => {
  return (
    <Styled.HeaderWrapper>
      <a href={`${process.env.PUBLIC_URL}`}>
        <Styled.Logo src={`${process.env.PUBLIC_URL}/assets/logo.png`} />
      </a>
    </Styled.HeaderWrapper>
  )
}

export default Header
