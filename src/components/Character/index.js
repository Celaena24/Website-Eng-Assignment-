import React from 'react'

const Character = ({src, className}) => {
  return (
    <img src={src} className={className} />
  )
}

export default Character