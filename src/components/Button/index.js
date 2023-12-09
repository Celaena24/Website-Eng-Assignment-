import React from 'react'
import styles from "./index.module.css"

const Button = ({onClick, className, disabled, children}) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>{children}</button>
  )
}

export default Button