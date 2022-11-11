import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiListPlus, BiDislike} from 'react-icons/bi'

import {
  MainPageVideos,
  MainVideoPlayerSection,
  VideoPlayer,
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

  renderSuccess = () => {
    const {selectedVideo} = this.state

    const {
      id,
      title,
      videoUrl,
      thumbnailUrl,
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
              <BiLike />
              Like
            </ButtonClick>
            <ButtonClick Color={themeValue}>
              <BiDislike />
              Dislike
            </ButtonClick>
            <ButtonClick Color={themeValue}>
              <BiListPlus />
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
            <DescriptionText Color={themeValue}>{description}</DescriptionText>
          </ProfileTextSection>
        </ProfileDetailsSection>
      </MainVideoPlayerSection>
    )
  }

  renderMainSectionDetailVideo = themeValue => {
    const {selectedView} = this.state
    switch (selectedView) {
      case videoDisplayItem.success:
        return this.renderSuccess(themeValue)
      case videoDisplayItem.failure:
        return this.renderFailure(themeValue)
      case videoDisplayItem.inProgress:
        return this.renderInprogress(themeValue)
      default:
        return null
    }
  }

  render() {
    return (
      <MainPageVideos>{this.renderMainSectionDetailVideo()}</MainPageVideos>
    )
  }
}

export default VideosDetailItems
