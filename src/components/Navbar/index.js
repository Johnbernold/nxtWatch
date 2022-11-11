import {FaMoon} from 'react-icons/fa'
import {BiSun} from 'react-icons/bi'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NavbarSection,
  MainLogoNav,
  NavbarSideSection,
  ThemeButton,
  UserLogo,
  LogoutButton,
} from './styledComponent'

const Navbar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {themeValue, changeTheme} = value
      const navLogo = themeValue
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <NavbarSection bgColor={themeValue}>
          <MainLogoNav src={navLogo} alt="website logo" />
          <NavbarSideSection>
            <ThemeButton onClick={changeTheme} type="button">
              {themeValue ? <BiSun /> : <FaMoon />}
            </ThemeButton>

            <UserLogo
              alt="profile"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
            />
            <LogoutButton color={themeValue} type="button">
              Logout
            </LogoutButton>
          </NavbarSideSection>
        </NavbarSection>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Navbar
