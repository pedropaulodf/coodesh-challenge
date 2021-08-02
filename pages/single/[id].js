import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

import Header from '../../components/Header/Header'
import HeaderSEO from '../../components/HeaderSEO/HeaderSEO'
import Container from '../../components/Container/Container'
import GlobalStyles from '../../styles/GlobalStyles'
import Loading from '../../components/Loading/Loading'
import CategoryBullet from '../../components/CategoryBullet/CategoryBullet'

import parse from 'html-react-parser';
import api from '../../services/api'

import { PostAuthorProfileContainer, PostAuthorName, PostAuthorPicture, PostContainer, PostContent, PostDateModified, PostDatePublished, PostDateSection, PostHeadline, PostSingleGrid, PostThumbnail, PostTitle, PostTopInfoSection, PostAuthorProfilePicture, PostAuthorProfileName, PostAuthorProfileDescription, PostAuthorProfileJob, PostTags, PostBibliography } from '../../styles/SingleStyles'

export default function Single() {
  
  const router = useRouter();
  const id = router.query.id;

  const [postData, setPostData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const getData = async () => {

      setLoading(true);
      
      // O que eu passar aqui, ele vai virar SEO
      await api.get(`posts/${id}`)
      .then((response) => {
        console.log(response.data);
        setPostData(response.data);
        setLoading(false);
        return response.data;
      })
      .catch((error) => {
        console.log(error); 
        return false;
      });

    }
    getData();

  }, [])


  return (
    <Container>
      <GlobalStyles />
      
      <Header onlyLogo />

      {loading 
      ? null
      : <HeaderSEO metasData={postData.metas} headType="post-single"/>
      }
      
      {!loading 
      ? <PostSingleGrid>

          <PostContainer>
            <PostTitle>{postData.title}</PostTitle>
            {
              postData.headline 
              ? <PostHeadline>{postData.headline}</PostHeadline>
              : null
            }
            
            <PostTopInfoSection>
              <PostDateSection>
                <PostDatePublished>{(new Date(postData.published)).toLocaleDateString()}</PostDatePublished>
                
                <PostAuthorPicture src={postData.author.picture ? postData.author.picture : 'https://beta.mejorconsalud.com/wp-content/themes/base-deploy/assets/img/about-us/no_profile.png'} alt={postData.title} />
                <PostAuthorName>{postData.author.name}</PostAuthorName>

                <PostDateModified> • Modified {(new Date(postData.modified)).toLocaleDateString()}</PostDateModified>
              </PostDateSection>
              <CategoryBullet data={postData.categories}  />
            </PostTopInfoSection>
          
            {postData.featured_media.thumbnail 
              ? <PostThumbnail src={postData.featured_media.thumbnail} alt="" />
              : null}

            <PostContent>
              {parse(postData.content)}
            </PostContent>

            <PostTags>Tags: {postData.tags.length !== 0 ? <CategoryBullet data={postData.tags} /> : ''} </PostTags>
            {
              postData.bibliography 
              ? <PostBibliography>Bibliography: {parse(postData.bibliography)}</PostBibliography>
              : null
            }
            
          </PostContainer>

          <PostAuthorProfileContainer>
            <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}}>
              <PostAuthorProfilePicture src={postData.author.picture ? postData.author.picture : 'https://beta.mejorconsalud.com/wp-content/themes/base-deploy/assets/img/about-us/no_profile.png'} alt={postData.title} alt={postData.title} />
              <div style={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column'}}>
                <PostAuthorProfileName>{postData.author.name}</PostAuthorProfileName>
                <PostAuthorProfileJob>{postData.author.profession}</PostAuthorProfileJob>
              </div>
            </div>
            
              {postData.author.description !== "" ? <PostAuthorProfileDescription>{parse(postData.author.description)}</PostAuthorProfileDescription> : ''}
        
          </PostAuthorProfileContainer>

        </PostSingleGrid>
      : <Loading>Carregando...</Loading>

      }
      

    </Container>
  )

}
