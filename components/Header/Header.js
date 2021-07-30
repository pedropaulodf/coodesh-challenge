import React from 'react'
import InputSearch from '../InputSearch/InputSearch'

import { StyledContainer } from './HeaderStyles'

export default function Header() {

  function handleSearchValue(text){
    console.log(text);
  }

  function handleSearchButtonClick(){
    console.log('clicked');
  }

  return (
    <StyledContainer>
      <div>
        <img src="../images/logo.png" alt="" />
      </div>
      <div><p>Most Relevant</p></div>
      <div>
        <InputSearch onTextChange={handleSearchValue} onButtonSearchClick={handleSearchButtonClick}/>
      </div>
    </StyledContainer>
  )
}
