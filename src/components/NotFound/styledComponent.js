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

export const NotFoundContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.bgColor ? '#181818' : ' #f9f9f9 ')};
  height: 120vh;
  align-items: center;
  padding: 15px;
`

export const NotFoundImage = styled.img`
  width: 500px;
  height: 500px;
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.Color ? '#f8fafc' : '#212121')};
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const NotFoundText = styled.p`
  color: ${props => (props.Color ? ' #606060' : '#909090')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
`
