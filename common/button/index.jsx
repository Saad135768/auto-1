import React from 'react'

const Button = ({ children, ...props }) => <button id={'main-btn'} {...props}>{children}</button>
 
export default Button