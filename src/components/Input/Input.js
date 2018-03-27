import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.css'

class Input extends Component {
	static propTypes = {
		placeholder: PropTypes.string.isRequired,
		onChange: PropTypes.func,
    }

    static defaultProps = {
        onChange: () => {},
    }

	constructor(props) {
		super(props)

		this.state= {
		  fieldVal: ''
		}
	}

	update = (e) => {
		let value = e.target.value.toLowerCase()
		this.props.onInputChange(value)
		this.setState({fieldVal: e.target.value})
	}

	render() {
		const { placeholder } = this.props
		const { fieldVal } = this.state

		return (
			<input 
				className="input"
				placeholder={placeholder}
				value={fieldVal}
				onChange={this.update}
			/>
		)
	}
}

export default Input
