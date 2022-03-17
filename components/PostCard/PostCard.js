import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import parse from "html-react-parser";

import CategoryBullet from '../CategoryBullet/CategoryBullet'
import Button from '../Button/Button'

import { StyledCardContainer, StyledCardTitle, StyledCardSubText, StyledCardDateCategory, StyledCardThumbnail, StyledCardDate, } from './PostCardStyles';

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

    {/* {postData.featured_media
      ? */}
        <Link href={{
        pathname: `/single/${postData.id}`,
        query: { slug: postData.slug }
        }} >
          <a><StyledCardThumbnail src={postData?.featured_media?.medium ? postData?.featured_media?.medium : `https://textoverimage.moesif.com/image?x_align=center&y_align=middle&margin=32&text=${postData.title}&image_url=https://img.freepik.com/fotos-gratis/plano-de-fundo-texturizado-cinza_24972-763.jpg?w=1380&t=st=1647520906~exp=1647521506~hmac=c8c53c315910a37ec554c3a56c70c8d129ce72f3bebc74242305d3909377db7b`} alt={postData.title} /></a>
        </Link>
      {/* : null} */}

      <StyledCardDateCategory>

        <StyledCardDate>{dateFormatted}</StyledCardDate>
        <CategoryBullet data={postData.categories} quantityFirstLetters={4} />

      </StyledCardDateCategory>

      <StyledCardTitle>{postData.title}</StyledCardTitle>

      <StyledCardSubText>{parse(postData.excerpt)}</StyledCardSubText>

      <Link href={{
        pathname: `/single/${postData.id}`,
        query: { slug: postData.slug }
        }} >
        <a>
          <Button text="read all post" onButtonClick={() => handleButtonClick(postData.id)}/>
        </a>
      </Link>

    </StyledCardContainer>
  )
}
