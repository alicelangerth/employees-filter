import React from 'react'
import PropTypes from 'prop-types'
import './style.css'


const Button = ({children, onClick}) => (
	<button className="button" onClick={onClick}>
		{children}
	</button>
)

Button.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Button
