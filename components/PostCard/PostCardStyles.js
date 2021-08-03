import styled from "styled-components";

export const StyledCardContainer = styled.div`
  width: 100%;
  padding: 16px;
  border: 2px solid #EDEDED;
  background-color: #F9F9F9;
  border-radius: 8px;
  position: relative;

  &:hover { 
    border: 2px solid #d6d6d6;
  }
`;

export const StyledCardDateCategory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0px;
`;

export const StyledCardDate = styled.p`
  font-size: 0.8em;
`;

export const StyledCardThumbnail = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 190px;
  object-fit: cover;
`;

export const StyledCardTitle = styled.h2`
  font-family: 'Hammersmith One', sans-serif;
  margin-bottom: 12px;
`;

export const StyledCardSubText = styled.p`
  font-size: 1em;
  margin-bottom: 58px;
  width: 100%;
  line-height: 1.2em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  word-break: break-word;

`;
