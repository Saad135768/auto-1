import React from 'react'
import { toast } from 'react-toastify'
import { Container, Row, Col } from 'react-bootstrap'
import Button from '../../common/button'

const Car = ({ car }) => {

  const addToFavourites = () => {
    const favs = localStorage.getItem('favourites')
    if(favs) {
      // Checks if the product is already added to the favourites
      const checkIfThisProductAlreadyExists = !!JSON.parse(favs).filter(({ stockNumber }) => stockNumber === car?.stockNumber)?.length
      if(checkIfThisProductAlreadyExists) return toast.warning('This product is already added into your favourites')

      localStorage.setItem('favourites', JSON.stringify([...JSON.parse(favs), car ]))
     return toast.success('This product has been added to your favourites successfully')
    }
    
    localStorage.setItem('favourites', JSON.stringify([ car ]))
    toast.success('This product has been added to your favourites successfully')
  }

  return (
    <section id='single-car-section'>
      <div className='image-container'>
        <img src={car?.pictureUrl} alt={`${car?.modelName} image`} />
      </div>

      <Container>
          <Row>
            <Col md={5}>
              <h1>{car?.manufacturerName} {car?.modelName}</h1>
              <h6>Stock # {car?.stockNumber} - {car?.mileage?.number} {car?.mileage?.unit?.toUpperCase()} - {car?.fuelType} - {car?.color}</h6>
              <p>
                This car is currently avaliable and can be delivered as soon as tomorrow morning. 
                Please e aware that dekivery times shown in this page are not fedinitive and may change due to bad weather conditions.
              </p>
            </Col>

            <Col md={{ span: 4, offset: 1 }}>
              <div className='favourite-box-container'>
                <p>If you like this car, click the bitton and save it in your collection of favourite items.</p>
                <div>
                  <Button onClick={addToFavourites}>Save</Button>
                </div>

              </div>

            </Col>
          </Row>
      </Container>
    </section>
  )
}

export default Car