import React, { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";

import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import GlobalStyles from "../../styles/GlobalStyles";
import Loading from "../../components/Loading/Loading";
import CategoryBullet from "../../components/CategoryBullet/CategoryBullet";

import parse from "html-react-parser";
import api from "../../services/api";

import {
  PostAuthorProfileContainer,
  PostAuthorName,
  PostAuthorPicture,
  PostContainer,
  PostContent,
  PostDateModified,
  PostDatePublished,
  PostDateSection,
  PostHeadline,
  PostSingleGrid,
  PostThumbnail,
  PostTitle,
  PostTopInfoSection,
  PostAuthorProfilePicture,
  PostAuthorProfileName,
  PostAuthorProfileDescription,
  PostAuthorProfileJob,
  PostTags,
  PostBibliography,
  PostTagsWraper,
} from "../../styles/SingleStyles";
import Head from "next/head";

export async function getStaticPaths() {

  // const paths = [];
  // for (let i = 0; i <= 50000; i++) {
  //   paths.push({ params: { id: String(i) } });
  // }

  return {
    paths: [
      {
        params: {
          id: '265206'
        }
      },
      {
        params: {
          id: '410057'
        }
      }
    ],
    fallback: 'blocking', // See the "fallback" section below
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  // console.log(id);
  // O que eu passar aqui, ele vai virar SEO
  // const response = await api.get(`posts/${id}`)
  const response = await api
  .get(`posts/${id}`)
  .then((response) => {
    // console.log(response);
    return response.data;
  })
  .catch((error) => {
    console.log(error);
    return false;
  });

  // if (response.status === "404") {
  //   return { notFound: true };
  // }

  return {
    props: {
      response,
    }, // will be passed to the page component as props
  };
}

// export async function getServerSideProps(context) {

//   const id = context.query.id;

//   const response = await api
//     .get(`posts/${id}`)
//     .then((response) => {
//       // console.log(response);
//       return response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//       return false;
//     });

//   return {
//     props: {
//       response,
//     }, // will be passed to the page component as props
//   };

// }

export default function Single({response}) {
  // console.log(response);

  const router = useRouter();
  // const id = props.id;

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  // const [postData, setPostData] = useState({});
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
    
    // setPostData(response);
    // setLoading(false);

    // if(response.status !== '404'){
    //   setLoading(false);
    // }

    // const getData = async () => {
    //   // O que eu passar aqui, ele vai virar SEO
    //   await api.get(`posts/${id}`)
    //   .then((response) => {
    //     console.log(response.data);
    //     setPostData(response.data);
    //     setLoading(false);
    //     return;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     return false;
    //   });
    // }
    // getData();
  // }, []);

  return (
    <Container>
      <GlobalStyles />

      <Header onlyLogo />

        <Head>
          <title>{`${response.metas["title"]} | Translation, Inc`}</title>
          <link
            rel="icon"
            type="image/png"
            sizes="38x38"
            href="../images/favicon.png"
          />

          <meta name="ampUrl" content={response.metas["ampUrl"]} />
          <meta
            name="article:author"
            content={response.metas["article:author"]}
          />
          <meta
            name="article:publisher"
            content={response.metas["article:publisher"]}
          />
          <meta
            name="article:section"
            content={response.metas["article:section"]}
          />
          {/* <meta name="article:tag" content={response.metas["article:tag"]} /> */}
          <meta name="canonical" content={response.metas["canonical"]} />
          <meta name="description" content={response.metas["description"]} />
          <meta name="title" content={response.metas["title"]} />
          <meta name="twitter:card" content={response.metas["twitter:card"]} />
          <meta
            name="twitter:creator"
            content={response.metas["twitter:creator"]}
          />
          <meta name="twitter:site" content={response.metas["twitter:site"]} />
          <meta
            property="og:description"
            content={response.metas["og:description"]}
          />
          <meta property="og:image" content={response.metas["og:image"]} />
          <meta
            property="og:image:alt"
            content={response.metas["og:image:alt"]}
          />
          <meta
            property="og:image: height"
            content={response.metas["image: height"]}
          />
          <meta
            property="og:image:secure_url"
            content={response.metas["og:image:secure_url"]}
          />
          <meta
            property="og:image: width"
            content={response.metas["og:image: width"]}
          />
          <meta property="og:locale" content={response.metas["og:locale"]} />
          <meta
            property="og:site_name"
            content={response.metas["og:site_name"]}
          />
          <meta
            property="og:title"
            content={`${response.metas["og:title"]} | Translation, Inc`}
          />
          <meta property="og:type" content={response.metas["og:type"]} />
        </Head>
        
        <PostSingleGrid>
          <PostContainer>
            <PostTitle>{response.title}</PostTitle>
            {response.headline ? (
              <PostHeadline>{response.headline}</PostHeadline>
            ) : null}

            <PostTopInfoSection>
              <PostDateSection>
                <div style={{marginRight: '10px'}}>
                  <PostDatePublished>
                    {new Date(response.published).toLocaleDateString()}
                  </PostDatePublished>

                  <PostDateModified>
                    Modified {new Date(response.modified).toLocaleDateString()}
                  </PostDateModified>
                </div>
                <div style={{display: 'flex', alignItems: 'center', marginRight: '10px'}}>
                  <PostAuthorPicture
                    src={
                      response.author.picture !== ''
                        ? response.author.picture
                        : "https://beta.mejorconsalud.com/wp-content/themes/base-deploy/assets/img/about-us/no_profile.png"
                    }
                    alt="Author"
                  />
                  <PostAuthorName>{response.author.name}</PostAuthorName>
                </div>

              </PostDateSection>
              <div style={{marginTop: '10px', marginBottom: '-6px'}}>
                <CategoryBullet data={response.categories} />
              </div>
            </PostTopInfoSection>

            {response.featured_media.thumbnail !== null &&
            response.featured_media.thumbnail !== undefined ? (
              <PostThumbnail src={response.featured_media.thumbnail} alt="" />
            ) : null}

            <PostContent>{parse(response.content)}</PostContent>

            <PostTagsWraper>
              <PostTags>
                Tags:
              </PostTags>
              {response.tags.length !== 0 ? (
                  <CategoryBullet data={response.tags} />
                ) : (
                  ""
                )}
            </PostTagsWraper>

            {response.bibliography ? (
              <PostBibliography>
                Bibliography: {parse(response.bibliography)}
              </PostBibliography>
            ) : null}
          </PostContainer>

          <PostAuthorProfileContainer>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <PostAuthorProfilePicture
                src={
                  response.author.picture
                    ? response.author.picture
                    : "https://beta.mejorconsalud.com/wp-content/themes/base-deploy/assets/img/about-us/no_profile.png"
                }
                alt="Thumbnail"
                alt="Thumbnail"
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <PostAuthorProfileName>
                  {response.author.name}
                </PostAuthorProfileName>
                <PostAuthorProfileJob>
                  {response.author.profession}
                </PostAuthorProfileJob>
              </div>
            </div>

            {response.author.description !== "" ? (
              <PostAuthorProfileDescription>
                {parse(response.author.description)}
              </PostAuthorProfileDescription>
            ) : (
              ""
            )}
          </PostAuthorProfileContainer>
        </PostSingleGrid>
        
    </Container>
  );
}
