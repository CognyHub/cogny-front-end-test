import React from 'react';
import { SpinnerContainer, Spinner } from './styles';

function Loading() {
  return (
    <SpinnerContainer data-testid="loading">
      <Spinner />
    </SpinnerContainer>
  );
}

export default Loading;
