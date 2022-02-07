import {ThunkType} from './store'
import {IPhotoType} from '../types/entities'
import {photosAPI} from '../api/jsonPhotosApi'

enum PHOTOS_ACTIONS_TYPES {
  SET_PHOTOS = 'PHOTOS/SET_PHOTOS_DATA',
  SET_CURRENT_PAGE = 'PHOTOS/SET_CURRENT_PAGE'
}

type PhotosActions =
    | ReturnType<typeof setPhotosData>
    | ReturnType<typeof setCurrentPage>


export interface PhotosInitialState {
  photosData: IPhotoType [],
  currentPage: number
}

const initialState: PhotosInitialState = {
  photosData: [
    {id: 1, title: '', url: '', thumbnailUrl: '', albumId: 3}
  ],
  currentPage: 1
}

export const photosReducer = (state = initialState, action: PhotosActions): PhotosInitialState => {
  switch (action.type) {
    case PHOTOS_ACTIONS_TYPES.SET_PHOTOS:
      return {...state, photosData: action.payload}
    case PHOTOS_ACTIONS_TYPES.SET_CURRENT_PAGE:
      return {...state, currentPage: action.payload}
    default:
      return state
  }
}


export const setPhotosData = (payload: Array<IPhotoType>) => ({
  type: PHOTOS_ACTIONS_TYPES.SET_PHOTOS,
  payload
} as const)

export const setCurrentPage = (payload: number) => ({
  type: PHOTOS_ACTIONS_TYPES.SET_CURRENT_PAGE,
  payload
} as const)


export const fetchPhotos = (payload?: { _limit: number }): ThunkType => async dispatch => {
  try {
    const response = await photosAPI.getAlbums(payload)
    dispatch(setPhotosData(response.data))
  } catch (e) {
    console.log(e)
  }
}

