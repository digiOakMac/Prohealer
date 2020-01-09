import React from 'react'
import { Image, Progress, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

const Boss = props => {

  const {name, image} = props.boss

  const Boss = styled(Segment)`
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    padding: 0 1em !important;
    -webkit-tap-highlight-color: transparent;
  `

  const Portrait = styled(Image)`
    border-radius: 50%;
    transform: scale(0.85);
  `
  const Details = styled.div`
    flex-grow: 1;
    padding-left: 1em;
  `

  const Name = props => {
    const NameDiv = styled.div`
      margin-top: 0.75em;
      margin-bottom: 0.25em;
    `
    return <NameDiv>{props.name}</NameDiv>
  }

  const HealthBar = () => <Progress size='small' progress='ratio' value={9000} total={10000} success />

  return (
    <Boss>
      <Portrait size='tiny' src={image} />
      <Details>
        <Name name={name} />
        <HealthBar />
      </Details>
    </Boss>
  )
}

export default Boss
