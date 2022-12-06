import {AiFillFire} from 'react-icons/ai'
import NxtWatchContext from '../../context/NxtWatchContext'
import VideosSections from '../VideosSections'

import {
  MainSavedVideos,
  VideoSection,
  MainSavedVideosDisplay,
  BannerSection,
  SavedIconSection,
  HeadingBanner,
  VideosDisplaySection,
} from './styledComponent'

import Navbar from '../Navbar'
import SlideBarSection from '../SlidebarSection'

const SavedVideos = () => {
  const renderMainSectionSaved = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {themeValue, savedValue} = value

        return (
          <MainSavedVideosDisplay>
            <BannerSection bgColor={themeValue}>
              <SavedIconSection bgColor={themeValue}>
                <AiFillFire />
              </SavedIconSection>
              <HeadingBanner Color={themeValue}>Saved Videos</HeadingBanner>
            </BannerSection>

            <VideosDisplaySection>
              {savedValue.map(eachList => (
                <VideosSections key={eachList.id} videoListAdd={eachList} />
              ))}
            </VideosDisplaySection>
          </MainSavedVideosDisplay>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  const renderNoSavedVideos = () => {}

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {themeValue, savedValue} = value

        const success = savedValue.length !== 0

        return (
          <>
            <MainSavedVideos bgColor={themeValue}>
              <Navbar />
              <VideoSection>
                <SlideBarSection />
                {success ? renderMainSectionSaved() : renderNoSavedVideos()}
              </VideoSection>
            </MainSavedVideos>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default SavedVideos
