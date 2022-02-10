import React from 'react'
import './App.css'
import {AlbumsPage} from '../../pages/AlbumsPage'
import {Route, Routes} from 'react-router-dom'
import {Header} from '../Header'


function App() {



  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/*" element={<div>ERROR 404 PATH NOT FOUND</div>}/>
          <Route path="/jsonPhotos" element={<AlbumsPage/>}/>
        </Routes>
      </div>
  )
}

export default App

