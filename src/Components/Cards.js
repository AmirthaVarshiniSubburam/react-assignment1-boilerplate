import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Cards = (props) => {
  const saveNews = () => {
    const newCard={
      description:props.description,
      url:props.url
    }
    props.readLater(newCard);
  };

  return (
    <div>
       
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.urlToImage} alt={props.title}  />
      <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.author} </Card.Text>
      <Button className="m-3" type="submit" variant="primary" onClick={() => {saveNews();}} >Read Later</Button>
                
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cards