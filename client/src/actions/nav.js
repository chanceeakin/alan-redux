import {
  PUSH_PAGE
} from './../constants/action-types'

import { push } from 'react-router-redux'

export const homePage = () => {
  return dispatch => {
    dispatch({
      type: PUSH_PAGE
    })
    dispatch(push('/'))
  }
}

export const calendarPage = () => {
  return dispatch => {
    dispatch({
      type: PUSH_PAGE
    })
    dispatch(push('/calendar'))
  }
}
