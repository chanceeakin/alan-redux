import {
  DIALOG_HIDE,
  DIALOG_SHOW,
  TOGGLE_DRAWER,
  SHOW_DRAWER,
  HIDE_DRAWER,
  CONTENT_CHANGE,
  TOGGLE_COLLAPSE
} from './../constants/action-types'

export const showDialog = () => {
  return dispatch => {
    dispatch({
      type: DIALOG_SHOW
    })
  }
}

export const hideDialog = () => {
  return dispatch => {
    dispatch({
      type: DIALOG_HIDE
    })
  }
}

export const toggleDrawer = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_DRAWER
    })
  }
}

export const showDrawer = () => {
  return dispatch => {
    dispatch({
      type: SHOW_DRAWER
    })
  }
}

export const hideDrawer = () => {
  return dispatch => {
    dispatch({
      type: HIDE_DRAWER
    })
  }
}

export const changeContent = payload => {
  return dispatch => {
    dispatch({
      type: CONTENT_CHANGE,
      payload
    })
  }
}

export const toggleCollapse = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_COLLAPSE
    })
  }
}
