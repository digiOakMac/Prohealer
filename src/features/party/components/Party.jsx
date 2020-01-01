import React from 'react'
import Character from '../../character/components/Character'
import CharClasses from '../../character/CharClasses'
import { Segment } from 'semantic-ui-react'

const Party = () => (
  <Segment.Group>
    <Character charClass={CharClasses.WARRIOR} />
    <Character charClass={CharClasses.ROGUE} />
    <Character charClass={CharClasses.HUNTER} />
    <Character charClass={CharClasses.DRUID} />
    <Character charClass={CharClasses.MAGE} />
    <Character charClass={CharClasses.PRIEST} />
  </Segment.Group>
)
export default Party
