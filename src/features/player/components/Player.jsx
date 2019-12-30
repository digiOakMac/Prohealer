import React from 'react'
import { Item, Progress } from 'semantic-ui-react'
import styled from 'styled-components'

const PlayerItem = styled(Item)`
  cursor: pointer;
  user-select: none;
  border: 1px solid rgba(34,36,38,.15) !important;
  border-radius: 5px !important;
  padding: 0.45em !important;
`

const PlayerImage = styled(Item.Image)`
  img {
    border-radius: 5px !important;
  }
`

const PlayerContent = styled(PlayerItem.Content)`
  padding-left: 1em !important;
  padding-right: 0.5em !important;
`

const Player = (props) => {
  const { playerClass } = props
  return (
    <PlayerItem key={playerClass.name}>
      <PlayerImage size='tiny' src={playerClass.image} />
      <PlayerContent>
        {/* <PlayerItem.Header></PlayerItem.Header> */}
        <PlayerItem.Meta>{playerClass.name}</PlayerItem.Meta>
        <PlayerItem.Description>
          <Progress progress='ratio' value={900} total={1000} success/>
        </PlayerItem.Description>
        {/* <PlayerItem.Extra>Additional Details</PlayerItem.Extra> */}
      </PlayerContent>
    </PlayerItem>
  )
}
export default Player
