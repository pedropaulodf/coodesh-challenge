import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  list-style: none;
  flex-wrap: wrap;
  gap: 5px 0px;

  li + li {
    margin-left: 6px;
  }

  .active {
    /* opacity: 0.5; */
    background-color: #a9a9a9;
    color: white;
  }

`;

export const StyledPaginationButton = styled.button`
  width: fit-content;
  height: 40px;
  padding: 12px;
  border: none;
  background-color: #E4E4E4;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #C0C0C0;
  }
`;
