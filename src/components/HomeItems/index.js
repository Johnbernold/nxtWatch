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

import NxtWatchContext from '../../context/NxtWatchContext'

const HomeItems = props => {
  const {videoSectionValue} = props
  const {
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoSectionValue

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {themeValue} = value

        const {name, profileImageUrl} = channel

        const years = formatDistanceToNow(new Date(publishedAt))

        return (
          <ListedEachVideo bgColor={themeValue}>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail." />
            <LowerThumbnailText>
              <ProfileImg src={profileImageUrl} alt="channel logo" />
              <TextSectionImg>
                <HeadingText Color={themeValue}>{title}</HeadingText>
                <ChannelName Color={themeValue}>{name}</ChannelName>
                <LikeTimeSection>
                  <ViewText Color={themeValue}>{viewCount} views</ViewText>
                  <YearSectionUl>
                    <LiVideoTime Color={themeValue}>{years}</LiVideoTime>
                  </YearSectionUl>
                </LikeTimeSection>
              </TextSectionImg>
            </LowerThumbnailText>
          </ListedEachVideo>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default HomeItems
