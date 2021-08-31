import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LoginForm from "./presenter"

class Container extends Component {
    state = {
        username: "",
        password: ""
    }

    static propTypes = {
        usernameLogin: PropTypes.func.isRequired 
    }

    render() {
        const { username, password } = this.state
        const { _handleChangeValue, _handleSubmit } = this
        return (
            <LoginForm 
                usernameValue={username}
                passwordValue={password}
                handleChangeValue={_handleChangeValue}
                handleSubmit={_handleSubmit}
                />
        )
    }

    _handleChangeValue = e => {
        const {
            target: { value, name }
        } = e
        this.setState({
            [name]: value
        })
    }
    _handleSubmit = e => {
        const { usernameLogin } = this.props
        const { username, password } = this.state
        e.preventDefault()
        usernameLogin( username, password)
    }
}

export default Container