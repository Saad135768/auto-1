import React from 'react'
import Image from 'next/image'
import Router from 'next/router'
import Link from 'next/link'
import logo from '../../public/assets/imgs/logo.png'

const NotFound = () => (
    <section id='not-found-section'>
      <div className='my-5'>
        <Image src={logo} alt='auto-1 logo' width={180} height={40} onClick={() => Router.push('/')} />
        <h2>404 - Not Found</h2>
        <p>Sorry, the page you are looking for does not exist</p>
        <p>You can always go back to the <Link href='/'><a>homepage</a></Link></p>
      </div>
    </section>
  )

export default NotFound