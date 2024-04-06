import {
  CLEAR,
  SEARCH_BY_CATEGORY,
  SEARCH_BY_KEYWORD,
} from './actionTypes';
import blogPosts from './data.json';


export const initialState = {
  blogs: [...blogPosts],

};

export const searchBlogs = {
  blogs: [...blogPosts],
};


export default function blogPostReducer(state = searchBlogs, action) {
  switch (action.type) {
    case SEARCH_BY_KEYWORD:
      const KEYWORD = action.payload.keyword.toLowerCase();
      const oldState = { ...initialState, blogs: [...initialState.blogs] };
      let result = oldState.blogs.filter((obj) => {
        if (obj.title.toLowerCase().includes(KEYWORD)) {
          return true;
        } else {
          return false;
        }
      });

      if (!KEYWORD) {
        result = [...blogPosts];
      }

      return {
        ...state,
        blogs: [...result],
      };



    case SEARCH_BY_CATEGORY:
      const CATEGORY_KEYWORD = action.payload.keyword.toLowerCase();
      const categoryState = { ...initialState, blogs: [...initialState.blogs] };
      let resultArray = categoryState.blogs.filter((obj) => {
        if (obj.category.toLowerCase().includes(CATEGORY_KEYWORD)) {
          return true;
        } else {
          return false;
        }
      });

      if (!CATEGORY_KEYWORD) {
        resultArray = [...blogPosts];
      }

      return {
        ...state,
        blogs: [...resultArray],

      };

    case CLEAR:
      return {
        ...state,
        blogs: [...blogPosts],
      };

    default:
      return state;
  }
}
