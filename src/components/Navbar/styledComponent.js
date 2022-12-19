import styled from 'styled-components'

export const NavbarSection = styled.nav`
  height: 15vh;
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
  border: none;
  background-color: transparent;
`
export const UserLogo = styled.img`
  width: 35px;
  margin-left: 10px;
`

export const CloseSection = styled.div`
  background-color: ${props => (props.bgColor ? '#231f20' : '#f8fafc')};
  height: 40vh;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 5px;
`
export const ParaText = styled.p`
  color: ${props => (props.Color ? ' #f8fafc' : '#94a3b8')};
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const BottomSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const CancelButton = styled.button`
  width: 80px;
  height: 20px;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 500;
  border-width: 2px;
  background-color: transparent;
  border-color: ${props => (props.bgColor ? '#909090' : ' #7e858e')};
  color: ${props => (props.bgColor ? '#909090' : ' #7e858e')};
`

export const ConfirmButton = styled.button`
  height: 20px;
  width: 80px;
  border-width: 2px;
  background-color: #3b82f6;
  color: #ebebeb;
  border: none;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 500;
`
