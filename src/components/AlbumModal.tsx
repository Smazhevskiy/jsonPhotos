import * as React from 'react'
import {useReducer} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import styled from 'styled-components'
import {CardActionArea} from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import {Delete} from '@mui/icons-material'
import Card from '@mui/material/Card'
import {AlbumFullSize} from '../pages/AlbumFullSize'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 680,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}


interface CardModal {
  thumbnailUrl?: string,
  title?: string,
  id?: number,
  url?: string | undefined,
  albumId?: number,
  removePhoto: (id: number | undefined) => void
}

export const PhotoAlbumModal = (props: CardModal) => {
  const {thumbnailUrl, url, id, title, removePhoto, albumId} = props



  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
      <div>
        <CardStyled >
          <Card sx={{minHeight: 245}}>
            <CardActionArea onClick={handleOpen}>
              <CardMedia
                  component="img"
                  height="140"
                  image={`${thumbnailUrl}`}
                  alt="green iguana"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {title}
                </Typography>
              </CardContent>
            </CardActionArea>
            <IconButton onClick={()=> alert('remove')} className={'icon'}>
              <Delete/>
            </IconButton>
          </Card>
        </CardStyled>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <AlbumFullSize url={url}/>
            </Typography>
          </Box>
        </Modal>
      </div>
  )
}


const CardStyled = styled.div`
  width: 230px;
  height: 250px;
  padding: 10px;
  margin: 10px 0;
  position: relative;

  .icon {
    position: absolute;
    top: 7px;
    right: 8px;
  }

  @media screen and (max-width: 492px) {
    width: 290px;
  }

`