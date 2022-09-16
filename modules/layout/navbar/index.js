import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { Container, Row, Col } from 'react-bootstrap'
import logo from '../../../public/assets/imgs/logo.png'
import Image from 'next/image'
import { AiFillHeart } from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav id={'navbar'}>
      <Container>
          <Row>
            <Col>
              <Image src={logo} alt='auto-1 logo' width={180} height={40} onClick={() => Router.push('/')} />
            </Col>

            <Col md={{ span: 4, offset: 2 }}>
              <ul>
                <li>
                  <Link href=''>
                    <a>Purchase</a>
                  </Link>
                </li>

                <li>
                  <Link href=''>
                    <a>My Orders</a>
                  </Link>
                </li>

                <li>
                  <Link href=''>
                    <a>Sell</a>
                  </Link>
                </li>
                
                <li>
                  <Link href='/favourites'>
                    <a> <AiFillHeart /> </a>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
      </Container>
    </nav>
  )
}

export default Navbar