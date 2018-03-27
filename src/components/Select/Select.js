import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import arrowDown from '../../assets/arrow-down.svg'

class Select extends Component {
	static propTypes = {
		placeholder: PropTypes.string.isRequired,
		options: PropTypes.arrayOf(PropTypes.string),
		onFilter: PropTypes.func,
    }

    static defaultProps = {
    	options: [],
        onFilter: () => {},
    }

	constructor(props) {
		super(props)

		this.state= {
		  fieldVal: '',
		  isOpen: false,
		}
	}

	update = (e) => {
		this.props.onFilter(e.target.value)
		this.setState({
			fieldVal: e.target.value,
		})
	}

	render() {
		const { placeholder, options } = this.props

		return (
			<div className="select-wrapper">
				<select className="select" onChange={this.update} >
					<option value="">{this.props.placeholder}</option>

					{this.props.options.map((option, index)  => 
						<option 
							value={option}
							key={index}
						>
							{option}
						</option>
					)}
				</select>

				<span className="arrow-container">
					<img
						alt="arrow"
						className="arrow"
						src={arrowDown} />
            	</span>
			</div>
		)
	}
}

export default Select


