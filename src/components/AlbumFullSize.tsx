interface IAlbumFullSize {
  url:string | undefined,
}

export const AlbumFullSize = (props:IAlbumFullSize) => {


  return (
      <div style={{width: '600px', height: '600px', margin: '0 auto',backgroundImage: `url(${props.url})`}}>

      </div>
  )
}