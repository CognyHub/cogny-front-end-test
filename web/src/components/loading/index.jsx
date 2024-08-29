import React from 'react';
import { SpinnerContainer, Spinner, } from './styles';


function Loading() {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
}

export default Loading;
