import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'

const Header = ({ children }) => (
	<section className="header">
		{children}
	</section>
)

Header.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Header
