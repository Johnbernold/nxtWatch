import {Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'

import './App.css'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route path="/login" component={LoginForm} />
      <Route path="/" component={Home} />
    </Switch>
  </>
)

export default App
