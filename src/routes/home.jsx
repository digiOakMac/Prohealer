import React from 'react'
import styled from 'styled-components'
import { Grid } from 'semantic-ui-react'
import Party from '../features/party/components/Party'
import CastingBar from '../features/castingbar/components/CastingBar'
import ToolBar from '../features/toolbar/components/ToolBar'

const GameDiv = styled.div`
  padding: 1em;
`

const Column = styled(Grid.Column)`
  max-width: 300px;
`

const ToolBarRow = styled(Grid.Row)`
  margin-top: -22px;
` 

function Home() {
  return (
    <GameDiv>
      <Grid columns={1} textAlign='center'>
        <Grid.Row>
          <Column>
            <Party />
          </Column>
        </Grid.Row>
        <Grid.Row>
          <Column>
            <CastingBar />
          </Column>
        </Grid.Row>
        <ToolBarRow>
          <Column>
            <ToolBar />
          </Column>
        </ToolBarRow>
      </Grid>
    </GameDiv>
  )
}

export default Home
