import {Component} from 'react'
import Cookies from 'js-cookie'
import {
  MainLoginPage,
  InputSection,
  FormSection,
  LogoInput,
  TwoSections,
  TextValueInput,
  InputValueLogin,
  CheckBoxSection,
  CheckBoxInput,
  LabelCheckbox,
  LoginButton,
  ErrorMessage,
} from './styledComponent'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorView: false,
    showPassword: false,
    allColor: true,
    errorMsgText: '',
  }

  onSuccessLogin = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
  }

  onErrorResponse = errorMsg => {
    this.setState({errorView: true, errorMsgText: errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    console.log(password)
    const userDetails = {username, password}
    const loginUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)

    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessLogin(data.jwt_token)
    } else {
      this.onErrorResponse(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickCheck = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  renderUsername = () => {
    const {username, allColor} = this.state
    return (
      <>
        <TextValueInput
          color={allColor}
          textColor={allColor}
          htmlFor="username"
        >
          USERNAME
        </TextValueInput>
        <InputValueLogin
          value={username}
          id="username"
          type="text"
          placeholder="Username"
          onChange={this.onChangeUsername}
          bgColor={allColor}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password, allColor, showPassword} = this.state

    const selectedType = showPassword ? 'text' : 'password'
    return (
      <>
        <TextValueInput
          color={allColor}
          textColor={allColor}
          htmlFor="password"
        >
          PASSWORD
        </TextValueInput>
        <InputValueLogin
          value={password}
          id="password"
          type={selectedType}
          placeholder="Password"
          onChange={this.onChangePassword}
          bgColor={allColor}
        />
      </>
    )
  }

  render() {
    const {allColor, errorView, errorMsgText} = this.state
    const logoUrl = allColor
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
    return (
      <MainLoginPage bgColor={allColor}>
        <InputSection bgColor={allColor}>
          <LogoInput src={logoUrl} alt="nxt watch logo" />
          <FormSection onSubmit={this.onSubmitForm}>
            <TwoSections>{this.renderUsername()}</TwoSections>
            <TwoSections>{this.renderPassword()}</TwoSections>
            <CheckBoxSection>
              <CheckBoxInput
                onChange={this.onClickCheck}
                type="checkbox"
                id="checkbox"
              />
              <LabelCheckbox color={allColor} htmlFor="checkbox">
                Show Passwords
              </LabelCheckbox>
            </CheckBoxSection>
            <LoginButton type="submit">Login</LoginButton>
            {errorView && <ErrorMessage>*{errorMsgText}</ErrorMessage>}
          </FormSection>
        </InputSection>
      </MainLoginPage>
    )
  }
}

export default LoginForm
