import React from 'react'

import Header from '../../components/Header/Header'
import HeaderSEO from '../../components/HeaderSEO/HeaderSEO'
import Container from '../../components/Container/Container'
import CategoryBullet from '../../components/CategoryBullet/CategoryBullet'
import GlobalStyles from '../../styles/GlobalStyles'

import parse from 'html-react-parser';
import api from '../../services/api'
import { PostAuthorProfileContainer, PostAuthorName, PostAuthorPicture, PostContainer, PostContent, PostDateModified, PostDatePublished, PostDateSection, PostHeadline, PostSingleGrid, PostThumbnail, PostTitle, PostTopInfoSection, PostAuthorProfilePicture, PostAuthorProfileName, PostAuthorProfileDescription, PostAuthorProfileJob, PostTags, PostBibliography } from '../../styles/SingleStyles'

export async function getServerSideProps({params}) {
  
  // O que eu passar aqui, ele vai virar SEO
  const response = await api
    .get(`posts/${params.id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error); 
      return false;
    });

  // will be passed to the page component as props
  return {
    props: {
      response,
    },
  };
}

export default function Single({ response }) {
  
  return (
    <Container>
      <GlobalStyles />
      <HeaderSEO metasData={response.metas} headType="post-single"/>
      <Header />

      <PostSingleGrid>

        <PostContainer>
          <PostTitle>{response.title}</PostTitle>
          <PostHeadline>{response.headline}</PostHeadline>
          <PostTopInfoSection>
            <PostDateSection>
              <PostDatePublished>{(new Date(response.published)).toLocaleDateString()}</PostDatePublished>
              
              <PostAuthorPicture src={response.author.picture} alt={response.title} />
              <PostAuthorName>{response.author.name}</PostAuthorName>

              <PostDateModified> • Modified {(new Date(response.modified)).toLocaleDateString()}</PostDateModified>
            </PostDateSection>
            <CategoryBullet data={response.categories}  />
          </PostTopInfoSection>
          
          <PostThumbnail src={response.featured_media.thumbnail} alt="" />

          <PostContent>
            {parse(response.content)}
          </PostContent>

          <PostTags>Tags: {response.tags.length !== 0 ? <CategoryBullet data={response.tags} /> : 'not have tags'} </PostTags>
          <PostBibliography>Bibliography: {response.bibliography ? parse(response.bibliography) : 'not have'}</PostBibliography>
        </PostContainer>

        <PostAuthorProfileContainer>
          <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}}>
            <PostAuthorProfilePicture src={response.author.picture} alt={response.title} />
            <div style={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
              <PostAuthorProfileName>{response.author.name}</PostAuthorProfileName>
              <PostAuthorProfileJob>{response.author.profession}</PostAuthorProfileJob>
            </div>
          </div>
          
            {response.author.description !== "" ? <PostAuthorProfileDescription>{parse(response.author.description)}</PostAuthorProfileDescription> : ''}
      
        </PostAuthorProfileContainer>

      </PostSingleGrid>

    </Container>
  )

}
