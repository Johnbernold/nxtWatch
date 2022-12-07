import styled from 'styled-components'

export const MainTrendingSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.bgColor ? '#181818' : ' #f9f9f9 ')};
`

export const TrendingDownSection = styled.div`
  display: flex;
  flex-direction: row;
`
export const TrendingVideosDisplay = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const BannerSectionTrending = styled.div`
  height: 25vh;
  display: flex;
  align-items: center;

  background-color: ${props => (props.bgColor ? '#1e293b' : '#ebebeb')};
`
export const TrendingIconSection = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  display: flex;
  margin-left: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.bgColor ? '#181818' : ' #cbd5e1')};
`
export const HeadingTrendingBanner = styled.h1`
  color: ${props => (props.Color ? '#f8fafc' : '#181818')};
  font-size: 20px;
  font-weight: 600;
  font-family: 'Roboto';
  margin-left: 10px;
`
export const DisplayVideosArea = styled.ul`
  width: 100%;
  height: 100vh;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  height: 100vh;
  width: 100%;
`
export const FailureImage = styled.img`
  width: 400px;
  height: 400px;
`
export const FailureHeading = styled.h1`
  color: ${props => (props.Color ? ' #f8fafc' : '#212121')};
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const FailureText = styled.p`
  color: ${props => (props.Color ? ' #606060' : '#909090')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const FailureRetryButton = styled.button`
  color: '#f8fafc' 
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 500;
  background-color: #4f46e5;
  padding:8px;
`
export const LoaderContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
