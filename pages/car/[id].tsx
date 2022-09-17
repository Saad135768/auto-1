import React from 'react'
import { GetServerSideProps } from 'next'
import type { NextPage } from 'next'
import axios from 'axios'
import Car from '../../modules/singleCar'
import { ICar } from '../../interfaces'

const SingleCar: NextPage<{ car: ICar }> = ({ car }) => <Car car={car} />

export default SingleCar

export const getServerSideProps: GetServerSideProps = async ({ query : { id } }) => {
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