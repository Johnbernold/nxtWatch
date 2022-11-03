import React from 'react'

const NxtWatchContext = React.createContext({
  themeValue: false,
  selectedSlideBar: '',
  changeTheme: () => {},
  selectedValue: () => {},
})

export default NxtWatchContext
