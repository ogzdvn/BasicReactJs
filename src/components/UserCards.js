import React from 'react'
import { Card } from 'react-bootstrap'

const UserCards = (props) => {
  return (
    <Card>
        <Card.Img   variant='top' src={props.avatar}/>
        <Card.Body>
      <Card.Subtitle>{props.name} {props.lastname}  </Card.Subtitle>
        <Card.Text>
         {props.job}
        </Card.Text>

        <Card.Title>{props.email}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default UserCards