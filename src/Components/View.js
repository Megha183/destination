import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './File.css'


function View() {

    var [Alldestination, setDestinations] = useState([])

    const fetchDestination = async () => {
        const result = await fetch('/travel.json')
        result.json().then(data => {
            setDestinations(data.destinations)

        })
    }

    const params = useParams()
    console.log(params.id);

    const destination = Alldestination.find(item => item.id = params.id)
    console.log(destination);

    useEffect(() => {
        fetchDestination()
    }, [])
    return (
        <div>
            {
                destination ? (
                    <Row>
                        <Col lg={6} md={6} className="p-5  text-center">
                            <img className='img' alt="" src={destination.image} />
                        </Col>
                        <Col lg={6} md={6} className="p-5 ">
                            <ListGroup className=' me-5 list' >
                                <ListGroup.Item className='text-center'>
                                    <p className='title'style={{fontSize:'30px'}}>{destination.name}</p>
                                </ListGroup.Item>
                                <ListGroup.Item>{destination.description}</ListGroup.Item>
                                <ListGroup.Item><strong>Best time to visit</strong>-{destination.BestTime_toVisit}</ListGroup.Item>
                                <ListGroup.Item><strong>Ideal duration</strong>-{destination.ideal_duration}</ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Best places to visit</strong> -
                                    <ul style={{ marginLeft: '130px' }}>
                                        {destination.best_places_to_visit.map(place => (
                                            <li>{place}</li>
                                        ))}
                                    </ul>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Things to do </strong> -
                                    <ul style={{ marginLeft: '130px' }}>
                                        {destination.things_to_do.map(place => (
                                            <li>{place}</li>
                                        ))}
                                    </ul>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>

                    </Row>
                ) : " "
            }
        </div>
    )
}

export default View