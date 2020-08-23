import React from 'react'
import { JobIcon } from 'components/vectors'
import PropTypes from 'prop-types'
import Pulse from 'react-reveal/Pulse'
import Router from 'next/router'

const CompanyPill = ({ name }) => {
  return (
    <div className="button button--primary" onClick={() => { Router.push('/search?company=' + name) }}>
      <Pulse forever>

        <div className="flex flex-row items-center">
          <div>
            <JobIcon width={18} height={13} fill="#fff" />
          </div>
          <span className="ml-2">{name}</span>
        </div>
      </Pulse>
    </div>
  )
}

CompanyPill.propTypes = {
  name: PropTypes.string.isRequired
}

export default CompanyPill
