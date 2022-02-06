import axios from 'axios'
import {IPhotoType} from '../types/entities'

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  withCredentials: true
})

export const photosAPI = {
  getAlbums(payload?: { _limit: number }) {
    return instance.get<Array<IPhotoType>>('/photos?', {params: payload})
  }
}


