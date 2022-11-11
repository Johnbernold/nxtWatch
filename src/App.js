import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import TokenCheckSection from './components/TokenCheckSection'

import NxtWatchContext from './context/NxtWatchContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {themeValue: false, selectedSlideBar: 'HOME'}

  changeTheme = () => {
    this.setState(prevState => ({themeValue: !prevState.themeValue}))
  }

  selectedValue = value => {
    this.setState({selectedSlideBar: value})
  }

  render() {
    const {themeValue, selectedSlideBar} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          themeValue,
          selectedSlideBar,
          selectedValue: this.selectedValue,
          changeTheme: this.changeTheme,
        }}
      >
        return(
        <>
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <TokenCheckSection exact path="/" component={Home} />
          </Switch>
        </>
        )
      </NxtWatchContext.Provider>
    )
  }
}

export default App
