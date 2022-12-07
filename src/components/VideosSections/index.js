import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import './index.css'
import {
  LiVideoSaved,
  SavedThumbnailUrl,
  SavedTextArea,
  SavedTitle,
  SavedNameChannel,
  SavedViewsSection,
  NoOfViewsSaved,
  SavedDateMentionUl,
  SavedDateLi,
} from './styledComponent'

const VideosSection = props => {
  const {videoListAdd} = props

  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoListAdd
  const {name} = channel

  const yearsValue = formatDistanceToNow(new Date(publishedAt))

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {themeValue} = value
        return (
          <Link className="link-text" to={`videos/${id}`}>
            <LiVideoSaved>
              <SavedThumbnailUrl src={thumbnailUrl} alt="video thumbnail." />
              <SavedTextArea>
                <SavedTitle Color={themeValue}>{title}</SavedTitle>
                <SavedNameChannel Color={themeValue}>{name}</SavedNameChannel>
                <SavedViewsSection>
                  <NoOfViewsSaved Color={themeValue}>
                    {viewCount} views
                  </NoOfViewsSaved>
                  <SavedDateMentionUl>
                    <SavedDateLi Color={themeValue}>{yearsValue}</SavedDateLi>
                  </SavedDateMentionUl>
                </SavedViewsSection>
              </SavedTextArea>
            </LiVideoSaved>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideosSection
