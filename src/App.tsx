import React, {useEffect} from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import {useTypedSelector} from './hooks/useTypedSelector'
import {fetchPhotos} from './store/photosReducer'

function App() {
  const dispatch = useDispatch()
  const {photosData} = useTypedSelector(state => state.photos)

  useEffect(() => {
    dispatch(fetchPhotos({_limit: 10}))
  }, [dispatch])
  console.log(photosData)
  return (
      <div className="App">
        hello
      </div>
  )
}

export default App
