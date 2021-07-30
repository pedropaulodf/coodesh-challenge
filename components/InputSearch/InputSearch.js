import React, { useState } from "react";

import { StyledInput, StyledButton } from './InputSearchStyles'

export default function InputSearch({onTextChange, onButtonSearchClick}) {

  const [inputVal, setInputVal] = useState('');
  
  function handleTextChange(text){
    setInputVal(text);
    onTextChange(text);
  }

  function handleButtonClick(){
    onButtonSearchClick();
  }

  return (
    <div style={{}}>
      <StyledInput type="text" placeholder="Search here:" defaultValue={inputVal} onChange={v => handleTextChange(v.target.value)}/>
      <StyledButton onClick={handleButtonClick}>
        <img src="../images/search.png" alt="Do search" width="20px"/>
      </StyledButton>
    </div>
  );
}
