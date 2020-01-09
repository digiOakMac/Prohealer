import React from 'react'
import {Image, Menu } from 'semantic-ui-react'
import images from '../images'
import styled from 'styled-components'

const ImageButton = styled(Image)`
  transform: scale(1.5);
`

const ToolBar = () => {
  return (
    <Menu>
      <Menu.Item>
        <ImageButton rounded src={images.LESSER_HEAL} size='mini' />
      </Menu.Item>
      <Menu.Item>
        <ImageButton rounded src={images.GREATER_HEAL} size='mini' />
      </Menu.Item>
      <Menu.Item>
        <ImageButton rounded src={images.INSTANT_HEAL} size='mini' />
      </Menu.Item>
      <Menu.Item>
        <ImageButton rounded src={images.MASS_HEAL} size='mini' />
      </Menu.Item>
    </Menu>
  )
}

export default ToolBar
