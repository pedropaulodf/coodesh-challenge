import React from 'react'

import { StyledContainer, StyledCoGrid } from './ContainerStyles'

export default function Container({children}) {
  return (
    <StyledContainer>
      <StyledCoGrid>
        {children}
      </StyledCoGrid>
    </StyledContainer>
  )
}
