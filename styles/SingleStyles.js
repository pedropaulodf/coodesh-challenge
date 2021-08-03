import styled from "styled-components";

export const PostSingleGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 0px 50px;
  margin-top: -20px;
  
  @media(min-width: 1024px) {
    
  }
  
  @media(min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 2fr 1fr;
    gap: 0px 20px;
  }
  
  @media(max-width: 767px) {
    grid-template-columns: 2fr 1fr;
    gap: 30px 10px;
  }
  
  
  @media(max-width: 700px) {
    grid-template-columns: 1fr;
  }
  
  @media(max-width: 340px) {
  grid-template-columns: 1fr;
    
  }

`;

export const PostContainer = styled.div`
  width: 100%;
  /* max-width: 800px; */
  padding: 16px;
  border: 2px solid #e2e2e2;
  background-color: #ffffff;
  border-radius: 8px;
  word-break: break-word;
`;

export const PostTitle = styled.h1`
  font-family: 'Hammersmith One', sans-serif;
  margin: 10px 0px 10px 0px;
  font-size: 2em;
`;

export const PostHeadline = styled.p`
  font-size: 1em;
  margin-bottom: 24px;
  color: #a0a0a0;
`;

export const PostTopInfoSection= styled.div`
  font-size: 1.2em;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  @media(max-width: 700px) {
    flex-direction: column;
  }

`;

export const PostDateSection = styled.div`
  font-size: 1.2em;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;

  @media(max-width: 700px) {
    width: 100%;
    justify-content: space-between;
  }

`;

export const PostDatePublished = styled.p`
  font-size: 0.7em;
  font-weight: bold;
`;

export const PostDateModified = styled.p`
  font-size: 0.5em;
  margin-left: 0px;
  color: #C9C9C9;
`;

export const PostAuthorPicture = styled.img`
  border-radius: 50px;
  width: 30px;
  border: 2px solid #e0e0e0;
  margin-left: 8px;
  margin-right: 8px;
`;

export const PostAuthorName = styled.p`
  font-size: .7em;
`;

export const PostThumbnail = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 3px 6px 13px 0px #cccccc;
  object-fit: cover;
  /* background-size: cover; */
  /* background-size: contain; */
`;

export const PostContent = styled.div`
  font-size: 1em;
  line-height: 1.4em;
  margin-bottom: 20px;

  * > img {
    width: 100%;
    height: auto;
    border-radius: 4px;
    margin: 18px 0px;
  }

  p {
    margin: 8px 0px;
  }

  h2 {
    margin-top: 20px;
    margin-bottom: 16px;
  }

  h3 {
    margin-top: 16px;
    margin-bottom: 14px;
  }

  ul,ol {
    margin-left: 30px;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  li{
    margin: 10px 0px;
  }

  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }

`;

export const PostTags = styled.p`
  display: flex;
  font-size: 0.9em;
  font-weight: bold;
  margin-bottom: 30px;
  margin-top: 40px;
  border-top: 2px dashed #d2d2d2;
  border-bottom: 2px dashed #d2d2d2;
  padding: 15px 0px;
  align-items: center;
`;

export const PostBibliography = styled.p`
  margin-top: 20px;
  font-size: 0.8em;
  line-height: 1.4em;
  margin-bottom: 20px;

  figure > img {
    width: 100%;
    height: auto;
    border-radius: 4px;
    margin: 18px 0px;
  }

  p {
    margin: 8px 0px;
  }

  h2 {
    margin-top: 20px;
    margin-bottom: 16px;
  }

  h3 {
    margin-top: 16px;
    margin-bottom: 14px;
  }

  ul {
    margin-left: 30px;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  li{
    margin: 10px 0px;
    list-style-type: circle;
  }
`;

/* Author Profile */
export const PostAuthorProfileContainer = styled.div`
  width: 100%;
  padding: 16px;
  border: 2px solid #e2e2e2;
  background-color: #ffffff;
  border-radius: 8px;
  height: fit-content;
  /* &:hover {
    box-shadow: 0px 0px 10px 6px #33333310;
  } */
`;

export const PostAuthorProfilePicture = styled.img`
  border-radius: 50px;
  width: 90px;
  height: 90px;
  border: 2px solid #e0e0e0;
  margin-left: 8px;
  margin-right: 8px;
`;

export const PostAuthorProfileName = styled.p`
  font-size: 1.1em;
  font-weight: bold;
`;

export const PostAuthorProfileJob = styled.p`
  font-size: 1em;
  color: #a2a2a2;
`;

export const PostAuthorProfileDescription = styled.p`
  margin-top: 20px;
  font-size: .9em;
  line-height: 1.4em;
  margin-bottom: 20px;

  figure > img {
    width: 100%;
    height: auto;
    border-radius: 4px;
    margin: 18px 0px;
  }

  p {
    margin: 8px 0px;
  }

  h2 {
    margin-top: 20px;
    margin-bottom: 16px;
  }

  h3 {
    margin-top: 16px;
    margin-bottom: 14px;
  }

  ul {
    margin-left: 30px;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  li{
    margin: 10px 0px;
    list-style-type: circle;
  }
`;
