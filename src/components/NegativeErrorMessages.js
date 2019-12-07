import React from 'react'
import { Message } from 'semantic-ui-react'

const NegativeErrorMessages = ({ message }) => (
  <Message negative>
    <Message.Header>We're sorry.</Message.Header>
    <p>{ message }</p>
  </Message>
)

export default NegativeErrorMessages