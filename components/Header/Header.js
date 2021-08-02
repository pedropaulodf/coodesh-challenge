import Link from 'next/link';
import React, { useState } from 'react'
import InputSearch from '../InputSearch/InputSearch'
import Switch from "react-switch";

import { StyledContainer, StyledErrorMessage, StyledLogo, StyledMostRelevantBox, StyledMostRelevantBoxText } from './HeaderStyles'

export default function Header({searchData, switchAction, onlyLogo = false}) {

  const [switchChecked, setSwitchChecked] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [errorText, setErrorText] = useState('');

  function validateSearchValue(text){
    
    if(text === undefined){
      setErrorText('Blank field');
      // return { error: 'Blank field' };
      return { searchString: '' };
    }

    setErrorText('');
    return { searchString: text };
  }

  function handleSearchValue(text){
    const search = validateSearchValue(text);
    setSearchText(search.searchString);
    // searchData(search);
  }

  function handleSearchButtonClick(){
    const search = validateSearchValue(searchText);
    searchData(search);
  }

  function handleSwitch(){
    const switchVal = !switchChecked;
    switchAction(switchVal);
    setSwitchChecked(switchVal);
  }

  return (
    <StyledContainer>
      <div>
        <Link href="/">
          <StyledLogo src="../images/logo.png" alt="" />
        </Link>
      </div>
      {
        !onlyLogo && (
          <StyledMostRelevantBox>
          <StyledMostRelevantBoxText>Most Relevant Posts</StyledMostRelevantBoxText> 
          <Switch 
            onChange={handleSwitch} 
            checked={switchChecked} 
            onColor="#c9e6c4"
            onHandleColor="#449e5c"
            handleDiameter={16}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={10}
            width={30}
            className="react-switch"
            id="material-switch"
          />
        </StyledMostRelevantBox>
        )
      }
      
      <div>

        {!onlyLogo && (
          <>
            <InputSearch onTextChange={handleSearchValue} onButtonSearchClick={handleSearchButtonClick}/>
            <StyledErrorMessage>{errorText}</StyledErrorMessage>
          </>
        )}
        
      </div>
    </StyledContainer>
  )
}
