import styled from 'styled-components'

export const NavbarSection = styled.nav`
  height: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${props => (props.bgColor ? '#212121' : '#f9f9f9')};
`
export const MainLogoNav = styled.img`
  width: 150px;
`
export const NavbarSideSection = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
`
export const ThemeButton = styled.button`
  width: 35px;
`
export const UserLogo = styled.img`
  width: 35px;
  margin-left: 10px;
`
export const LogoutButton = styled.button`
  border: 2px solid #ffffff;
  background-color:transparent;
  font-size:12px;
  font-family:'Roboto'
  font-weight: 500;
  color: ${props => (props.color ? '#f1f1f1' : '#1e293b')};
  margin-left:10px;
`
