import styled from 'styled-components'

export const MainSavedVideos = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${props => (props.bgColor ? '#181818' : ' #f9f9f9 ')};
`
export const VideoSection = styled.div`
  display: flex;
  flex-direction: row;
`
export const MainSavedVideosDisplay = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const BannerSection = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-left: 20px;
  background-color: ${props => (props.bgColor ? '#1e293b' : '#d7dfe9 ')};
`
export const SavedIconSection = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: ${props => (props.bgColor ? '#181818' : ' #cbd5e1')};
`
export const HeadingBanner = styled.h1`
  color: ${props => (props.Color ? '#f8fafc' : '#181818')};
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-left: 10px;
`
export const VideosDisplaySection = styled.ul`
  width: 100%;
  height: 100vh;
`
