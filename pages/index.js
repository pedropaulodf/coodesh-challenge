import React, { useEffect, useState } from "react";

import GlobalStyles from "../styles/GlobalStyles";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import PostCard from "../components/PostCard/PostCard";

import styled from "styled-components";

import api from "../services/api";
import Pagination from "../components/Pagination/Pagination";
import Loading from "../components/Loading/Loading";
import Head from "next/head";

const PAGINATION_LIMIT = 12;

// export async function getStaticProps(context) {
  
//   // O que eu passar aqui, ele vai virar SEO
//   const response = await api.get("posts", { params: { page: '1' }})
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//       return false;
//     });

//   // will be passed to the page component as props
//   return {
//     props: {
//       response,
//     },
//   };
// }

export default function Home() {
  
  const [allPosts, setAllPosts] = useState();
  const [loading, setLoading] = useState(true);

  const [offset, setOffset] = useState(0);
  const [actualPage, setActualPage] = useState(1);

  const [searchParams, setsearchParams] = useState({params: { page: '1'}});
  const [searchText, setSearchText] = useState(false);
  const [mostRelevantPosts, setMostRelevantPosts] = useState(false);

  const metasData = {
    title: "Home",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum vel velit sit amet scelerisque. Suspendisse in vestibulum sapien. Suspendisse nisl ipsum, hendrerit in odio ac, bibendum luctus nulla."
  };


  useEffect(()=> {
    setAllPosts();
    setLoading(false);
  },[])

  useEffect(() => {
    searchPosts()
  }, [searchParams])

  // useEffect(() => {
  //   console.log(actualPage);
  // }, [actualPage])

  async function searchPosts(params){

    setLoading(true);

    // console.log(searchParams);

    // O que eu passar aqui, ele vai virar SEO
    await api.get("posts", searchParams)
    .then((response) => {
      console.log(response.data);
      setAllPosts(response.data);
      setLoading(false);
      return;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });

  }

  function handleCardButtonClick(postId){
    // console.log('card-button-clicked', postId);
  }

  function handleSearch(search){
    
    if(search.error){
      setSearchText('');
      console.log(search.error);
      return;
    }
    
    if(search.searchString.length > 0){
      setsearchParams({params: {...searchParams.params, search: search.searchString }});
    } else {
      delete searchParams.params.search
      setsearchParams({params: {...searchParams.params }});
    }

    setSearchText(search.searchString);
    // searchPosts();
  }

  function handleSwitchAction(switchChecked){
    
    if(switchChecked){
      setsearchParams({params: {...searchParams.params, orderby: 'relevance' }});
      // searchPosts({params: {...searchParams.params, orderby: 'relevance' }});
    } else {
      delete searchParams.params.orderby
      setsearchParams({params: {...searchParams.params }});
    }
    setMostRelevantPosts(switchChecked);
    // searchPosts({params: {...searchParams.params }});
  }

  // function handleSearch(search){
  //   searchPosts(search);
  // }

  function handlePaginationClick(page){
    setsearchParams({params: {...searchParams.params, page: page }});
    setActualPage(page);
  }

  return (
    <Container>
      <GlobalStyles />
      {/* <HeaderSEO metasData={metasData}/> */}
      <Header searchData={handleSearch} switchAction={handleSwitchAction}/>

      <Head>
        <title>{metasData.title ? `${metasData.title} | Translation, Inc`: 'Translation, Inc'}</title>
        <meta property="og:title" content={metasData.title ? `${metasData.title} | Translation, Inc`: 'Translation, Inc'} />
        <meta name="description" content={metasData.description} />
        <link rel="icon" type="image/png" sizes="38x38" href="../images/favicon.png"/>
      </Head>

      <HeadTitle>Welcome to the Translation, Inc Blog!</HeadTitle>

      {!loading 
      ? allPosts.data.length === 0 
        ? (<NoPostsFindedMessage>No posts finded!</NoPostsFindedMessage>) 
        : (
          <>
            <div style={{display: 'flex',justifyContent: 'flex-end',marginTop: '10px',marginBottom: '-10px'}}>
              <QttyPostsFinded style={{textAlign: 'right'}}>{allPosts.size === 1 ? '1 post finded' : `${allPosts.size} posts finded` }</QttyPostsFinded>
            </div>

            <Pagination 
              limit={PAGINATION_LIMIT} 
              total={allPosts.pages} 
              pagesApi={allPosts.pages} 
              offset={offset}
              setOffset={setOffset}
              actualPage={handlePaginationClick}
            />

            <GridPosts>
              {allPosts.data.map((post) => {
                return (
                  <PostCard 
                  key={post.id} 
                  postData={post} 
                  onCardButtonClick={handleCardButtonClick}
                  />
                );
              })}
            </GridPosts>

            <Pagination 
              limit={PAGINATION_LIMIT} 
              total={allPosts.pages} 
              pagesApi={allPosts.pages} 
              offset={offset}
              setOffset={setOffset}
              actualPage={handlePaginationClick}
            />
            
          </>
        )
      : (<Loading>Loading...</Loading>) }

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
  padding: 10px 0px 10px 10px;
  background: linear-gradient(  90deg  ,rgb(232 232 232) 0%,rgba(255,255,255,0) 100%);
`;

const NoPostsFindedMessage = styled.h3`
  font-size: 1.6em;
  text-align: center;
  margin-top: 50px;
  color: #bbbbbb;
`;

const QttyPostsFinded = styled.p`
  text-align: right;
  border: 1.6px dashed #afafaf;
  width: fit-content;
  padding: 3px 5px;
  border-radius: 6px;
  font-size: 0.8em;
`;