import styled from "styled-components";

export const StyledContainer = styled.div`

  width: 100%;
  /* display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 
    "col-1 col-4"
  ;
   */

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin: 20px 0px 50px 0px;

  @media(min-width: 1024px) {
    /* padding: 0px 20px; */
    /* background-color: blue; */
  }
  
  @media(min-width: 768px) and (max-width: 1023px) {
    /* padding: 0px 20px; */
    /* background-color: yellow; */
  }
  
  @media(max-width: 767px) {
    /* padding: 0px 20px; */
    /* background-color: green; */
    flex-direction: column;
    align-items: center;
  }
  
  @media(max-width: 340px) {
    /* padding: 0px 20px; */
    /* background-color: orange; */
  }
  
`;
