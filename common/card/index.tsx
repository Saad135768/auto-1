import React, { useState, useEffect, FC } from 'react'
import { Row, Col } from 'react-bootstrap'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { toast } from 'react-toastify'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ICard } from '../../interfaces'

const Card: FC<ICard> = ({ modelName, manufacturerName, stockNumber, mileage: { number, unit }, fuelType, color, pictureUrl, loading }) => {

  const { pathname } = useRouter()
  
  const [favIconSelected, setFavIconSelected] = useState<boolean>(false)
  
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
      localStorage.setItem('favourites', JSON.stringify([...JSON.parse(favs), { modelName, stockNumber, mileage: { number, unit }, fuelType, color, pictureUrl, manufacturerName } ]))
      return toast.success('This product has been added to your favourites list successfully')
    }
    localStorage.setItem('favourites', JSON.stringify([{ modelName, stockNumber, mileage: { number, unit }, fuelType, color, pictureUrl, manufacturerName } ]))
    return toast.success('This product has been added to your favourites list successfully')
  }

  const removeFromFavourites = () => {
    toggleSelectingFavs()
    const favs = localStorage?.getItem('favourites')
    if(favs){
      const currentLocal = localStorage.getItem('favourites')
      const removeSelectedProduct = JSON.parse(currentLocal!).filter((car) => car?.stockNumber !== stockNumber)
      localStorage.setItem('favourites', JSON.stringify(removeSelectedProduct))
      return toast.success('This product has been removed from your favourites list successfully')
    }
  }

  return (
    <div className={loading ? 'card-container loader' : 'card-container' } id={pathname === '/favourites' ? 'favs' : ''} data-testid="card-container">
      <Row>
        <Col md={3}>
          <Image src={loading ? '/' : pictureUrl} width={130} height={loading ? 100 : 50} />
        </Col>
        <Col md={pathname === '/favourites' ? 6 : 8}>
          <p id='car-title'>{!loading && `${manufacturerName} ${modelName}` }</p>
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