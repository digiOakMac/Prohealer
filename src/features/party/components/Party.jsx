import React from 'react'
import { Item } from 'semantic-ui-react'
import Player from '../../player/components/Player'
import PlayerClasses from '../../player/playerClasses'

const Party = () => (
  <Item.Group>
    { Object.values(PlayerClasses).map(playerClass => <Player playerClass={playerClass} />)  }
  </Item.Group>
)
export default Party
