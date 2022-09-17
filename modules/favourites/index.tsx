import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { pathOr } from 'ramda'
import Card from '../../common/card'
import Link from 'next/link'
import { ICar } from '../../interfaces'

const Favourites = () => {
  const [cars, setCars] = useState([])

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('favourites')!)
    setCars(local)
  }, [])

  return (
    <section>
    <Container className='favourites'>
      <Row>
        {!!pathOr(false, ['length'], cars) && cars.map(({ modelName, manufacturerName, stockNumber, mileage, fuelType, color, pictureUrl }: ICar) => (
          <Col md={4} key={stockNumber}>
            <Card
              modelName={modelName} 
              stockNumber={stockNumber} 
              mileage={mileage} 
              fuelType={fuelType} 
              color={color}
              manufacturerName={manufacturerName} 
              pictureUrl={pictureUrl} />
          </Col>
        ))}

        {!pathOr(false, ['length'], cars) && 
        <>
        <p className='text-center my-5 h1'>No Products found</p>
        <p className='text-center my-2 h4'>You can always go back to the <Link href='/'><a>homepage</a></Link></p>
        </>
        }
      </Row>
    </Container>
    </section>
  )
}

export default Favourites