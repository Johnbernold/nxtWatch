import styled from 'styled-components'

export const MainSavedVideos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  height: 25vh;
  display: flex;
  align-items: center;

  background-color: ${props => (props.bgColor ? '#1e293b' : '#ebebeb')};
`
export const SavedIconSection = styled.div`
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
export const HeadingBanner = styled.h1`
  color: ${props => (props.Color ? '#f8fafc' : '#181818')};
  font-size: 20px;
  font-weight: 600;
  font-family: 'Roboto';
  margin-left: 10px;
`
export const VideosDisplaySection = styled.ul`
  width: 100%;
  height: 100vh;
`
export const NoSaveVideos = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`

export const NoSaveImage = styled.img`
  width: 500px;
  height: 500px;
`
export const NoSaveHeading = styled.h1`
  color: ${props => (props.Color ? '#f9f9f9' : '#181818')};
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const NoVideosText = styled.p`
  color: ${props => (props.Color ? '#cccccc' : '#909090')};
  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto';
`
