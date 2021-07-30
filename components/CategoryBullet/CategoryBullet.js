import React from 'react'
import { BulletContainer } from './CategoryBulletStyles'

export default function CategoryBullet({name, quantityFirstLetters}) {
  return (
    <BulletContainer>
      <p>{quantityFirstLetters > 0 ? name.substring(0, quantityFirstLetters) : name}</p>
    </BulletContainer>
  )
}
