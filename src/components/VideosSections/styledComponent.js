import styled from 'styled-components'

export const LiVideoSaved = styled.li`
  display: flex;
  list-style-type: none;
  width: 100%;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
`

export const SavedThumbnailUrl = styled.img`
  width: 250px;
  margin-right: 10px;
`
export const SavedTextArea = styled.div`
  display: flex;
  flex-direction: column;
`

export const SavedTitle = styled.h1`
  color: ${props => (props.Color ? '#f8fafc' : '#181818')};
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 0px;
`
export const SavedNameChannel = styled.p`
  color: ${props => (props.Color ? '#cccccc' : '#606060')};
  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 0px;
`
export const SavedViewsSection = styled.div`
  display: flex;
  margin-top: 0px;
`
export const NoOfViewsSaved = styled.p`
  color: ${props => (props.Color ? '#cccccc' : '#606060')};
  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 0px;
`
export const SavedDateMentionUl = styled.ul`
  margin-left: 5px;
`
export const SavedDateLi = styled.li`
  color: ${props => (props.Color ? '#cccccc' : '#606060')};
  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto';
`
