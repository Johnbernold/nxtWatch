import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import Popup from 'reactjs-popup'
import {BiSun} from 'react-icons/bi'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NavbarSection,
  MainLogoNav,
  NavbarSideSection,
  ThemeButton,
  UserLogo,
  CloseSection,
  ParaText,
  BottomSection,
  CancelButton,
  ConfirmButton,
} from './styledComponent'

import './index.css'

const Navbar = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {themeValue, changeTheme} = value
      const logoutButton = themeValue ? 'darkTheme' : 'lightTheme'
      const navLogo = themeValue
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      return (
        <NavbarSection bgColor={themeValue}>
          <Link to="/">
            <MainLogoNav src={navLogo} alt="website logo" />
          </Link>
          <NavbarSideSection>
            <ThemeButton
              data-testid="theme"
              onClick={changeTheme}
              type="button"
            >
              {themeValue ? <BiSun className="white_color" /> : <FaMoon />}
            </ThemeButton>

            <UserLogo
              alt="profile"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
            />

            <Popup
              modal
              trigger={
                <button className={logoutButton} type="button">
                  Logout
                </button>
              }
            >
              {close => (
                <CloseSection bgColor={themeValue}>
                  <ParaText Color={themeValue}>
                    Are you sure you want to logout?
                  </ParaText>

                  <BottomSection>
                    <CancelButton
                      bgColor={themeValue}
                      type="button"
                      onClick={() => close()}
                    >
                      Cancel
                    </CancelButton>
                    <ConfirmButton onClick={onClickLogout} type="button">
                      Confirm
                    </ConfirmButton>
                  </BottomSection>
                </CloseSection>
              )}
            </Popup>
          </NavbarSideSection>
        </NavbarSection>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Navbar)
