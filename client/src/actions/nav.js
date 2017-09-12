import {
  PUSH_PAGE
} from './../constants/action-types'

import { push } from 'react-router-redux'
import {changeContent} from './app'

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

export const resourcePage = () => {
  return dispatch => {
    dispatch({
      type: PUSH_PAGE
    })
    dispatch(push('/resources'))
  }
}

export const contentPage = payload => {
  return dispatch => {
    dispatch({
      type: PUSH_PAGE
    })
    dispatch(changeContent(payload))
    dispatch(push(`/pages/${payload}`))
  }
}
