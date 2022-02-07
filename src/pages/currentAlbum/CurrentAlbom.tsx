import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useParams} from 'react-router-dom'


export const CurrentAlbum = () => {

  const params = useParams<'albumId'>()
  let {photosData} = useTypedSelector(state => state.photos)
  let currentObj = photosData.find(el => el.id===Number(params.albumId))

  return (
      <div style={{width: '600px', height: '600px', margin: '0 auto',backgroundImage: `url(${currentObj?.url})`}}>

      </div>
  )
}