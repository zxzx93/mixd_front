import { useDispatch } from "react-redux";
import { realTimeMoreMarket } from "../../store/modules/market";

export const MoveScroll = () => {
    const dispatch = useDispatch();
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
        // dispatch(realTimeMoreMarket());
        dispatch(realTimeMoreMarket());
        console.log("탔다 탔엉");
    }
};
