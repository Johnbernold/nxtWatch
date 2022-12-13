import NxtWatchContext from '../../context/NxtWatchContext'

import {
  MainTrendingSection,
  TrendingDownSection,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundText,
} from './styledComponent'

import Navbar from '../Navbar'
import SlideBarSection from '../SlidebarSection'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {themeValue} = value
      const failureUrl = themeValue
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <MainTrendingSection bgColor={themeValue}>
          <Navbar />
          <TrendingDownSection>
            <SlideBarSection />
            <NotFoundContainer bgColor={themeValue}>
              <NotFoundImage src={failureUrl} alt="failure view" />
              <NotFoundHeading Color={themeValue}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundText Color={themeValue}>
                We are sorry, the page you requested could not be found
              </NotFoundText>
            </NotFoundContainer>
          </TrendingDownSection>
        </MainTrendingSection>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
