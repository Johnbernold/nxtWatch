import styled from 'styled-components'

export const MainPageVideos = styled.div`
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  padding: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const VideoDisplaySection = styled.div`
  display: flex;
  flex-direction: row;
`

export const MainVideoPlayerSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 15px;
`
export const VideoPlayer = styled.div`
  width: 700;
  height: 500px;
`
export const VideoHeading = styled.h1`
  color: ${props => (props.Color ? '#f1f5f9' : '#616e7c ')};
  font-size: 15px;
  font-weight: 500;
`

export const VideoIconsAndViewsSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`
export const ViewsSection = styled.div`
  display: flex;
`

export const NoOfViews = styled.p`
  color: ${props => (props.Color ? '#1e293b' : '#616e7c ')};
  font-size: 15px;
  font-weight: 500;
  font-family: 'roboto';
`
export const DateMentionUl = styled.ul`
  margin-left: 10px;
`
export const DateLi = styled.li`
  list-style-type: none;
  color: ${props => (props.Color ? '#1e293b' : '#616e7c ')};
  font-size: 15px;
  font-weight: 500;
  font-family: 'roboto';
`
export const VideosLikeSection = styled.div`
  display: flex;
`
export const ButtonClick = styled.button`
  margin-right: 10px;
  background-color: transparent;
  border: none;
  font-size: 12px;
  font-weight: 500;
  color: ${props => (props.Color ? '#1e293b' : '#616e7c ')};
`
export const ProfileDetailsSection = styled.div`
  display: flex;
  flex-direction: row;
`
export const ProfilePhoto = styled.img`
  width: 50px;
  height: 50px;
  border: 25px;
`
export const ProfileTextSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const ChannelName = styled.h1`
  color: ${props => (props.Color ? '#e2e8f0' : '#424242')};
  font-size: 15px;
  font-weight: 500;
  font-family: 'roboto';
`
export const SubscribtionText = styled.p`
  color: ${props => (props.Color ? '#909090' : '#909090')};
  font-size: 15px;
  font-weight: 500;
  font-family: 'roboto';
`
export const DescriptionText = styled.p`
  color: ${props => (props.Color ? '#e2e8f0' : ' #606060')};
  font-size: 12px;
  font-weight: 500;
  font-family: 'roboto';
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
