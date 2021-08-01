import React, { useState } from "react";

import GlobalStyles from "../styles/GlobalStyles";
import Container from "../components/Container/Container";
import HeaderSEO from "../components/HeaderSEO/HeaderSEO";
import Header from "../components/Header/Header";
import PostCard from "../components/PostCard/PostCard";

import styled from "styled-components";

import api from "../services/api";

export async function getStaticProps(context) {
  // O que eu passar aqui, ele vai virar SEO
  const response = await api
    .get("posts", {params: {page: '3'}})
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

export default function Home({ response }) {
  
  const [allPosts, setAllPosts] = useState(response);

  const metasData = {
    title: "Home",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum vel velit sit amet scelerisque. Suspendisse in vestibulum sapien. Suspendisse nisl ipsum, hendrerit in odio ac, bibendum luctus nulla."
  };

  function handleCardButtonClick(postId){
    console.log('card-button-clicked', postId);
  }

  return (
    <Container>
      <GlobalStyles />
      <HeaderSEO metasData={metasData}/>
      <Header />

      <HeadTitle>Welcome to the Translation, Inc Blog!</HeadTitle>

      {allPosts.data.length === 0 
      ? (<NoPostsFindedMessage>Nenhum post encontrado!</NoPostsFindedMessage>) 
      : (
        <>
          <p style={{textAlign: 'right'}}>{allPosts.data.length === 0 ? 'No posts finded, remake your search :(' : allPosts.data.length === 1 ? '1 post finded' : `${allPosts.data.length} posts finded` }</p>

          <GridPosts>
            {allPosts.data.map((post) => {
              return (
                <PostCard key={post.id} postData={post} onCardButtonClick={handleCardButtonClick}/>
              );
            })}
          </GridPosts>
        </>
      )
      }
     
    </Container>
  );
}

const GridPosts = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px 10px;
  margin-top: 20px;

  @media(min-width: 1024px) {}
  
  @media(min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  
  @media(max-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media(max-width: 460px) {
    grid-template-columns: 1fr;
  }

`;

const HeadTitle = styled.h1`
  font-size: 2em;
  border-left: 5px solid #cccccc;
  padding-left: 10px;
`;

const NoPostsFindedMessage = styled.h3`
  font-size: 1.6em;
  text-align: center;
  margin-top: 50px;
  color: #bbbbbb;
`;