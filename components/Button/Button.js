import React from 'react'
import { StyledButton } from './ButtonStyles'

export default function Button({text, onButtonClick}) {
  return (
    <StyledButton type="button" onClick={onButtonClick}>{text}</StyledButton>
  )
}
