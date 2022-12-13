import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LiVideoSaved,
  SavedThumbnailUrl,
  SavedTextArea,
  SavedTitle,
  NoOfViewsSaved,
  Textvalue,
} from './styledComponent'

const VideosSection = props => {
  const {gameValueItem} = props

  const {id, title, thumbnailUrl, viewCount} = gameValueItem

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {themeValue} = value
        return (
          <Link className="link-text" to={`videos/${id}`}>
            <LiVideoSaved>
              <SavedThumbnailUrl src={thumbnailUrl} alt="video thumbnail." />

              <SavedTitle Color={themeValue}>{title}</SavedTitle>
              <SavedTextArea>
                <NoOfViewsSaved>{viewCount}</NoOfViewsSaved>
                <Textvalue>Watching Worldwide</Textvalue>
              </SavedTextArea>
            </LiVideoSaved>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideosSection
