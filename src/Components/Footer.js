import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <div >
    <Row  style={{ backgroundColor: ' rgb(219, 80, 133)' }}>
    <Col className='text-center '>
    <p>All rights are reserved to <strong>xyz</strong> & reg:2023</p>
    </Col>
    </Row>
    </div>
  )
}

export default Footer