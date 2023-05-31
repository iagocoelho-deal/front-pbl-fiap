import { suppliersTypes } from "./types";

const INITIAL_STATE = {
  register: {
    loading: false,
    success: false,
    error: false,
    data: {},
  },
  list: {
    loading: false,
    success: false,
    error: false,
    data: [],
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case suppliersTypes.GET_SUPPLIER_LIST_REQUEST:
      return {
        ...state,
        list: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case suppliersTypes.GET_SUPPLIER_LIST_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          data: action.payload.data,
          success: true,
          loading: false,
          error: false,
        },
      };
    case suppliersTypes.GET_SUPPLIER_LIST_FAILURE:
      return {
        ...state,
        list: {
          ...state.list,
          success: false,
          loading: false,
          error: true,
        },
      };

    case suppliersTypes.REGISTER_SUPPLIER_REQUEST:
      return {
        ...state,
        register: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case suppliersTypes.REGISTER_SUPPLIER_SUCCESS:
      return {
        ...state,
        register: {
          ...state.register,
          data: action.payload.data,
          success: true,
          loading: false,
          error: false,
        },
      };
    case suppliersTypes.REGISTER_SUPPLIER_FAILURE:
      return {
        ...state,
        register: {
          ...state.register,
          success: false,
          loading: false,
          error: true,
        },
      };
    default:
      return state;
  }
};

export default reducer;
