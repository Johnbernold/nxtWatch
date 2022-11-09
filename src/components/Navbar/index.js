import {FaMoon} from 'react-icons/fa'
import {BiSun} from 'react-icons/bi'
import {
  NavbarSection,
  MainLogoNav,
  NavbarSideSection,
  ThemeButton,
  UserLogo,
  LogoutButton,
} from './styledComponent'

const allColor = true
const navLogo = allColor
  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

const Navbar = () => (
  <NavbarSection bgColor={allColor}>
    <MainLogoNav src={navLogo} alt="website logo" />
    <NavbarSideSection>
      <ThemeButton type="button">
        {allColor ? <BiSun /> : <FaMoon />}
      </ThemeButton>

      <UserLogo
        alt="profile"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
      />
      <LogoutButton color={allColor} type="button">
        Logout
      </LogoutButton>
    </NavbarSideSection>
  </NavbarSection>
)

export default Navbar
