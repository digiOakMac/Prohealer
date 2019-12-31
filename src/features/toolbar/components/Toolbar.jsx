import React from 'react'
import styled from 'styled-components'
import { Button, Grid, Image, Menu } from 'semantic-ui-react'
import images from '../images'

const Column = styled(Grid.Column)`
  max-width: 500px;
`

const ImageButton = styled(Button)`
  padding: 0.35em !important;
`

const ToolBar = () => {
  return (
    <Grid textAlign='center'>
      <Column>
        <Menu secondary>
          <Menu.Item>
          <ImageButton>
            <Image rounded src={images.LESSER_HEAL} size='tiny' />
          </ImageButton>
          </Menu.Item>
          <Menu.Item>
          <ImageButton>
            <Image rounded src={images.GREATER_HEAL} size='tiny' />
          </ImageButton>
          </Menu.Item>
          <Menu.Item>
          <ImageButton>
            <Image rounded src={images.INSTANT_HEAL} size='tiny' />
          </ImageButton>
          </Menu.Item>
          <Menu.Item>
          <ImageButton>
            <Image rounded src={images.MASS_HEAL} size='tiny' />
          </ImageButton>
          </Menu.Item>
        </Menu>
      </Column>
    </Grid>
  )
}

export default ToolBar
