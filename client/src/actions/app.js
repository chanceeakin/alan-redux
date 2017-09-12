import {
  DIALOG_HIDE,
  DIALOG_SHOW,
  TOGGLE_DRAWER,
  SHOW_DRAWER,
  HIDE_DRAWER,
  CONTENT_CHANGE,
  TOGGLE_COLLAPSE,
  FETCH_SUCCESS,
  FETCH_BEGIN,
  FETCH_FAIL,
  FETCH_CLEAR
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
    dispatch(fetchContent(payload))
  }
}

const fetchContent = payload => {
  return async dispatch => {
    dispatch({
      type: FETCH_BEGIN
    })
    try {
      const api = await fetch(`/api/${payload}`, {
        method: 'GET'
      })
      console.log(api)
      const json = await api.json()
      await dispatch(successfulRequest(json))
    } catch (err) {
      await dispatch(failedRequest(err))
    }
  }
}

const successfulRequest = payload => {
  return dispatch => {
    dispatch({
      type: FETCH_SUCCESS,
      payload
    })
  }
}

const failedRequest = payload => {
  return dispatch => {
    dispatch({
      type: FETCH_FAIL,
      payload
    })
    setTimeout(() => {
      dispatch({
        type: FETCH_CLEAR
      })
    }, 8000)
  }
}

export const toggleCollapse = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_COLLAPSE
    })
  }
}
