import * as actionTypes from "~/redux/actions/actions";

export const initialState = {
  isOpen: [],
  opened: true,
};

const MenuReducer = (state = initialState, action) => {
  let id;
  switch (action.type) {
    case actionTypes.MENU_OPEN:
      id = action.id;
      return {
        ...state,
        isOpen: [id],
      };
    case actionTypes.SET_MENU:
      return {
        ...state,
        opened: action.opened,
      };
    default:
      return state;
  }
};

export default MenuReducer;
