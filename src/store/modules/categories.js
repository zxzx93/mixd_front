import axios from "axios";
import produce from "../../util/produce";

const GET_CATEGORIES_REQUEST = "categories/GET_CATEGORIES_REQUEST"; // 카테고리 리스트
const GET_CATEGORIES_SUCCESS = "categories/GET_CATEGORIES_SUCCESS";
const GET_CATEGORIES_ERROR = "categories/GET_CATEGORIES_ERROR";

const ADD_CHECK_REQUSET = "categories/ADD_CHECK_REQUSET";
const ADD_CHECK_ITEM = "categories/ADD_CHECK_ITEM";

const initialState = {
  categoryLoading: false, // 카테고리 리스트
  categoryDone: false,
  categoryError: null,
  category: [],
    cateItemDone: false,
    cateItem: [],
};


export const categoryInfo = () => async dispatch => {
  dispatch({ type: GET_CATEGORIES_REQUEST });
  try {
    const categoryList = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/categories`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        //  withCredentials: true,
        // credentials: "same-origin",
      }
    );
    dispatch({
      type: GET_CATEGORIES_SUCCESS,
      payload: categoryList.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_CATEGORIES_ERROR,
      payload: error.response.data,
    });
  }
};

export const addCheckItem = (id) => (
    { type: ADD_CHECK_REQUSET }, { type: ADD_CHECK_ITEM, id }
);

//reducer
const categories = (state = initialState, action) =>
    produce(state, (draft) => {
        // console.log(action);

        switch (action.type) {
            case GET_CATEGORIES_REQUEST:
                draft.categoryLoading = true;
                draft.categoryDone = false;
                draft.categoryError = null;
                break;
            case GET_CATEGORIES_SUCCESS:
                draft.categoryLoading = false;
                draft.categoryDone = true;
                draft.category = action.payload.data;
                break;
            case GET_CATEGORIES_ERROR:
                draft.categoryLoading = true;
                draft.categoryError = action.payload;
                break;

            case ADD_CHECK_REQUSET:
                draft.cateItemDone = false;
                break;
            case ADD_CHECK_ITEM:
                draft.cateItem = action.id;
                draft.cateItemDone = true;
                break;
            default:
                break;
        }
    });

export default categories;
