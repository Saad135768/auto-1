import React from 'react'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from '../modules/layout/navbar'
import Footer from '../modules/layout/footer'
import Wrapper from '../common/wrapper'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
  <>
  <ToastContainer 
    position="top-center"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover 
  />
    <Navbar />
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
    <Footer />
  </>
)
  }
export default MyApp
