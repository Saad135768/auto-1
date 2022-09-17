import React from 'react'
import axios from 'axios'
import Car from '../../modules/singleCar'

const SingleCar = ({ car }) => <Car car={car} />

export default SingleCar

export const getServerSideProps = async ({ query : { id } }) => {
  let carsData = {}

  try {
    const { data : { car } } = await axios(`${process.env.REACT_APP_API_URL}/cars/${id}`)
    carsData = car
  }
  
  catch(error) {
    console.error(error)
    carsData = {}
  }

  return {
    props: {
      car: carsData
    }
  }

}