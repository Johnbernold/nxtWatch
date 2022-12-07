import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiFillFire} from 'react-icons/ai'
import NxtWatchContext from '../../context/NxtWatchContext'
import VideosSections from '../VideosSections'
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

class Trending extends Component {
  state = {selectedTrendingLists: [], trendingDisplay: trendingView.none}

  componentDidMount() {
    this.getTrendingApi()
  }

  returnChanelObject = values => ({
    name: values.name,
    profileImageUrl: values.profile_image_url,
  })

  getTrendingApi = async () => {
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
    const response = await fetch(
      'https://apis.ccbp.in/videos/trending',
      options,
    )

    if (response.ok === true) {
      const data = await response.json()

      const HomeVideos = data.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        channel: this.returnChanelObject(eachItem.channel),
        viewCount: eachItem.view_count,
        publishedAt: eachItem.published_at,
      }))

      this.setState({
        selectedTrendingLists: HomeVideos,
        trendingDisplay: trendingView.success,
      })
    } else {
      this.setState({trendingDisplay: trendingView.failure})
    }
  }

  onClickFailure = () => {
    this.getHomeApi()
  }

  onRetrySearch = () => {
    this.getHomeApi()
  }

  renderTrendingSuccess = themeValue => {
    const {selectedTrendingLists} = this.state

    return (
      <TrendingVideosDisplay>
        <BannerSectionTrending bgColor={themeValue}>
          <TrendingIconSection bgColor={themeValue}>
            <AiFillFire />
          </TrendingIconSection>
          <HeadingTrendingBanner Color={themeValue}>
            Trending
          </HeadingTrendingBanner>
        </BannerSectionTrending>
        <DisplayVideosArea>
          {selectedTrendingLists.map(eachItem => (
            <VideosSections trendingEachItem={eachItem} key={eachItem.id} />
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
    <LoaderContainer>
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderMainSectionTrending = themeValue => {
    const {trendingDisplay} = this.state
    switch (trendingDisplay) {
      case trendingView.success:
        return this.renderTrendingSuccess(themeValue)
      case trendingView.failure:
        return this.renderTrendingFailure(themeValue)
      case trendingView.inProgress:
        return this.renderTrendingInprogress(themeValue)
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
              <MainTrendingSection bgColor={themeValue}>
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

export default Trending
