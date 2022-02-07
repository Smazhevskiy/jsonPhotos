import {useDispatch} from 'react-redux'
import {useTypedSelector} from '../hooks/useTypedSelector'
import {useEffect} from 'react'
import {fetchPhotos, setCurrentPage} from '../store/photosReducer'
import {Album} from './album/Album'
import {PaginationRounded} from '../components/Pagination'

export const AlbumsPage = () => {
  const dispatch = useDispatch()
  const {photosData, currentPage} = useTypedSelector(state => state.photos)


  useEffect(() => {
    dispatch(fetchPhotos({_limit: 1201}))
  }, [dispatch])

  let totalPhotos = Object.keys(photosData).length
  let pagesCount = Math.ceil(totalPhotos / 10)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const indexOfLastPhoto = currentPage * 10 //10 - photosPerPage
  const indexOfFirstPhoto = indexOfLastPhoto - 10 //10 - photosPerPage
  const renderingPhotos = photosData.slice(indexOfFirstPhoto, indexOfLastPhoto)


  const handlerOnchangePage = (e: any) => {
    dispatch(setCurrentPage(Number(e.target.innerText)))
  }


  return (
      <div>
        <PaginationRounded
            handlerOnchangePage={handlerOnchangePage}
            currentPage={currentPage}
            count={pagesCount}
        />
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {renderingPhotos ? renderingPhotos.map(photo => {
            return <Album
                key={photo.id}
                id={photo.id}
                title={photo.title}
                url={photo.url}
                thumbnailUrl={photo.thumbnailUrl}
            />
          }):null}
        </div>
      </div>
  )
}

