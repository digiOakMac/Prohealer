import React from 'react';
import styled from 'styled-components'
import Party from '../features/party/components/Party'
import Toolbar from '../features/toolbar/components/Toolbar'


const GameDiv = styled.div`
  padding: 1em;
`

function Home() {
  return (
    <GameDiv>
      <Party />
      <Toolbar />
    </GameDiv>
  );
}

export default Home;
