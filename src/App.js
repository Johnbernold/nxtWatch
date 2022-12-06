import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import TokenCheckSection from './components/TokenCheckSection'
import VideosDetailItems from './components/VideosDetailItems'
import SavedVideos from './components/SavedVideos'

import NxtWatchContext from './context/NxtWatchContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {themeValue: false, selectedSlideBar: 'HOME', savedValue: []}

  changeTheme = () => {
    this.setState(prevState => ({themeValue: !prevState.themeValue}))
  }

  selectedValue = value => {
    this.setState({selectedSlideBar: value})
  }

  savedListItem = value => {
    const {savedValue} = this.state

    const findValue = savedValue.filter(eachValue => eachValue.id === value.id)

    if (findValue.length >= 1) {
      this.setState(prevState => ({
        savedValue: prevState.savedValue.filter(
          eachItem => eachItem.id !== value.id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        savedValue: [...prevState.savedValue, value],
      }))
    }
  }

  render() {
    const {themeValue, selectedSlideBar, savedValue} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          themeValue,
          selectedSlideBar,
          savedValue,
          selectedValue: this.selectedValue,
          changeTheme: this.changeTheme,
          savedButton: this.savedListItem,
        }}
      >
        return(
        <>
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <TokenCheckSection exact path="/" component={Home} />
            <TokenCheckSection
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <TokenCheckSection
              exact
              path="/videos/:id"
              component={VideosDetailItems}
            />
          </Switch>
        </>
        )
      </NxtWatchContext.Provider>
    )
  }
}

export default App
