import React from 'react'
import { Item } from 'semantic-ui-react'
import styled from 'styled-components'

const PlayerItem = styled(Item)`
  cursor: pointer;
  border: 1px solid rgba(34,36,38,.15) !important;
  border-radius: 5px !important;
  padding: 0.5em !important;
`

const PlayerImage = styled(Item.Image)`
  img {
    border-radius: 5px !important;
  }
`

const Player = (props) => {
  const { playerClass } = props
  return (
    <PlayerItem key={playerClass.name}>
      <PlayerImage size='tiny' src={playerClass.image} />
      <PlayerItem.Content>
        <PlayerItem.Header>{playerClass.name}</PlayerItem.Header>
        <PlayerItem.Meta>Description</PlayerItem.Meta>
        <PlayerItem.Description>Some description...</PlayerItem.Description>
        {/* <PlayerItem.Extra>Additional Details</PlayerItem.Extra> */}
      </PlayerItem.Content>
    </PlayerItem>
  )
}
export default Player
