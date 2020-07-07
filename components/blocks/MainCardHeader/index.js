import React, { useState } from 'react'
import { DownChevron } from 'components/vectors'
import PropTypes from 'prop-types'

import { toggleCreateReviewModal, toggleCreateAccountModal } from '../../../actions'
import { useDispatch } from 'react-redux'

const MainCardHeader = () => {
  const [showMenu, showMenuSet] = useState(false)

  const dispatch = useDispatch()
  const openReviewModal = (value) => dispatch(toggleCreateReviewModal(value))
  const openAccountModal = value => dispatch(toggleCreateAccountModal(value))

  const handleMenuToggle = () => {
    showMenuSet(!showMenu)
  }

  return (
    <div className="w-full px-3 py-5 border-b-2 border-gray-700 mb-2 flex flex-row justify-between items-center">
      <div className=" flex flex-row items-center relative">
        <div className="group flex flex-row justify-between items-center cursor-pointer relative" onClick={handleMenuToggle}>
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
        </div>
        <p className="text-green-600 ml-5">Newest</p>
        <p className="text-orange-600 ml-5">Trending</p>
      </div>
      <div className="hidden md:block">
        <div className="button button--primary" onClick={() => { openAccountModal(true) }}>REVIEW COMPANY</div>
      </div>
    </div>
  )
}

MainCardHeader.propTypes = {}

export default MainCardHeader
