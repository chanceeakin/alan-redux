import {
  DIALOG_HIDE,
  DIALOG_SHOW,
  TOGGLE_DRAWER,
  HIDE_DRAWER,
  SHOW_DRAWER
} from './../constants/action-types'

const initialState = {
  isDialogOpen: false,
  isDrawerOpen: false
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
    default:
      return state
  }
}
