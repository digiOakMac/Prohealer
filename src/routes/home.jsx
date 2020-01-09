import React from 'react'
import styled from 'styled-components'
import { Grid } from 'semantic-ui-react'
import Boss from '../features/boss/components/Boss'
import Bosses from '../features/boss/BossGallery'
import Party from '../features/party/components/Party'
import CastingBar from '../features/castingbar/components/CastingBar'
import ToolBar from '../features/toolbar/components/ToolBar'

function Home() {
  const GameDiv = styled.div`
    padding: 1em;
  `

  const Column = styled(Grid.Column)`
    max-width: 300px;
  `

  const Row = styled(Grid.Row)`
    padding-bottom: 0 !important;
  `

  const ToolBarRow = styled(Grid.Row)`
    padding-top: 0 !important;
  `

  return (
    <GameDiv>
      <Grid columns={1} textAlign='center'>
        <Row>
          <Column>
            <Boss boss={Bosses.DARK_ELF} />
          </Column>
        </Row>
        <Row>
          <Column>
            <Party />
          </Column>
        </Row>
        <Row>
          <Column>
            <CastingBar />
          </Column>
        </Row>
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
