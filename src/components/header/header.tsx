import React from 'react'
import * as Styled from './header.styled'

const Header = (props: {}) => {
  return (
    <Styled.HeaderWrapper>
      <Styled.Logo src="/assets/logo.png" />
    </Styled.HeaderWrapper>
  )
}

export default Header
