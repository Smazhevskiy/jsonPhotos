import {useDispatch} from 'react-redux'
import {useTypedSelector} from '../hooks/useTypedSelector'
import {ChangeEvent, useEffect} from 'react'
import {fetchPhotos, setCurrentPage, setSortByHighest} from '../store/photosReducer'
import {PaginationRounded} from '../components/Pagination'
import styled from 'styled-components'
import {Select} from '../components/Select'
import {PhotoAlbumModal} from '../components/AlbumModal'

export const AlbumsPage = () => {
  const dispatch = useDispatch()
  const {photosData, currentPage, photosPerPage} = useTypedSelector(state => state.photos)


  let totalPhotos = Object.keys(photosData).length
  let pagesCount = Math.ceil(totalPhotos / photosPerPage)
  const indexOfLastPhoto = currentPage * photosPerPage //10 - photosPerPage
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage //10 - photosPerPage
  let renderingPhotos = photosData.slice(indexOfFirstPhoto, indexOfLastPhoto)


  const handlerOnchangePage = (e: any) => {
    dispatch(setCurrentPage(Number(e.target.innerText)))
  }

  let removePhoto = (photoId: number | undefined) => {
    return renderingPhotos.filter(photo => photo.id!==photoId)
  }

  const handlerSelectSort = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCurrentPage(1))
    dispatch(setSortByHighest())
  }

  useEffect(() => {
    dispatch(fetchPhotos({_limit: 1200}))
  }, [dispatch])

  return (
      <AlbumsItemsStyled>
        <div className={'nav-menu'}>
          <PaginationRounded
              handlerOnchangePage={handlerOnchangePage}
              currentPage={currentPage}
              count={pagesCount}
          />
          <Select selectChange={handlerSelectSort}/>
        </div>
        <div className={'main'}>
          {renderingPhotos ? renderingPhotos.map(photo => {
            return <PhotoAlbumModal
                removePhoto={removePhoto}
                key={photo.id}
                thumbnailUrl={photo.thumbnailUrl}
                url={photo.url}
                id={photo.id}
                title={photo.title}
                albumId={photo.albumId}
            />
          }):null}
        </div>
      </AlbumsItemsStyled>
  )
}

const AlbumsItemsStyled = styled.div`
  .nav-menu {
    margin: 1rem 0;
    height: 2rem;
    display: flex;
    align-items: end;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .main > div:last-of-type {

  }

  @media screen and (max-width: 532px) {
    .main {
      justify-content: center;
    }
  }

  @media screen and (max-width: 387px) {
    .nav-menu {
      display: flex;
      width: 320px;
      flex-wrap: revert;
      margin-top: 50px;
    }
  }

`