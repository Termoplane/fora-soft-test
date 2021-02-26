import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ChatRoom from "./pages/ChatRoom/ChatRoom"
import Login from "./pages/Login/Login"
import Join from "./pages/Join/Join"

const App = () => {
  return(
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/join" component={Join} />
      <Route path="/room" component={ChatRoom} />
    </Router>
  )
}

export default App;
