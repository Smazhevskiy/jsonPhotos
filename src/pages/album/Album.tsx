import {NavLink} from 'react-router-dom'
import styled from 'styled-components'


interface AlbumProps {
  id?: number,
  title?: string,
  url?: string,
  thumbnailUrl?: string,
  albumId?: number,
}

export const Album = (props: AlbumProps) => {
  const {
    thumbnailUrl,
    title,
    id,
    url,
    albumId
  } = props


  return (
      <AlbumStyled>
        <img className={'img'} src={`${thumbnailUrl}`} alt={`${id}`}/>
      </AlbumStyled>

  )
}

const AlbumStyled = styled.div`
  word-wrap: break-word;
  width: 200px;
  height: 200px;
  margin: 5px 0;
  border: 1px solid blueviolet;

  .img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`

// style={{backgroundImage: `url(${thumbnailUrl})`}}