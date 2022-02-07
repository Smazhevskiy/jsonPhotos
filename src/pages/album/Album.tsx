import { NavLink } from 'react-router-dom'
import styles from './Album.module.css'


interface AlbumProps {
  id?: number,
  title?: string,
  url?: string,
  thumbnailUrl?: string,
}

export const Album = (props: AlbumProps) => {
  const {
    thumbnailUrl,
    title,
    id
  } = props


  return (
      <div style={{backgroundImage: `url(${thumbnailUrl})`}} className={styles.album}>
        <div>{title}</div>
        <NavLink to={`/${id}`} >show</NavLink>
      </div>
  )
}