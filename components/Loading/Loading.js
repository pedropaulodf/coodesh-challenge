import React from 'react'
import { StyledLoading } from './LoadingStyles'

export default function Loading() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
      <StyledLoading><div></div><div></div><div></div><div></div></StyledLoading>
    </div>
  )
}
