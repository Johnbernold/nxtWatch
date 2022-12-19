import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import NxtWatchContext from '../../context/NxtWatchContext'
import HomeItems from '../HomeItems'
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
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  FailureRetryButton,
  NoSearchResult,
  NoResultImg,
  NoSearchHeading,
  NoSearchText,
  NoSearchRetryButton,
} from './styledComponent'

import Navbar from '../Navbar'
import SlideBarSection from '../SlidebarSection'

const viewDisplay = {
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  none: 'NONE',
}

class Home extends Component {
  state = {
    searchValue: '',
    searchText: '',
    selectedVideos: [],
    selectedView: viewDisplay.none,
    bannerView: true,
  }

  componentDidMount() {
    this.getHomeApi()
  }

  returnChanelObject = values => ({
    name: values.name,
    profileImageUrl: values.profile_image_url,
  })

  getHomeApi = async () => {
    this.setState({
      selectedView: viewDisplay.inProgress,
    })

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

  renderMainSectionHome = themeValue => {
    const {selectedView} = this.state
    switch (selectedView) {
      case viewDisplay.success:
        return this.renderSuccess(themeValue)
      case viewDisplay.failure:
        return this.renderFailure(themeValue)
      case viewDisplay.inProgress:
        return this.renderInprogress(themeValue)
      default:
        return null
    }
  }

  onChangeSearch = event => {
    this.setState({searchValue: event.target.value})
  }

  onClickValue = () => {
    const {searchValue} = this.state
    this.setState({searchText: searchValue}, this.getHomeApi)
  }

  onClickBannerClose = () => {
    this.setState({bannerView: false})
  }

  onClickFailure = () => {
    this.getHomeApi()
  }

  onRetrySearch = () => {
    this.getHomeApi()
  }

  searchSection = themeValue => {
    const {searchValue} = this.state
    return (
      <SearchSectionDisplay>
        <SearchInput
          placeholder="Search"
          onChange={this.onChangeSearch}
          bgColor={themeValue}
          value={searchValue}
        />

        <SearchButton
          onClick={this.onClickValue}
          bgColor={themeValue}
          type="button"
          data-testid="searchButton"
        >
          <AiOutlineSearch />
        </SearchButton>
      </SearchSectionDisplay>
    )
  }

  renderSuccess = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {themeValue} = value

        const {selectedVideos} = this.state

        const checkForValue = selectedVideos.length === 0
        return checkForValue ? (
          <NoSearchResult>
            <NoResultImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
              alt=" no videos"
            />
            <NoSearchHeading Color={themeValue}>
              No Search results found
            </NoSearchHeading>
            <NoSearchText Color={themeValue}>
              Try different key words or remove search filter
            </NoSearchText>

            <NoSearchRetryButton onClick={this.onRetrySearch} type="button">
              Retry
            </NoSearchRetryButton>
          </NoSearchResult>
        ) : (
          <HomeVideosDisplay>
            {selectedVideos.map(eachItem => (
              <HomeItems videoSectionValue={eachItem} key={eachItem.id} />
            ))}
          </HomeVideosDisplay>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderFailure = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {themeValue} = value
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
            <FailureRetryButton onClick={this.onClickFailure} type="button">
              Retry
            </FailureRetryButton>
          </FailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderInprogress = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  bannerViewSection = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {themeValue} = value
        const {bannerView} = this.state
        const logoUrl = themeValue
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        return (
          bannerView && (
            <BannerHome data-testid="banner">
              <BannerTextSection>
                <BannerHomeLogo src={logoUrl} alt="nxt watch logo" />
                <ParaBanner>Buy Nxt Watch Premium plans with UPI</ParaBanner>
                <BannerHomeButton>GET IT NOW</BannerHomeButton>
              </BannerTextSection>
              <BannerCloseButton
                type="button"
                onClick={this.onClickBannerClose}
                data-testid="close"
              >
                <AiOutlineClose />
              </BannerCloseButton>
            </BannerHome>
          )
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {themeValue} = value
          return (
            <>
              <MainHomeSection bgColor={themeValue} data-testid="home">
                <Navbar />
                <HomeSection>
                  <SlideBarSection />
                  <HomeDisplaySection>
                    {this.bannerViewSection()}

                    {this.searchSection()}
                  </HomeDisplaySection>
                </HomeSection>
              </MainHomeSection>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
