import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import './index.css'

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
    id,
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
          <Link className="link-home" to={`videos/${id}`}>
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
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default HomeItems
