import React, { useState } from 'react'
import { SignInIcon  } from 'components/vectors'
import PropTypes from 'prop-types'
import { ReviewButton } from 'components/blocks'
import { getUser } from 'utils'

const MainCardHeader = ({handleFilterOption}) => {
  const [showMenu, showMenuSet] = useState(false)

  const handleMenuToggle = () => {
    showMenuSet(!showMenu)
  }

  const filter = (value) => {
    handleFilterOption(value);
  }

  return (
    <div className="w-full px-3 py-5 border-b-2 border-gray-700 mb-2 flex flex-row justify-between items-center">
      <div className=" flex flex-row items-center relative">
        {/* <div className="group flex flex-row justify-between items-center cursor-pointer relative" onClick={handleMenuToggle}>
          <p className="text-white mr-1 group-focus:text-red-500">Filter</p>
          <DownChevron />
          {
            (
              <div className={`absolute  w-32 bg-gray-800 menu ${showMenu ? 'active' : ''}`}>
                <div>
                  <ul>
                    <li className="px-2 py-3 hover:bg-black hover:text-white">TOP BY WEEK</li>
                    <li className="px-2 py-3 hover:bg-black hover:text-white">TOP BY WEEK</li>
                    <li className="px-2 py-3 hover:bg-black hover:text-white">TOP BY WEEK</li>
                  </ul>
                </div>
              </div>
            )
          }
        </div> */}
        <p className="text-white ml-5 cursor-pointer" onClick={() => {filter('all')}}>All</p>
        <p className="text-green-600 ml-5 cursor-pointer" onClick={() => {filter('newest')}}>Newest</p>
        <p className="text-orange-600 ml-5 cursor-pointer" onClick={() => {filter('trending')}}>Trending</p>
      </div>

      {getUser() ? (
        <div className="hidden md:flex">
          <ReviewButton />
        </div>
      ) : (
        <div className="ml-auto hidden md:flex">
          <SignInIcon width={24} height={24} fill="#fff"/>
      </div>
      )}
    </div>
  )
}

MainCardHeader.propTypes = {}

export default MainCardHeader
