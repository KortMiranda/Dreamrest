import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
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
      <form onSubmit={e => this.props.handle_login(e, this.state)}>
        <h4>Log In</h4>
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

export default Login;

Login.propTypes = {
  handle_login: PropTypes.func.isRequired
};

// import React, { useState, useEffect } from 'react';

// const Login = () => {
//   // const backendURL = process.env.NODE_ENV === "production" ? 
//   // process.env.REACT_APP_BACKENDURL:
//   // "https://guarded-crag-20391.herokuapp.com/"
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (localStorage.getItem('token') !== null) {
//       window.location.replace('https://dreamrest.herokuapp.com/');
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   const onSubmit = e => {
//     e.preventDefault();

//     const user = {
//       email: email,
//       password: password
//     };


//     fetch(`${process.env.REACT_APP_BACKEND_URL}api/v1/users/auth/login/`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(user)
//     })
//       .then(res => res.json())
//       .then(data => {
//         if (data.key) {
//           localStorage.clear();
//           localStorage.setItem('token', data.key);
//           window.location.replace('https://dreamrest.herokuapp.com/');
//         } else {
//           setEmail('');
//           setPassword('');
//           localStorage.clear();
//           setErrors(true);
//         }
//       });
//   };

//   return (
//     <div>
//       {loading === false && <h1>Login</h1>}
//       {errors === true && <h2>Cannot log in with provided credentials</h2>}
//       {loading === false && (
//         <form onSubmit={onSubmit}>
//           <label htmlFor='email'>Username:</label> <br />
//           <input
//             name='username'
//             type='username'
//             value={username}
//             required
//             onChange={e => setUsername(e.target.value)}
//           />{' '}
//           <br />
//           <label htmlFor='email'>Email address:</label> <br />
//           <input
//             name='email'
//             type='email'
//             value={email}
//             required
//             onChange={e => setEmail(e.target.value)}
//           />{' '}
//           <br />
//           <label htmlFor='password'>Password:</label> <br />
//           <input
//             name='password'
//             type='password'
//             value={password}
//             required
//             onChange={e => setPassword(e.target.value)}
//           />{' '}
//           <br />
//           <input type='submit' value='Login' />
//         </form>
//       )}
//     </div>
//   );
// };

// export default Login;