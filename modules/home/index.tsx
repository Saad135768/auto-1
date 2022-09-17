/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { pathOr, propOr } from 'ramda'
import axios from 'axios'
import Filters from './filters'
import Pagination from '../../common/pagination'
import Card from '../../common/card'
import { ICar } from '../../interfaces'

const Home = ({ carsData, manufacturers, colors }) => {
  const [cars, setCars] = useState(carsData)
  const [loading, setLoading] = useState(false)
  
  const page = pathOr(1, ['query', 'page'], useRouter())
  const sort = pathOr('', ['query', 'sort'], useRouter())
  const color = pathOr('', ['query', 'color'], useRouter())
  const manufacturer = pathOr('', ['query', 'manufacturer'], useRouter())

  const totalCarsCount = +pathOr(0, ['totalCarsCount'], cars)
  const pageSize = 10

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
            <h2>Showing {+totalCarsCount < +pageSize ? totalCarsCount : pageSize} of {totalCarsCount} results</h2>
            {pathOr([], ['cars'], cars).map(({ modelName, stockNumber, manufacturerName, mileage, fuelType, color, pictureUrl }: ICar) => 
            <Card 
              key={stockNumber} 
              modelName={modelName} 
              stockNumber={stockNumber} 
              mileage={mileage} 
              fuelType={fuelType} 
              color={color} 
              pictureUrl={pictureUrl}
              manufacturerName={manufacturerName}
              loading={loading}
            />
            )}

           {!!pathOr(false, ['cars', 'length'], cars) && <Pagination pagesCount={cars?.totalPageCount} />}

          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default Home