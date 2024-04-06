import {
  CLEAR,
  SEARCH_BY_CATEGORY,
  SEARCH_BY_KEYWORD,
} from './actionTypes';

export function searchByKeyword(keyword) {
  return {
    type: SEARCH_BY_KEYWORD,
    payload: {
      keyword: keyword,
    },
  };
}


export function searchByCategory(keyword, show) {
  return {
    type: SEARCH_BY_CATEGORY,
    payload: {
      keyword: keyword,
      show: show,
    },
  };
}


export function clear() {
  return {
    type: CLEAR,
  };
}
