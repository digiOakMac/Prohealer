import React from 'react'
import styled from "styled-components";

const Image = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
`

const Portrait = (prop) => {
  return (
    <Image src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d54c3396-71e6-4b08-b89b-23c8ad9b52c3/d92r5kq-20a51154-1b37-477b-b786-49f04975cadf.jpg/v1/fill/w_800,h_964,q_75,strp/nysot_by_ellrano_d92r5kq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTY0IiwicGF0aCI6IlwvZlwvZDU0YzMzOTYtNzFlNi00YjA4LWI4OWItMjNjOGFkOWI1MmMzXC9kOTJyNWtxLTIwYTUxMTU0LTFiMzctNDc3Yi1iNzg2LTQ5ZjA0OTc1Y2FkZi5qcGciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.JS4qkBzbhXHCbDOzq4zE7jSzUHXQlPkqMqTMhZrrwhs'}></Image>
  )
}

export default Portrait