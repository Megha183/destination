import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link }from 'react-router-dom'
import './File.css'



function DestinationCard( {destData}) {
  return (
    <div>
    <Link to={`view/${destData.id}`} style={{textDecoration:'none', color:'black'}}>
    <Card style={{ width: '18rem' }} className="card">
      <Card.Img variant="top" src={destData.image} />
      <Card.Body className='text-center p-2' >
      <Card.Title className='title' style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
      {destData.name}
    </Card.Title>
    

        <Card.Text>
         <p>{destData.description}</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    </div>
  )
}

export default DestinationCard