import React from "react"
import { Router } from "@reach/router"
import { login, isAuthenticated, getProfile } from "../utils/auth"
import { Link } from "gatsby"

const Home = ({ user }) => {
  return <p>Hi, {user.name ? user.name : "friend"}!</p>
}

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }
  

  const user = getProfile()

  return (
    <>
      <nav>
        <Link to="/account/">Home</Link>{" "}
        <Link to="/employees/">List of Employees</Link>{" "}
        <Link to="/election/">Election</Link>{" "}
      </nav>
      <Router>
        <Home path="/account/" user={user} />
      </Router>
    </>
  )
}

export default Account