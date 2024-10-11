import React from 'react'
import './App.css'
// import { Button } from "reactstrap";

import 'bootstrap/dist/css/bootstrap.css'

import Body from './Pages/Home'
import AuthorPage from './Pages/Profile'
// import Pagination from "./Components/Pagination/Pagination"

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PostPage from './Pages/PostPage'
import MostLikedPost from './Pages/MostLikedPost'
import NavigationBar from './Components/NavigationBar'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={Body} />
          <Route exact path="/MostLikedPost" element={MostLikedPost} />
          <Route exact path="/MostCommentPost" element={MostLikedPost} />
          <Route exact path="/:pageNo" element={Body} />
          <Route exact path="/profile/:authorId" element={AuthorPage} />
          <Route exact path="/Post/:postId" element={PostPage} />
        </Routes>
        <Footer />
        {/* <Body/> */}
      </Router>
    </div>
  )
}

export default App