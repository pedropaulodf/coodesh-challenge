import styled from "styled-components";

export const StyledContainer = styled.div`

  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-bottom: 50px;
  
  @media(min-width: 1024px) {
    padding: 0px 20px;
    /* background-color: blue; */
  }
  
  @media(min-width: 768px) and (max-width: 1023px) {
    padding: 0px 20px;
    /* background-color: yellow; */
  }
  
  @media(max-width: 767px) {
    padding: 0px 20px;
    /* background-color: green; */
  }
  
  @media(max-width: 340px) {
    padding: 0px 20px;
    /* background-color: orange; */
  }
  
`;

export const StyledCoGrid = styled.div`

  width: 100%;

  @media(min-width: 1024px) {
    max-width: 1200px;
    /* background-color: crimson; */
  }
  
  @media(min-width: 768px) and (max-width: 1023px) {
    max-width: 900px;
    /* background-color: crimson; */
  }
  
  @media(max-width: 767px) {
    max-width: 800px;
    /* background-color: crimson; */
  }
  
  @media(max-width: 340px) {
    max-width: 340px;
    /* background-color: crimson; */
  }
`;