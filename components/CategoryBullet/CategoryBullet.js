import React from 'react'
import { BulletContainer } from './CategoryBulletStyles'

export default function CategoryBullet({data, quantityFirstLetters}) {
  return (
    <div style={{display: "flex", flexDirection: "row", flexWrap: 'wrap', gap: '4px 4px'}}>
      {data.map(category => {
        return (
          <BulletContainer key={category.id} title={category.name}>
            <p>{quantityFirstLetters > 0 ? category.name.substring(0, quantityFirstLetters) : category.name}</p>
          </BulletContainer>
        )
      })}
    </div>
  )
}
