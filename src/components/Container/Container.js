import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const Container = ({children}) => (
	<section className="container">
		{children}
	</section>
)

Container.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Container
