import React from 'react'
import styled from 'styled-components'
import images from './images'

const Image = styled.img`
  border-radius: 50%;
  width: 128px;
  height: 128px;
`

const Portrait = prop => {
  return (
    <div>
      {Object.values(images).map(image => (
        <Image src={image}></Image>
      ))}
    </div>
  )
}

export default Portrait
