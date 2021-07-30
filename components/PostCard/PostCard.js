import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import CategoryBullet from '../CategoryBullet/CategoryBullet'

import { StyledCardContainer, StyledCardTitle, StyledCardSubText, StyledCardDateCategory, StyledCardThumbnail } from './PostCardStyles';

import Link from 'next/link'


export default function PostCard({postData, onCardButtonClick}) {

  const [dateFormatted, setDateFormatted] = useState('');

  function handleButtonClick(postId){
    onCardButtonClick(postId);
  }

  useEffect(() => {
    setDateFormatted((new Date(postData.published)).toLocaleDateString());
  },[])

  return (
    <StyledCardContainer>

      <StyledCardThumbnail src={postData.featured_media.thumbnail} alt={postData.title} />

      <StyledCardDateCategory>

        <p>{dateFormatted}</p>

        <div style={{display: "flex", flexDirection: "row"}}>
          {postData.categories.map(category => {
            return <CategoryBullet key={category.id} name={category.name} quantityFirstLetters={4}/>
          })}
        </div>

      </StyledCardDateCategory>

      <StyledCardTitle>{postData.title}</StyledCardTitle>

      <StyledCardSubText>{postData.headline}</StyledCardSubText>

      {/* <Link href={`/single?postid${postData.id}`} >
        <Button text="read more" onButtonClick={() => handleButtonClick(postData.id)}/>
      </Link> */}

      <Link href={{
        pathname: `/single/${postData.id}`,
        query: { slug: postData.slug }
        }} innerRef>
        <a>read more</a>
      </Link>

    </StyledCardContainer>
  )
}
