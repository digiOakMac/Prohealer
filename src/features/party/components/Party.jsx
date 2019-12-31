import React from 'react'
import styled from 'styled-components'
import { Item, Grid } from 'semantic-ui-react'
import Character from '../../character/components/Character'
import CharClasses from '../../character/CharClasses'

const Column = styled(Grid.Column)`
  max-width: 300px;
`

const Party = () => (
  <Grid columns={2} textAlign='center'>
    <Column>
      <Item.Group>
        <Character charClass={CharClasses.WARRIOR} />
        <Character charClass={CharClasses.ROGUE} />
        <Character charClass={CharClasses.HUNTER} />
      </Item.Group>
    </Column>
    <Column>
      <Item.Group>
        <Character charClass={CharClasses.DRUID} />
        <Character charClass={CharClasses.MAGE} />
        <Character charClass={CharClasses.PRIEST} />
      </Item.Group>
    </Column>
  </Grid>
)
export default Party
