import {ThunkType} from './store'
import {IPhotoType} from '../types/entities'
import {photosAPI} from '../api/jsonPhotosApi'

enum PHOTOS_ACTIONS_TYPES {
  SET_PHOTOS = 'PHOTOS/SET_PHOTOS_DATA',
  SET_CURRENT_PAGE = 'PHOTOS/SET_CURRENT_PAGE',
  SORT_BY_HIGHEST = 'PHOTOS/SORT_BY_HIGHEST',
  DELETE_PHOTO = 'PHOTOS/DELETE_PHOTO',
  PHOTOS_PER_PAGE = 'PHOTOS_PER_PAGE'
}

type PhotosActions =
    | ReturnType<typeof setPhotosData>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setSortByHighest>
    | ReturnType<typeof setDeletePhoto>
    | ReturnType<typeof setPhotosRerPage>


export interface PhotosInitialState {
  photosData: IPhotoType [],
  currentPage: number,
  photosPerPage: number,
}

const initialState: PhotosInitialState = {
  photosData: [
    {id: 1, title: '', url: '', thumbnailUrl: '', albumId: 3}
  ],
  currentPage: 1,
  photosPerPage: 15,
}

export const photosReducer = (state = initialState, action: PhotosActions): PhotosInitialState => {
  switch (action.type) {
    case PHOTOS_ACTIONS_TYPES.SET_PHOTOS:
      return {...state, photosData: action.payload}
    case PHOTOS_ACTIONS_TYPES.SET_CURRENT_PAGE:
      return {...state, currentPage: action.payload}
    case PHOTOS_ACTIONS_TYPES.SORT_BY_HIGHEST:
      return {...state, ...state.photosData.reverse()}
    case PHOTOS_ACTIONS_TYPES.DELETE_PHOTO:
      return {...state, ...state.photosData.filter(photo => photo.id!==action.id)}
    case PHOTOS_ACTIONS_TYPES.PHOTOS_PER_PAGE:
      return {...state, photosPerPage: action.payload.photoPerPage}
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

export const setSortByHighest = () => ({
  type: PHOTOS_ACTIONS_TYPES.SORT_BY_HIGHEST,
} as const)


export const setDeletePhoto = (id: number | undefined) => ({
  type: PHOTOS_ACTIONS_TYPES.DELETE_PHOTO,
  id
} as const)

export const setPhotosRerPage = (payload: { photoPerPage: number }) => ({
  type: PHOTOS_ACTIONS_TYPES.PHOTOS_PER_PAGE,
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

