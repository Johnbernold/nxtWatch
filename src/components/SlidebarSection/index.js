import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {BiAddToQueue} from 'react-icons/bi'
import NxtWatchContext from '../../context/NxtWatchContext'
import './index.css'

import {
  SlideMainSection,
  UnorderedSlide,
  ListSlide,
  PageText,
  BottomSectionSlide,
  ContactAs,
  FollowAsSection,
  DescriptionText,
  ContactAsLogo,
} from './styledComponent'

const slideBarText = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  save: 'SAVING',
}

const SlideBarSection = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {themeValue, selectedSlideBar} = value

      let color = themeValue ? '#64748b' : '#475569'
      let bgColor = themeValue ? '#212121' : '#f9f9f9'
      let icon = ''

      if (selectedSlideBar === slideBarText.home) {
        color = themeValue ? '#f1f5f9' : '#000000'
        bgColor = themeValue ? '#383838' : '#cbd5e1'
        icon = 'red-color'
      }

      return (
        <SlideMainSection>
          <UnorderedSlide>
            <ListSlide bgColor={bgColor}>
              <AiFillHome className={`icon-all ${icon}`} />
              <PageText color={color}>Home</PageText>
            </ListSlide>

            <ListSlide bgColor={bgColor}>
              <FaFire className={`icon-all ${icon}`} />
              <PageText color={color}>Trending</PageText>
            </ListSlide>

            <ListSlide bgColor={bgColor}>
              <SiYoutubegaming className={`icon-all ${icon}`} />
              <PageText color={color}>Gaming</PageText>
            </ListSlide>

            <ListSlide bgColor={bgColor}>
              <BiAddToQueue className={`icon-all ${icon}`} />
              <PageText color={color}>Saved videos</PageText>
            </ListSlide>
          </UnorderedSlide>

          <BottomSectionSlide>
            <ContactAs>CONTACT US</ContactAs>
            <FollowAsSection>
              <ContactAsLogo
                alt="facebook logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              />
              <ContactAsLogo
                alt="twitter logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              />
              <ContactAsLogo
                alt="linked in logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
              />
            </FollowAsSection>
            <DescriptionText>
              Enjoy Now to see your channel and recommendation!
            </DescriptionText>
          </BottomSectionSlide>
        </SlideMainSection>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SlideBarSection
