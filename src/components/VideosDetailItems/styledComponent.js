import styled from 'styled-components'

export const MainPageVideos = styled.div`
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9 ')};
  height: 100vh;
  width: 100%;
`

export const MainVideoPlayerSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 15px;
`
export const VideoPlayer = styled.div`
  height: 500px;
  width: 100%;
`
