import React, { useState } from "react";

import GlobalStyles from "../styles/GlobalStyles";
import Container from "../components/Container/Container";
import HeaderSEO from "../components/HeaderSEO/HeaderSEO";
import Header from "../components/Header/Header";
import PostCard from "../components/PostCard/PostCard";

import api from "../services/api";

export async function getStaticProps(context) {
  // O que eu passar aqui, ele vai virar SEO
  const response = await api
    .get("posts")
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

      <h1>Welcome to the Translation, Inc Blog!</h1>

      <p style={{textAlign: 'right'}}>{allPosts.data.length === 0 ? 'No posts finded, remake your search :(' : allPosts.data.length === 1 ? '1 post finded' : `${allPosts.data.length} posts finded` }</p>

      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "10px 10px"}}>
        {allPosts.data.map((post) => {
          return (
            <PostCard key={post.id} postData={post} onCardButtonClick={handleCardButtonClick}/>
          );
        })}
      </div>
    </Container>
  );
}
