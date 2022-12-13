import styled from 'styled-components'

export const LiVideoSaved = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 200px;
  border-radius: 8px;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
`

export const SavedThumbnailUrl = styled.img`
  width: 200px;
  height: 250px;
  margin-bottom: 5px;
`
export const SavedTextArea = styled.div`
  display: flex;
  flex-direction: row;
`

export const SavedTitle = styled.h1`
  color: ${props => (props.Color ? '#f8fafc' : '#181818')};
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 0px;
`
export const NoOfViewsSaved = styled.p`
  color: ${props => (props.Color ? '#cccccc' : '#606060')};
  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-top: 0px;
`

export const Textvalue = styled.p`
  color: ${props => (props.Color ? '#cccccc' : '#606060')};
  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-left: 5px;
  margin-top: 0px;
`
