import React, { Component } from 'react'

class JobsForm extends Component {

    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.currentIndex == -1)
            return {
                title: '',
                city: '',
                employer: '',
                requirements: '',
                tasks: ''
            }
        else
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex != this.props.currentIndex || prevProps.list != this.props.list) {
            this.setState({ ...this.returnStateObject() })
            console.log(prevProps, this.props)
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAddOrEdit(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <input name="title" placeholder="Enter Job Title" onChange={this.handleInputChange} value={this.state.title} /><br />
                < input name="city" placeholder="Enter City (N/A if Remote)" onChange={this.handleInputChange} value={this.state.city} /><br />
                < input name="employer" placeholder="Employer Name" onChange={this.handleInputChange} value={this.state.employer} /><br />
                < input name="requirements" placeholder="Enter Requirements" onChange={this.handleInputChange} value={this.state.requirements} /><br />
                < input name="tasks" placeholder="Enter Tasks" onChange={this.handleInputChange} value={this.state.tasks} /><br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default JobsForm