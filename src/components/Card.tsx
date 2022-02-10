import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import {CardActionArea} from '@mui/material'
import styled from 'styled-components'
import IconButton from '@mui/material/IconButton'
import {Delete} from '@mui/icons-material'
import {useReducer} from 'react'

interface Card {
  thumbnailUrl?: string,
  title?: string,
  id?: number,
  url?: string
  albumId?: number,
  removePhoto: (id: number | undefined) => void
}

export const AreaCard = (props: Card) => {
  const {thumbnailUrl, url, id, title, removePhoto} = props
  const [, forceUpdate] = useReducer(x => x + 1, 0)
  const handlerRemovePhoto = () => {
    removePhoto(id)
    forceUpdate()
  }

  return (
      <CardStyled>
        <Card sx={{minHeight: 245}}>
          <CardActionArea>
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
              {id}
            </CardContent>
          </CardActionArea>
          <IconButton onClick={handlerRemovePhoto} className={'icon'}>
            <Delete/>
          </IconButton>
        </Card>
      </CardStyled>
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

