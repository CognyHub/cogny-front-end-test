import React from 'react';
import MainComponent from '../../components/MainComponent';
import { DivExterna, MainS } from './Style';

function Main() {
  return (
    <DivExterna>
      <p>Teste</p>
      <MainS>
        <MainComponent />
      </MainS>
    </DivExterna>
  );
}

export default Main;
