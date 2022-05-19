import React from 'react'
import {Container, Status , Text , Title} from './style'

export const Notfound = () => {
  return (
    <Container>
        <Status>404</Status>
        <Title>Not Found</Title>
        <Text>The resourse requested could not be found on this server</Text>
    </Container>
  )
}
export default Notfound