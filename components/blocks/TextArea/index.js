import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { countText } from 'utils'

const TextArea = ({ onChange, value, error = false }) => {
  const [_value, valueSet] = useState(value)

  const handleChange = (event) => {
    const value = event.target.value
    valueSet(value)
    onChange(value)
  }

  return (
    <div className="flex flex-col my-2">
      <textarea
        type="text"
        name="answer"
        value={_value}
        className={`w-auto resize-none p-2 rounded h-20 ${error && 'form--error'}`}
        placeholder="Cast your honest review"
        maxLength="160"
        autoFocus
        autoComplete
        autoCorrect
        onChange={handleChange}
      />
      <span className="text-white text-base mt-px">
        <span className={`font-bold ${countText(_value) > 140 ? 'text-red-600' : 'text-green-400'}`}>{countText(_value)}</span>/160</span>
    </div>
  )
}

TextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.bool
}

export default TextArea
