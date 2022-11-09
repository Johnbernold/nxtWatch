import {formatDistanceToNow} from 'date-fns'

import {
  ListedEachVideo,
  ThumbnailImage,
  LowerThumbnailText,
  ProfileImg,
  TextSectionImg,
  HeadingText,
  ChannelName,
  LikeTimeSection,
  ViewText,
  LiVideoTime,
  YearSectionUl,
} from './styledComponent'

const allColor = false

const VideoItems = props => {
  const {videoSectionValue} = props
  const {
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoSectionValue

  const {name, profileImageUrl} = channel

  const years = formatDistanceToNow(new Date(publishedAt))

  return (
    <ListedEachVideo bgColor={allColor}>
      <ThumbnailImage src={thumbnailUrl} alt="video thumbnail." />
      <LowerThumbnailText>
        <ProfileImg src={profileImageUrl} alt="channel logo" />
        <TextSectionImg>
          <HeadingText Color={allColor}>{title}</HeadingText>
          <ChannelName Color={allColor}>{name}</ChannelName>
          <LikeTimeSection>
            <ViewText Color={allColor}>{viewCount} views</ViewText>
            <YearSectionUl>
              <LiVideoTime Color={allColor}>{years}</LiVideoTime>
            </YearSectionUl>
          </LikeTimeSection>
        </TextSectionImg>
      </LowerThumbnailText>
    </ListedEachVideo>
  )
}

export default VideoItems
