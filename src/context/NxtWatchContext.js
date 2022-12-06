import React from 'react'

const NxtWatchContext = React.createContext({
  themeValue: false,
  selectedSlideBar: '',
  changeTheme: () => {},
  selectedValue: () => {},
  savedButton: () => {},
  saveSelect: false,
  savedValue: [],
})

export default NxtWatchContext
