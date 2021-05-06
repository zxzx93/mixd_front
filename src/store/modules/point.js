import axios from "axios";
import produce from "../../util/produce";

const POINT_LIST_REQUEST = "point/POINT_LIST_REQUEST";
const POINT_LIST_SUCCESS = "point/POINT_LIST_SUCCESS";
const POINT_LIST_ERROR = "point/POINT_LIST_ERROR";


const initialState = {
    pointListLoading: false, // 쿠폰
    pointListDone: false,
    pointError: false,
    pointLists: [],
};


export const pointListInfo = (props) => async (dispatch) => {
    dispatch({ type: POINT_LIST_REQUEST, payload: props });

    try {
        const pointList = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/deposit`,
            {
                headers: {
                    Authorization: "Bearer " + props.token.accessToken,
                },
            }
        );
        // console.log("pointList",pointList);
        // console.log(
        //     "process.env.REACT_APP_API_URL",
        //     process.env.REACT_APP_API_URL
        // );
        dispatch({
            type: POINT_LIST_SUCCESS,
            payload: pointList.data.data,
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: POINT_LIST_ERROR,
            payload: error.response.data,
        });
    }
};
const point = (state = initialState, action) =>
    produce(state, (draft) => {
        // console.log(action.payload);

        switch (action.type) {
            case POINT_LIST_REQUEST: //포인트 리스트
                draft.pointListLoading = true;
                draft.pointListDone = false;
                draft.pointError = null;
                break;

            case POINT_LIST_SUCCESS:
                draft.pointListLoading = false;
                draft.pointListDone = true;
                draft.pointLists = action.payload;
                break;

            case POINT_LIST_ERROR:
                draft.pointLoading = false;
                draft.pointError = action.payload;
                break;

            default:
                break;
        }
    });
export default point;
