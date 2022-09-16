import React, { useEffect, useState } from 'react'
import Filters from './filters'
import { Container, Row, Col } from 'react-bootstrap'
import Pagination from '../../common/pagination'
import Card from '../../common/card'
import { useRouter } from 'next/router'
import axios from 'axios'

const Home = ({ carsData, manufacturers, colors }) => {
  const [cars, setCars] = useState(carsData)
  const [loading, setLoading] = useState(false)
  const { query: { page = 1, sort = '', color = '', manufacturer = '' } } = useRouter()

  const fetchCars = async () => {
    try {
      setLoading(true)
      const { data } = await axios(`${process.env.REACT_APP_API_URL}/cars?sort=${sort}&page=${page}&manufacturer=${manufacturer}&color=${color}`)
      setCars(data)
      setLoading(false)
    }catch(error) {
      setLoading(false)
      console.error(error)
    }
  }

  useEffect(() => {
    fetchCars()
  }, [page, sort, color, manufacturer])

  return (
    <main>
      <Container>
        <Row>
          <Col md={4}>
            <Filters 
              manufacturers={manufacturers}
              colors={colors}
            />
          </Col>
          <Col>
            <h3>Avaliable Cars</h3>
            <h2>Showing 10 of {cars?.totalCarsCount} results</h2>
            {cars?.cars?.map(({ modelName, stockNumber, mileage, fuelType, color, pictureUrl }) => 
            <Card 
              key={stockNumber} 
              modelName={modelName} 
              stockNumber={stockNumber} 
              mileage={mileage} 
              fuelType={fuelType} 
              color={color} 
              img={pictureUrl}
              loading={loading}
            />
            )}
           {!!cars?.cars?.length && <Pagination pagesCount={cars?.totalPageCount} />}
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default Home