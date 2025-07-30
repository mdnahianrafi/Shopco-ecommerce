import React from 'react'
import Model1 from "../assets/Versace model.png";
import Model2 from '../assets/Zara model.png';
import Model3 from '../assets/Gucci.jpeg';
import Model4 from '../assets/prada model.png';

const Brands = () => {
  return (
    <div className='py-14 '>
<h1 className='py-10 text-center text-3xl md:text-4xl lg:5xl font-bold integral-font'>Brands That We Work With</h1>
<div className="flex container mx-auto justify-center flex-wrap gap-5">

<div className="w-1/3">
<img src={Model1} alt="" />
</div>
<div className="w-1/2">
<img src={Model2} alt="" />
</div>
<div className="w-1/3">
<img src={Model3} alt="" className='w-full' />
</div>
<div className="w-1/2">
<img src={Model4} alt="" />
</div>
</div>
    </div>
  )
}

export default Brands