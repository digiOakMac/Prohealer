import React from 'react'
import styled from 'styled-components'
import { Button, Image, List } from 'semantic-ui-react'
import images from '../images'

const ImageButton = styled(Button)`
  padding: 0.35em !important;
`

const ToolBar = () => {
  return (
    <List horizontal>
      <ImageButton>
        <Image rounded src={images.LESSER_HEAL} size='mini' />
      </ImageButton>
      <ImageButton>
        <Image rounded src={images.GREATER_HEAL} size='mini' />
      </ImageButton>
      <ImageButton>
        <Image rounded src={images.INSTANT_HEAL} size='mini' />
      </ImageButton>
      <ImageButton>
        <Image rounded src={images.MASS_HEAL} size='mini' />
      </ImageButton>
    </List>
  )
}

export default ToolBar
