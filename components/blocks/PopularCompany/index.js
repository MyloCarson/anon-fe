import React from 'react'
import { JobIcon } from 'components/vectors'
import PropTypes from 'prop-types'

const PopularCompany = ({ name }) => {
  return (
    <li className="flex flex-row items-center my-2">
      <JobIcon width={18} height={13} fill="#fff" />
      <span className="text-white text-lg ml-3 ">{name}</span>
    </li>
  )
}

PopularCompany.propTypes = {
  name: PropTypes.string.isRequired
}

export default PopularCompany
