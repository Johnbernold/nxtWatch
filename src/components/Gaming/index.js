import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'
import NxtWatchContext from '../../context/NxtWatchContext'
import GamingItems from '../GamingItems'
import './index.css'

import {
  MainTrendingSection,
  TrendingDownSection,
  TrendingVideosDisplay,
  BannerSectionTrending,
  TrendingIconSection,
  HeadingTrendingBanner,
  DisplayVideosArea,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  FailureRetryButton,
  LoaderContainer,
} from './styledComponent'

import Navbar from '../Navbar'
import SlideBarSection from '../SlidebarSection'

const trendingView = {
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  none: 'NONE',
}

class Gaming extends Component {
  state = {selectedLists: [], trendingDisplay: trendingView.none}

  componentDidMount() {
    this.getGameApi()
  }

  getGameApi = async () => {
    this.setState({
      trendingDisplay: trendingView.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch('https://apis.ccbp.in/videos/gaming', options)

    if (response.ok === true) {
      const data = await response.json()

      console.log(data)

      const gameVideos = data.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
      }))

      this.setState({
        selectedLists: gameVideos,
        trendingDisplay: trendingView.success,
      })
    } else {
      this.setState({trendingDisplay: trendingView.failure})
    }
  }

  onClickFailure = () => {
    this.getTrendingApi()
  }

  renderTrendingSuccess = themeValue => {
    const {selectedLists} = this.state
    return (
      <TrendingVideosDisplay>
        <BannerSectionTrending data-testid="banner" bgColor={themeValue}>
          <TrendingIconSection bgColor={themeValue}>
            <SiYoutubegaming className="bg-icons" />
          </TrendingIconSection>
          <HeadingTrendingBanner Color={themeValue}>
            Gaming
          </HeadingTrendingBanner>
        </BannerSectionTrending>
        <DisplayVideosArea>
          {selectedLists.map(eachItem => (
            <GamingItems gameValueItem={eachItem} key={eachItem.id} />
          ))}
        </DisplayVideosArea>
      </TrendingVideosDisplay>
    )
  }

  renderTrendingFailure = themeValue => {
    const failureUrl = themeValue
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <FailureContainer>
        <FailureImage src={failureUrl} alt="failure view" />
        <FailureHeading Color={themeValue}>
          Oops! Something Went Wrong
        </FailureHeading>
        <FailureText Color={themeValue}>
          We are having some trouble to complete your request.
        </FailureText>
        <FailureText Color={themeValue}>Please yry again.</FailureText>
        <FailureRetryButton onClick={this.onClickFailure} type="button">
          Retry
        </FailureRetryButton>
      </FailureContainer>
    )
  }

  renderInprogress = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderMainSectionTrending = themeValue => {
    const {trendingDisplay} = this.state
    console.log(trendingDisplay)
    switch (trendingDisplay) {
      case trendingView.success:
        return this.renderTrendingSuccess(themeValue)
      case trendingView.failure:
        return this.renderTrendingFailure(themeValue)
      case trendingView.inProgress:
        return this.renderInprogress(themeValue)
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {themeValue} = value

          return (
            <>
              <MainTrendingSection data-testid="gaming" bgColor={themeValue}>
                <Navbar />
                <TrendingDownSection>
                  <SlideBarSection />
                  {this.renderMainSectionTrending(themeValue)}
                </TrendingDownSection>
              </MainTrendingSection>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
