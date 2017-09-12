import {
  DIALOG_HIDE,
  DIALOG_SHOW,
  TOGGLE_DRAWER,
  HIDE_DRAWER,
  SHOW_DRAWER,
  TOGGLE_COLLAPSE,
  CONTENT_CHANGE
} from './../constants/action-types'

const initialState = {
  isDialogOpen: false,
  isDrawerOpen: false,
  title: 'Language',
  collapsed: false
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
      return {
        ...state,
        title: action.payload
      }
    default:
      return state
  }
}
