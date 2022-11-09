import {Component} from 'react'
import Cookies from 'js-cookie'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import VideoItems from '../VideoItems'
import {
  MainHomeSection,
  HomeSection,
  HomeDisplaySection,
  BannerHome,
  BannerTextSection,
  BannerHomeLogo,
  ParaBanner,
  BannerHomeButton,
  HomeVideosDisplay,
  BannerCloseButton,
  SearchSectionDisplay,
  SearchInput,
  SearchButton,
} from './styledComponent'

import Navbar from '../Navbar'
import SlideBarSection from '../SlidebarSection'

const allColor = false

const viewDisplay = {
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  none: 'NONE',
}

const logoUrl = allColor
  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

class Home extends Component {
  state = {
    selectedVideos: [],
    selectedView: viewDisplay.none,
    bannerView: true,
    searchValue: '',
    searchText: '',
  }

  componentDidMount() {
    this.getHomeApi()
  }

  returnChanelObject = values => ({
    name: values.name,
    profileImageUrl: values.profile_image_url,
  })

  getHomeApi = async () => {
    const {searchText} = this.state

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchText}`,
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
        selectedVideos: HomeVideos,
        selectedView: viewDisplay.success,
      })
    } else {
      this.setState({selectedView: viewDisplay.failure})
    }
  }

  onChangeSearch = event => {
    this.setState({searchValue: event.target.value})
  }

  onClickValue = () => {
    const {searchValue} = this.state
    this.setState({searchText: searchValue}, this.getHomeApi)
  }

  searchSection = () => {
    const searchValue = this.state
    return (
      <SearchSectionDisplay>
        <SearchInput
          onChange={this.onChangeSearch}
          bgColor={allColor}
          placeholder="Search"
          value={searchValue}
        />

        <SearchButton
          onClick={this.onClickValue}
          bgColor={allColor}
          type="button"
        >
          <AiOutlineSearch />
        </SearchButton>
      </SearchSectionDisplay>
    )
  }

  renderSuccess = () => {
    const {selectedVideos} = this.state

    return (
      <HomeVideosDisplay>
        {selectedVideos.map(eachItem => (
          <VideoItems videoSectionValue={eachItem} key={eachItem.id} />
        ))}
      </HomeVideosDisplay>
    )
  }

  renderMainSectionHome = () => {
    const {selectedView} = this.state
    switch (selectedView) {
      case viewDisplay.success:
        return this.renderSuccess()
      case viewDisplay.failure:
        return this.renderFailure()
      case viewDisplay.inProgress:
        return this.renderInprogress()
      default:
        return null
    }
  }

  render() {
    const {bannerView} = this.state

    return (
      <>
        <MainHomeSection bgColor={allColor}>
          <Navbar />
          <HomeSection>
            <SlideBarSection />
            <HomeDisplaySection>
              {bannerView && (
                <BannerHome>
                  <BannerTextSection>
                    <BannerHomeLogo src={logoUrl} alt="nxt watch logo" />
                    <ParaBanner>
                      Buy Nxt Watch Premium plans with UPI
                    </ParaBanner>
                    <BannerHomeButton>GET IT NOW</BannerHomeButton>
                  </BannerTextSection>
                  <BannerCloseButton>
                    <AiOutlineClose />
                  </BannerCloseButton>
                </BannerHome>
              )}
              {this.searchSection()}
              {this.renderMainSectionHome()}
            </HomeDisplaySection>
          </HomeSection>
        </MainHomeSection>
      </>
    )
  }
}

export default Home
