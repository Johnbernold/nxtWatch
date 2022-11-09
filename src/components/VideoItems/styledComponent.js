import styled from 'styled-components'

export const ListedEachVideo = styled.li`
  width: 230px;
  height: 230px;
  margin: 10px;
  margin-left: 0px;
  list-style-type: none;
  background-color: ${props => (props.bgColor ? '#181818' : ' #f9f9f9 ')};
`
export const ThumbnailImage = styled.img`
  width: 100%;
  height: 120px;
  margin-bottom: 5px;
`
export const LowerThumbnailText = styled.div`
  display: flex;
`
export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
`
export const TextSectionImg = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
`
export const HeadingText = styled.h1`
  color: ${props => (props.Color ? '#ebebeb' : '#424242')};
  font-weight: 500;
  font-size: 10px;
  font-family: 'Roboto';
`

export const ChannelName = styled.p`
  margin-top: 0px;
  font-size: 10px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.Color ? '#ebebeb' : '#424242')};
`
export const LikeTimeSection = styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: row;
  width: 100%;

  margin-top: 0px;
`
export const ViewText = styled.p`
  color: ${props => (props.Color ? ' #424242' : '#606060')};
  font-weight: 500;
  font-size: 10px;
  font-family: 'Roboto';
`

export const YearSectionUl = styled.ul`
  display: flex;
  margin-left: 0px;
  margin-top: 10px;
`

export const LiVideoTime = styled.li`
  color: ${props => (props.Color ? '#424242' : '#606060')};
  font-weight: 500;
  font-size: 10px;
  font-family: 'Roboto';
  list-style-type: disc;
`
