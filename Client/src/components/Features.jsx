

import React from 'react'
import { Banner } from './Header'
import { Features } from './Aboutus'
import Footer from './Footer'

export const FeaturesPage = () => {
  return (
    <div>
        <Banner topic={"Features"}/>
        <Features/>
        <Footer/>

    </div>
  )
}
