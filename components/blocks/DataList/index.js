import React, {memo} from 'react'
import PropTypes from 'prop-types'
import { getKey } from 'utils'

const DataList = ({id, companies}) => (
    <datalist id={id}>
    { companies && companies.map((company, index) => {
    //   {console.log('rendered', index)}
      return <option key={getKey()} value={company.name}/>
    })}
  </datalist>
)

DataList.propTypes = {

}

export default memo(DataList)
