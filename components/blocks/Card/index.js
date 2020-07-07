import React from 'react'

const Card = ({ children }) => {
  return (
    <div className="rounded border-2 border-solid border-gray-600 w-full shadow-md">
      {children}
    </div>
  )
}

export default Card
