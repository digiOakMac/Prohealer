import React from 'react'
import { Item, Grid, Header, Form, Segment, Message } from 'semantic-ui-react'
import Player from '../../player/components/Player'
import PlayerClasses from '../../player/playerClasses'

const Party = () => (
  <Grid textAlign='center' style={{ height: '100vh' }}>
    <Grid.Column style={{ maxWidth: 300 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Party
      </Header>
      <Item.Group>
        {Object.values(PlayerClasses).map(playerClass => (
          <Player playerClass={playerClass} />
        ))}
      </Item.Group>
      <Message>
         [ Healing toolbar here... ]
      </Message>
    </Grid.Column>
  </Grid>
)
export default Party
