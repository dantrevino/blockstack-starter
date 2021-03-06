import React from 'react'
import { navigate } from 'gatsby'
import { handleLogin } from './services/auth'

class Login extends React.Component {
  componentDidMount() {
    const location = this.props
    if (location && location.location && !!location.location.search && location.location.search.startsWith("?authResponse=")) {
      navigate(`/app`)
    }
  }

  handleSubmit = () => handleLogin(user => navigate(`/app/profile`))
  render() {
    return (
      <>
        <h1>Log in</h1>
        <button onClick={this.handleSubmit}>log in</button>
      </>
    )
  }
}

export default Login
