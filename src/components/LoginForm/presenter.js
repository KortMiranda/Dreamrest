import React from "react"
import PropTypes from 'prop-types'

const LoginForm = (props, context) => (
    <div>
        <form>
            <input type="text" 
                   placeholder='Username'
                   value={props.usernameValue}
                   name="username"
                   onChange={props.handleChangeValue} />
            <input type="password" 
                   placeholder='Password'
                   value={props.passwordValue}
                   name="password"
                   onChange={props.handleChangeValue} />
            <button type="submit" onClick={props.handleSubmit}>Log in</button>
        </form>
    </div>
)

LoginForm.propTypes = {
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleChangeValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default LoginForm