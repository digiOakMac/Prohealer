import React from 'react'
import { Image, Item, Progress } from 'semantic-ui-react'
import styled from 'styled-components'

const Char = styled(Item)`
  cursor: pointer;
  user-select: none;
  border: 1px solid rgba(34,36,38,.15) !important;
  border-radius: 5px !important;
  padding: 0.45em !important;
  margin: 0.45em !important;
`

const Content = styled(Item.Content)`
  padding-left: 1em !important;
  padding-right: 0.5em !important;
`

const Character = (props) => {
  const { charClass } = props
  return (
    <Char>
      <Image rounded size='tiny' src={charClass.image} />
      <Content>
        {/* <Char.Header></Char.Header> */}
        <Char.Meta>{charClass.name}</Char.Meta>
        <Char.Description>
          <Progress progress='ratio' value={900} total={1000} success/>
        </Char.Description>
        {/* <Char.Extra>Additional Details</Char.Extra> */}
      </Content>
    </Char>
  )
}
export default Character
