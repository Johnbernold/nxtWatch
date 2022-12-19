import styled from 'styled-components'

export const SlideMainSection = styled.div`
  width: 200px;
  height: 140vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.bgColor ? '#212121' : '#f9f9f9')};
`

export const UnorderedSlide = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0px;
  margin-left: 0px;

  padding: 5px;
`
export const ListSlide = styled.li`
  display: flex;
  list-style-type: none;
  align-items: center;
  background-color: ${props => props.bgColor};
`

export const PageText = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  margin-left: 10px;
`

export const BottomSectionSlide = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
`
export const FollowAsSection = styled.div`
  width: 150px;
  display: flex;

  margin-left: 0px;
`
export const ContactAs = styled.h1`
  color: ${props => props.color};
  font-size:12px;
  font-family:"Roboto;"
  font-weight:600;
`
export const DescriptionText = styled.p`
  color: ${props => props.color};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const ContactAsLogo = styled.img`
  width: 20px;
  margin-right: 15px;
`
