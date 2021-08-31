import React from 'react';
import PropTypes from 'prop-types';

class SignupForm extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <form onSubmit={e => this.props.handle_signup(e, this.state)}>
        <h4>Sign Up</h4>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handle_change}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handle_change}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};

// import React, { useState, useEffect } from 'react'

// const Signup = () => {
//   // const backendURL = process.env.NODE_ENV === "production" ? 
//   // process.env.REACT_APP_BACKENDURL:
//   // "https://rocky-springs-66803.herokuapp.com"
//   const [email, setEmail] = useState('')
//   const [username, setUsername] = useState('')
//   const [password1, setPassword1] = useState('')
//   const [password2, setPassword2] = useState('')
//   const [errors, setErrors] = useState(false)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     if (localStorage.getItem('token') !== null) {
//       window.location.replace('http://localhost:3000/');
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   const onSubmit = e => {
//     e.preventDefault();

//     const user = {
//       email: email,
//       password1: password1,
//       password2: password2
//     };

//     fetch(`http://localhost:8000/api/v1/users/auth/register/`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(user)
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.key) {
//           localStorage.clear();
//           localStorage.setItem('token', data.key);
//           window.location.replace('http://localhost:3000/');
//         } else {
//           setEmail('');
//           setPassword1('');
//           setPassword2('');
//           localStorage.clear();
//           setErrors(true);
//         }
//       });
//   };

//   return (
//     <div>
//       {loading === false && <h1>Signup</h1>}
//       {errors === true && <h2>Cannot signup with provided credentials</h2>}
//       <form onSubmit={onSubmit}>
//         <label htmlFor='email'>Username:</label> <br />
//         <input
//           name='username'
//           type='username'
//           value={username}
//           onChange={e => setUsername(e.target.value)}
//           required
//         />{' '}
//         <br />
//         <label htmlFor='email'>Email address:</label> <br />
//         <input
//           name='email'
//           type='email'
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           required
//         />{' '}
//         <br />
//         <label htmlFor='password1'>Password:</label> <br />
//         <input
//           name='password1'
//           type='password'
//           value={password1}
//           onChange={e => setPassword1(e.target.value)}
//           required
//         />{' '}
//         <br />
//         <label htmlFor='password2'>Confirm password:</label> <br />
//         <input
//           name='password2'
//           type='password'
//           value={password2}
//           onChange={e => setPassword2(e.target.value)}
//           required
//         />{' '}
//         <br />
//         <input type='submit' value='Signup' />
//       </form>
//     </div>
//   );
// };

// export default Signup;