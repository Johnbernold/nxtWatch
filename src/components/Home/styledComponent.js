import styled from 'styled-components'

export const MainHomeSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.bgColor ? '#181818' : ' #f9f9f9 ')};
`
export const HomeSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
export const HomeDisplaySection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const BannerHome = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 200px;
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const BannerTextSection = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`
export const BannerHomeLogo = styled.img`
  width: 140px;
`

export const ParaBanner = styled.p`
  color: #606060;
  font-size: 18px;
  font-weight: 500;
  font-family: 500;
`

export const BannerHomeButton = styled.button`
  font-size: 15px;
  font-weight: 600;
  font-family: 'Roboto';
  border: 2px solid #606060;
  color: #231f20;
  width: 150px;
  padding: 5px;
  background-color: transparent;
`

export const HomeVideosDisplay = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 12px;
  height: 140vh;
  overflow-y: auto;
`
export const BannerCloseButton = styled.button`
  width: 30px;
  align-self: flex-start;
  background-color: transparent;
  border: none;
`
export const SearchSectionDisplay = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px;
  margin-bottom: 0px;
`
export const SearchInput = styled.input`
  width: 300px;
  height: 30px;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  border-color: ${props => (props.bgColor ? '#7e858e' : '')};
  background-color: ${props => (props.bgColor ? '#181818' : '#ffffff')};
`
export const SearchButton = styled.button`
  width: 45px;
  height: 30px;
  border-color: ${props => (props.bgColor ? '#7e858e' : '')};
  background-color: ${props => (props.bgColor ? '#909090' : '')};
`
