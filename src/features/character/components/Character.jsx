import React from 'react'
import { Image, Progress, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

const CharacterSegment = styled(Segment)`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  padding: 0 1em !important;
`

const CharInfoDiv = styled.div`
  flex-grow: 1;
  padding-left: 1em;
  margin-top: 2px;
  margin-bottom: -13px;
`

const Portrait = styled(Image)`
  border-radius: 50%;
`

const Character = props => {
  const { charClass } = props
  return (
    <CharacterSegment>
      <div>
        <Portrait size='mini' src={charClass.image} />
      </div>
      <CharInfoDiv>
        <span>{charClass.name}</span>
        <Progress size='small' progress='ratio' value={900} total={1000} success />
      </CharInfoDiv>
    </CharacterSegment>
  )
}
export default Character
