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

  @media (min-width: 1024px) {
  }

  @media (min-width: 768px) and (max-width: 1023px) {
  }

  @media (max-width: 767px) {
  }

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    gap: 10px 0px;
  }

  @media (max-width: 340px) {
  }
`;

export const StyledHeaderControlsWraper = styled.div`
  gap: 8px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 550px) {
    align-items: center;
  }
`;

export const StyledLogo = styled.img`
  width: 100%;
  cursor: pointer;
`;

export const StyledErrorMessage = styled.p`
  position: absolute;
  color: red;
  font-size: 0.7em;
`;

export const StyledMostRelevantBox = styled.div`
  border: 2px solid #d2d2d2;
  border-radius: 8px;
  padding: 7px 10px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: fit-content;
`;

export const StyledMostRelevantBoxText = styled.p`
  font-size: 0.8em;
  margin-right: 14px;
`;
