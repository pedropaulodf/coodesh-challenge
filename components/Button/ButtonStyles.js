import styled from "styled-components";

export const StyledButton = styled.button`
  width: calc(100% - 32px);
  height: 40px;
  border: none;
  background-color: #E0E0E0;
  border-radius: 7px;
  font-size: 0.9em;
  cursor: pointer;
  position: absolute;
  bottom: 16px;
  &:hover {
    background-color: #d0d0d0;
  }
`;
