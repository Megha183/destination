import {React,useState, useEffect} from 'react'
import DestinationCard from './DestinationCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './File.css'


function Destinations() {
    var [destinations,setDestinations]=useState([])
   const fetchData=async()=>{
      const result= await fetch('/travel.json')
      result.json().then(item=>{
        setDestinations(item.destinations)
      })
    }
    console.log(destinations);
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <Row>
    {
        destinations.map(item=>(
            <Col lg={4} md={6} className="p-5">
            <DestinationCard destData={item}></DestinationCard>
            </Col>
        ))
    }
    </Row>
  )
}

export default Destinations