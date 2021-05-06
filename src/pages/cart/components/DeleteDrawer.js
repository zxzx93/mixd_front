import React from "react";
import { Button, message } from "antd";
import { useDispatch } from "react-redux";
import DeleteDrawerStyled from "./DeleteDrawerStyled";
import { getUserToken } from "../../../util/decryptUser";
import { selectDeleteItem } from "../../../store/modules/cart";

const DeleteDrawer = ({ visible, close, checkItems, sumArray }) => {
    const dispatch = useDispatch();
    const { token } = getUserToken();

    const selectDeleteHandler = () => {
        if(sumArray.length !== 0) {
            checkItems = sumArray
        }
        const checkArray = [];
        checkItems.forEach((value) => 
            checkArray.push(value.pkNum)
        )
        dispatch(selectDeleteItem(checkArray, token))
        message.info("댓글이 삭제되었어요.", 1.5)
        close();
    };

    const cancelBtn = () => {
        close();
    };

    return (
        <DeleteDrawerStyled
            visible={visible}
            placement={"bottom"}
            closable={false}
            title={
                <p>선택한 상품을 장바구니에서 삭제하시겠습니까?</p>
            }
        >
        <div className="delete_wrap">
            <Button
                className="delete_comp"
                type="text"
                onClick={selectDeleteHandler}
            >
                삭제
            </Button>
            <Button 
                type="text" 
                onClick={cancelBtn}
            >
                취소
            </Button>
        </div>
        </DeleteDrawerStyled>
    );
};

export default DeleteDrawer;
