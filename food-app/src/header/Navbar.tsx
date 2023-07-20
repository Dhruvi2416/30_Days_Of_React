import React from 'react'
import SearchButton from './SearchButton'
import Favourite from './Favourite'
import foodItems from "../database/database"

const Navbar = () => {
  console.log(foodItems[0]);
  
  return (
    <div className='flex m-4 ml-14'>
        
        <div className='flex flex-wrap justify-start'><SearchButton/><Favourite/></div>
        {/* <div>{foodItems.map((food)=>food.recepie)}</div> */}
        </div>
  )
}

export default Navbar