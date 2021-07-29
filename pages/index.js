import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Head from "next/head";

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

  return (
    <Container>
      <GlobalStyle />
      <Head>
        <title>Translation, Inc</title>
        <meta property="og:title" content="Translation, Inc" />
        <link
          rel="icon"
          type="image/png"
          sizes="38x38"
          href="../assets/favicon.png"
        />
      </Head>
      <p>Coodesh Challenge</p>

      {allPosts.data.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </Container>
  );
}

// Styled Components
const GlobalStyle = createGlobalStyle`
 * {
   font-family: sans-serif;
 }
`;

const Container = styled.div`
  text-align: center;
`;
