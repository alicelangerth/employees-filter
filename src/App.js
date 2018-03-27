import React, { Component } from 'react'
import './App.css'

import Header from './components/Header/Header.js'
import Container from './components/Container/Container.js'
import Select from './components/Select/Select.js'
import Input from './components/Input/Input.js'
import Button from './components/Button/Button.js'
import Employees from './components/Employees/Employees.js'
import data from './data/data.json'

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            filterVal: '',
            empolyees: data,
            dataLimit: 10,
            offices: [],
        }
    }

    componentDidMount() {
        this.setOffices()
    }

    //Get all avalible offices
    setOffices = () => {
        const offices = []
        data.forEach((item) => {
            const office = item.office 
            !offices.includes(office) && offices.push(office)
        })

        this.setState({ offices: offices })
    }

    // Filter by select option
    onFilter = (val) => {
        if (val === '') {
            return (
                this.setState({ empolyees: data })
            )
        }

        const filteredData = []
        data.forEach( (value) => {
            value.office === val && filteredData.push(value)
        })

        this.setState({ empolyees: filteredData })
    }

    // Filter by input value
    onInputChange = (val) => {
        const result = data.filter(data => {
            const firstName = data.firstName.toLowerCase()
            const lastName = data.lastName.toLowerCase()
            const fullName = firstName.concat(lastName)
            return fullName.includes(val) 
        })

        this.setState({ empolyees: result })
    }

    // Load more emploees
    loadMore = () => {
        this.setState({ dataLimit: this.state.dataLimit + this.state.dataLimit})
    }

    render() {
        const { offices, empolyees, dataLimit } = this.state

        return (
            <div className="App">
                <Header><h1>OUR EMPLOYEES</h1></Header>

                <Container>
                    <div className="flex-container">
                        <Input 
                            name="search" 
                            placeholder="Search" 
                            onInputChange={this.onInputChange} 
                            label="Search by name"
                        />

                        <Select placeholder='Office' options={offices} onFilter={this.onFilter} />
                    </div>

                    {empolyees.length > 0 ?
                        <Employees dataLimit={dataLimit} data={empolyees} /> :
                        <p className="not-found">No employee found :( </p> }
                    
                    {empolyees.length > this.state.dataLimit &&
                        <Button onClick={this.loadMore}>
                            See more
                        </Button>
                    }
                </Container>
            </div>
        )
    }
}

export default App
