import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { toast } from 'react-toastify'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';

const Card = ({ modelName, stockNumber, mileage: { number, unit }, fuelType, color, img, loading }) => {

  const { pathname } = useRouter()
  
  const [favIconSelected, setFavIconSelected] = useState()
  
  useEffect(() => {
    const favs = localStorage?.getItem('favourites')
    // This checks if this product exsits in the local storage aka. favourites
    const productInFavourites = favs && JSON.parse(favs).filter((car) => car?.stockNumber === stockNumber)?.length

    // here we set the products found in the local storage
    setFavIconSelected(!!productInFavourites)
  }, [])

  const toggleSelectingFavs = () => {
    setFavIconSelected(!favIconSelected)
  }

  const addToFavourites = () => {
    toggleSelectingFavs()
    const favs = localStorage?.getItem('favourites')
    if(favs){
      localStorage.setItem('favourites', JSON.stringify([...JSON.parse(favs), { modelName, stockNumber, mileage: { number, unit }, fuelType, color, img } ]))
      return toast.success('This product has been added to your favourites list successfully')
    }
    localStorage.setItem('favourites', JSON.stringify([{ modelName, stockNumber, mileage: { number, unit }, fuelType, color, img } ]))
    return toast.success('This product has been added to your favourites list successfully')
  }

  const removeFromFavourites = () => {
    toggleSelectingFavs()
    const favs = localStorage?.getItem('favourites')
    if(favs){
      const currentLocal = localStorage.getItem('favourites')
      const removeSelectedProduct = JSON.parse(currentLocal).filter((car) => car?.stockNumber !== stockNumber)
      localStorage.setItem('favourites', JSON.stringify(removeSelectedProduct))
      return toast.success('This product has been removed from your favourites list successfully')
    }
  }

  return (
    <div className={loading ? 'card-container loader' : 'card-container' } id={pathname === '/favourites' ? 'favs' : ''}>
      <Row>
        <Col md={3}>
          <Image src={loading ? '/' : img} width={130} height={loading ? 100 : 50} />
        </Col>
        <Col md={pathname === '/favourites' ? 6 : 8}>
          <p id='car-title'>{!loading && modelName}</p>
          <p id='car-desc'>{!loading && `Stock # ${stockNumber} - ${number} ${unit?.toUpperCase()} - ${fuelType} - ${color}`}</p>
          <Link href={`/car/${stockNumber}`}><a>{!loading && 'View details'}</a></Link>
        </Col>

        {!loading && <Col md={1}>
          {favIconSelected ? <AiFillHeart id='filled-fav-icon' onClick={removeFromFavourites} /> : <AiOutlineHeart onClick={addToFavourites} />  }
        </Col>}
      </Row>
    </div>
  )
}

export default Card