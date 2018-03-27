import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const Employees = ({data, dataLimit}) => (
	<ul className="employees">
		<li className="list-item list-item--label">
			<span>NAME</span><span>EMAIL</span><span>OFFICE</span><span>TITLE</span>
		</li>

		{data.slice(0, dataLimit).map((item, index) => (
			<li
				className="list-item"
				key={index}
			>
				<p className="employees-name">{item.firstName} {item.lastName}</p>
				<p><span className="label">Email: </span>{item.email}</p>
				<p><span className="label">Office: </span>{item.office}</p>
				<p><span className="label">Title: </span>{item.title}</p>
			</li>
		))}
	</ul>
)

Employees.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        office: PropTypes.node.isRequired,
        title: PropTypes.string.isRequired,
    })),
	dataLimit: PropTypes.number,
}
Employees.defaultProps = {
	data: [],
	dataLimit: 10,
}
export default Employees


