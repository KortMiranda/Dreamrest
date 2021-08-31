import React from 'react'
// import PropTypes from "prop-types"
import LoginForm from "../LoginForm"
// import SignupForm from "../SignupForm"

const Auth = (props, context) => (
    <main>
        <div>
            {props.action === "login" && <LoginForm />}
            {/* {props.action === "signup" && <SignupForm />} */}
        </div>
        <div>
            {props.action === "login" && (
                <p>Don't have an account
                    <span onClick={props.handleChangeAction}>Sign up</span>
                </p>
            )}
            {props.action === "signup" && (
                <p>Have an account?
                    <span onClick={props.handleChangeAction}>Log in
                    </span>
                </p>
            )}
        </div>
    </main>
)

export default Auth
