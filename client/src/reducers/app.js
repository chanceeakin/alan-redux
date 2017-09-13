import {
  DIALOG_HIDE,
  DIALOG_SHOW,
  TOGGLE_DRAWER,
  HIDE_DRAWER,
  SHOW_DRAWER,
  TOGGLE_COLLAPSE,
  FETCH_BEGIN,
  FETCH_SUCCESS,
  FETCH_FAIL,
  CONTENT_CHANGE,
  FETCH_CLEAR
} from './../constants/action-types'

const initialState = {
  isDialogOpen: false,
  isDrawerOpen: false,
  title: 'Language',
  collapsed: false,
  fetchError: false,
  isFetching: false,
  contentData: {},
  contentTitle: '',
  contentPath: '',
  contentIFrame: '',
  contentBackground: '',
  contentImage: [],
  contentLink: [],
  contentEsri: [],
  contentAudio: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DIALOG_SHOW:
      return {
        ...state,
        isDialogOpen: true
      }
    case DIALOG_HIDE:
      return {
        ...state,
        isDialogOpen: false
      }
    case TOGGLE_DRAWER:
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen
      }
    case SHOW_DRAWER:
      return {
        ...state,
        isDrawerOpen: true
      }
    case HIDE_DRAWER:
      return {
        ...state,
        isDrawerOpen: false
      }
    case TOGGLE_COLLAPSE:
      return {
        ...state,
        collapsed: !state.collapsed
      }
    case CONTENT_CHANGE:
      switch (action.payload) {
        case 'FolkCulture':
          return {
            ...state,
            title: 'Folk Culture'
          }
        case 'NatureAndPerspective':
          return {
            ...state,
            title: 'Nature And Perspective'
          }
        default:
          return {
            ...state,
            title: action.payload
          }
      }
    case FETCH_BEGIN:
      return {
        ...state,
        isFetching: true,
        fetchError: false
      }
    case FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        fetchError: true
      }
    case FETCH_CLEAR:
      return {
        ...state,
        isFetching: false,
        fetchError: false,
        contentData: {}
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        contentData: action.payload,
        contentTitle: action.payload.title,
        contentPath: action.payload.path,
        contentIFrame: action.payload.iFrame,
        contentBackground: action.payload.background,
        contentImage: action.payload.image,
        contentLink: action.payload.link,
        contentEsri: action.payload.esri,
        contentAudio: action.payload.audio
      }
    default:
      return state
  }
}
