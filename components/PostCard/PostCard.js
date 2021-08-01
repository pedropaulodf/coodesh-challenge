import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import CategoryBullet from '../CategoryBullet/CategoryBullet'

import { StyledCardContainer, StyledCardTitle, StyledCardSubText, StyledCardDateCategory, StyledCardThumbnail, StyledCardDate, } from './PostCardStyles';

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

      <Link href={{
        pathname: `/single/${postData.id}`,
        query: { slug: postData.slug }
        }} >
        <StyledCardThumbnail src={postData.featured_media.thumbnail} alt={postData.title} />

      </Link>

      <StyledCardDateCategory>

        <StyledCardDate>{dateFormatted}</StyledCardDate>
        <CategoryBullet data={postData.categories} quantityFirstLetters={4} />

      </StyledCardDateCategory>

      <StyledCardTitle>{postData.title}</StyledCardTitle>

      <StyledCardSubText>{postData.headline}</StyledCardSubText>

      <Link href={{
        pathname: `/single/${postData.id}`,
        query: { slug: postData.slug }
        }} >
        <a>
          <Button text="read more" onButtonClick={() => handleButtonClick(postData.id)}/>
        </a>
      </Link>

    </StyledCardContainer>
  )
}
