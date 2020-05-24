import {
  CHANGE_THEME_TO_DARK,
  CHANGE_THEME_TO_LIGHT,
} from '../actions/themeActions';


let themeSelection  = localStorage.getItem('theme');
const initialState = {

  className: themeSelection == null ? 'theme-dark' : themeSelection ,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME_TO_DARK:
      return { className: 'theme-dark' };
    case CHANGE_THEME_TO_LIGHT:
      return { className: 'theme-light' };
    default:
      return state;
  }
}
