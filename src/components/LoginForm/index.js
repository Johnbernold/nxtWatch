import {Component} from 'react'
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
} from './styledComponent'

class LoginForm extends Component {
  state = {username: '', password: '', showPassword: 'false', allColor: false}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUsername = () => {
    const {username, allColor} = this.state
    return (
      <>
        <TextValueInput textColor={allColor} htmlFor="username">
          USERNAME
        </TextValueInput>
        <InputValueLogin
          value={username}
          id="username"
          type="text"
          placeholder="Username"
          omChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password, allColor, showPassword} = this.state

    const selectedType = showPassword ? 'text' : 'password'
    return (
      <>
        <TextValueInput textColor={allColor} htmlFor="password">
          USERNAME
        </TextValueInput>
        <InputValueLogin
          value={password}
          id="password"
          type={selectedType}
          placeholder="Username"
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {allColor} = this.state
    const logoUrl = allColor
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
    return (
      <MainLoginPage>
        <InputSection>
          <LogoInput src={logoUrl} alt="nxt watch logo" />
          <FormSection>
            <TwoSections>{this.renderUsername()}</TwoSections>
            <TwoSections>{this.renderPassword()}</TwoSections>
            <CheckBoxSection>
              <CheckBoxInput type="checkbox" id="checkbox" />
              <LabelCheckbox htmlFor="checkbox">Show Passwords</LabelCheckbox>
            </CheckBoxSection>
            <LoginButton type="submit">Login</LoginButton>
          </FormSection>
        </InputSection>
      </MainLoginPage>
    )
  }
}

export default LoginForm
