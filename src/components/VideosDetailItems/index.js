import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiListPlus, BiDislike} from 'react-icons/bi'
import Loader from 'react-loader-spinner'

import NxtWatchContext from '../../context/NxtWatchContext'

import Navbar from '../Navbar'
import SlideBarSection from '../SlidebarSection'

import './index.css'

import {
  MainPageVideos,
  VideoDisplaySection,
  MainVideoPlayerSection,
  VideoPlayer,
  VideoHeading,
  VideoIconsAndViewsSection,
  ViewsSection,
  NoOfViews,
  DateMentionUl,
  DateLi,
  ButtonClick,
  VideosLikeSection,
  ProfileDetailsSection,
  ProfilePhoto,
  ProfileTextSection,
  ChannelName,
  SubscribtionText,
  DescriptionText,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  FailureRetryButton,
  LoaderContainer,
} from './styledComponent'

const videoDisplayItem = {
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  none: 'NONE',
}

class VideosDetailItems extends Component {
  state = {selectedVideo: {}, selectedView: videoDisplayItem.none}

  componentDidMount() {
    this.getVideoDetailApi()
  }

  getChanelDetail = values => ({
    name: values.name,
    profileImageUrl: values.profile_image_url,
    subscriberCount: values.subscriber_count,
  })

  getVideoDetailApi = async () => {
    this.setState({selectedView: videoDisplayItem.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const videoUrl = `https://apis.ccbp.in/videos/${id}`

    const response = await fetch(videoUrl, options)

    if (response.ok === true) {
      const videoData = await response.json()
      const videoValue = videoData.video_details
      const videoDetails = {
        id: videoValue.id,
        title: videoValue.title,
        videoUrl: videoValue.video_url,
        thumbnailUrl: videoValue.thumbnail_url,
        channel: this.getChanelDetail(videoValue.channel),
        viewCount: videoValue.view_count,
        publishedAt: videoValue.published_at,
        description: videoValue.description,
      }

      this.setState({
        selectedView: videoDisplayItem.success,
        selectedVideo: videoDetails,
      })
    } else {
      this.setState({selectedView: videoDisplayItem.failure})
    }
  }

  onClickFailureVideos = () => {
    this.getVideoDetailApi()
  }

  renderSuccessVideos = () => {
    ;<NxtWatchContext.Consumer>
      {value => {
        const {themeValue} = value
        const {selectedVideo} = this.state

        const {
          title,
          videoUrl,
          channel,
          viewCount,
          publishedAt,
          description,
        } = selectedVideo

        const yearsValue = formatDistanceToNow(new Date(publishedAt))

        const {name, profileImageUrl, subscriberCount} = channel

        return (
          <MainVideoPlayerSection>
            <VideoPlayer>
              <ReactPlayer url={videoUrl} />
            </VideoPlayer>
            <VideoHeading Color={themeValue}>{title}</VideoHeading>
            <VideoIconsAndViewsSection>
              <ViewsSection>
                <NoOfViews Color={themeValue}>{viewCount} views</NoOfViews>
                <DateMentionUl>
                  <DateLi Color={themeValue}>{yearsValue}</DateLi>
                </DateMentionUl>
              </ViewsSection>

              <VideosLikeSection>
                <ButtonClick Color={themeValue}>
                  <BiLike className="icon-videos" />
                  Like
                </ButtonClick>
                <ButtonClick Color={themeValue}>
                  <BiDislike className="icon-videos" />
                  Dislike
                </ButtonClick>
                <ButtonClick Color={themeValue}>
                  <BiListPlus className="icon-videos" />
                  Save
                </ButtonClick>
              </VideosLikeSection>
            </VideoIconsAndViewsSection>
            <hr />
            <ProfileDetailsSection>
              <ProfilePhoto alt="channel logo." src={profileImageUrl} />
              <ProfileTextSection>
                <ChannelName Color={themeValue}>{name}</ChannelName>
                <SubscribtionText Color={themeValue}>
                  {subscriberCount} subscribers
                </SubscribtionText>
                <DescriptionText Color={themeValue}>
                  {description}
                </DescriptionText>
              </ProfileTextSection>
            </ProfileDetailsSection>
          </MainVideoPlayerSection>
        )
      }}
    </NxtWatchContext.Consumer>
  }

  renderFailureVideos = themeValue => {
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
        <FailureRetryButton onClick={this.onClickFailureVideos} type="button">
          Retry
        </FailureRetryButton>
      </FailureContainer>
    )
  }

  renderInprogressVideos = () => (
    <LoaderContainer>
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  renderMainSectionVideos = themeValue => {
    const {selectedView} = this.state
    switch (selectedView) {
      case videoDisplayItem.success:
        return this.renderSuccessVideos(themeValue)
      case videoDisplayItem.failure:
        return this.renderFailureVideos(themeValue)
      case videoDisplayItem.inProgress:
        return this.renderInprogressVideos(themeValue)
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
              <MainPageVideos bgColor={themeValue}>
                <Navbar />
                <VideoDisplaySection>
                  <SlideBarSection />
                  {this.renderMainSectionVideos(themeValue)}
                </VideoDisplaySection>
              </MainPageVideos>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideosDetailItems
