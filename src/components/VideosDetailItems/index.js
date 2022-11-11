import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'

import {MainVideoPlayerSection} from './styledComponent'

const videoDisplayItem = {
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  none: 'NONE',
}

class VideosDetailItems extends Component {
  state = {selectedVideo: {}, selectedView: videoDisplayItem.none}

  compoundDidMount() {
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

  render() {
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

    const {name, profileImageUrl, subscriberCount} = channel
    
    return (
      <MainVideoPlayerSection>
        <VideoPlayer>
          <ReactPlayer url={videoUrl} />
        </VideoPlayer>
        <VideoHeading>{}</VideoHeading>
        <VideoIconsAndViewsSection>
          <ViewsSection>{}</ViewsSection>
          <VideosLikeSection>{}</VideosLikeSection>
        </VideoIconsAndViewsSection>
        <hr />
        <ProfileDetailsSection>
          <ProfilePhoto />
          <ProfileTextSection>
            <ChannelName></ChannelName>
            <SubscribtionText></SubscribtionText>
            <DescriptionText></DescriptionText>
          </ProfileTextSection>
        </ProfileDetailsSection>
      </MainVideoPlayerSection>
    )
  }
}

export default VideosDetailItems
