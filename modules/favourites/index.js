import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from '../../common/card'

const Favourites = () => {
  const [cars, setCars] = useState()

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('favourites'))
    setCars(local)
  }, [])

  return (
    <section>
    <Container className='favourites'>
      <Row>
        {!!cars?.length && cars.map(({ modelName, stockNumber, mileage, fuelType, color, img }) => (
          <Col md={3} key={stockNumber}>
            <Card
              modelName={modelName} 
              stockNumber={stockNumber} 
              mileage={mileage} 
              fuelType={fuelType} 
              color={color} 
              img={img} />
          </Col>
        ))}

        {!cars?.length && <p>No Products found</p>}
      </Row>
    </Container>
    </section>
  )
}

export default Favourites