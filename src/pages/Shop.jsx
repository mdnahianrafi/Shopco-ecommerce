import React from 'react'
import EcommerceFilters from '../components/EcommerceFilters/EcommerceFilters'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'

const Shop = () => {
  return (
    <>
   <div className="pl-5 container mx-auto">
     <Breadcrumbs/>
   </div>
    <EcommerceFilters/>
    </>
  )
}

export default Shop