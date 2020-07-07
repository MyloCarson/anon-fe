import React, { useState } from 'react'
import { JobIcon } from 'components/vectors'
import PropTypes from 'prop-types'
import Pulse from 'react-reveal/Pulse'

const CompanyPill = ({ name }) => {
  const [count, countSet] = useState(0)

  // const interval = setInterval(() => {
  //   if (count < 3) {
  //     countSet(count + 1)
  //   } else {
  //     clearInterval(interval)
  //   }
  // }, 1500)

  return (
    <div className="button button--primary m-1">
      <div className="flex flex-row items-center">
        <div>
          <JobIcon width={18} height={13} fill="#fff" />
        </div>
        {/* spy={count} */}
        <Pulse>
          <span className="ml-2">{name}</span>
        </Pulse>
      </div>
    </div>
  )
}

CompanyPill.propTypes = {
  name: PropTypes.string.isRequired
}

export default CompanyPill
