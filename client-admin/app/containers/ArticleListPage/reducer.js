/*
 *
 * ArticleListPage reducer
 *
 */

import { fromJS } from 'immutable';
import * as types from './constants';

export const initialState = fromJS({
  all: [],
  one: {},
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_ALL_SUCCESS:
      return state.merge({
        all: fromJS(action.payload.data),
      });
    case types.LOAD_ONE_SUCCESS:
      return state.merge({
        one: fromJS(action.payload.data),
      });
    default:
      return state;
  }
}

export default reducer;